import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

// -------- PRODUCT TYPES --------
export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface InsertProduct {
  name: string;
  price: number;
}

// -------- STORAGE INTERFACES -------
export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Product operations
  getAllProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();

    // Seed with demo products for testing
    const demo1: Product = { id: randomUUID(), name: "Sample Recipe 1", price: 99 };
    const demo2: Product = { id: randomUUID(), name: "Sample Recipe 2", price: 199 };
    this.products.set(demo1.id, demo1);
    this.products.set(demo2.id, demo2);
  }

  // -------- USER FUNCTIONS --------
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // -------- PRODUCT FUNCTIONS --------
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
