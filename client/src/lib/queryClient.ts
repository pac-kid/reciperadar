import { QueryClient, QueryFunction } from "@tanstack/react-query";

// ✅ Backend base URL — pulled from your .env (defaults to Render if not set)
const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ||
  "https://reciperadar-hr1f.onrender.com";

// Helper to check responses and throw errors properly
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// ✅ Universal API Request helper
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown
): Promise<Response> {
  const normalizedUrl = url.startsWith("http")
    ? url
    : `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;

  const res = await fetch(normalizedUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

// ✅ Query function for React Query
type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn =
  <T>({ on401 }: { on401: UnauthorizedBehavior }): QueryFunction<T> =>
  async ({ queryKey }) => {
    const path = queryKey.join("/") as string;
    const normalizedUrl = path.startsWith("http")
      ? path
      : `${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

    const res = await fetch(normalizedUrl, { credentials: "include" });

    if (on401 === "returnNull" && res.status === 401) {
      return null as T;
    }

    await throwIfResNotOk(res);
    return (await res.json()) as T;
  };

// ✅ React Query client setup
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
