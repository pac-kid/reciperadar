import { ThemeProvider } from '../ThemeProvider'
import { Button } from '@/components/ui/button'
import { useTheme } from '../ThemeProvider'
import { Moon, Sun } from 'lucide-react'

function ThemeToggleDemo() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm text-muted-foreground">Current theme: {theme}</p>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        data-testid="button-theme-toggle"
      >
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
    </div>
  )
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <ThemeToggleDemo />
    </ThemeProvider>
  )
}
