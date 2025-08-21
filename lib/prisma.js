import { PrismaClient } from "../generated/prisma/index.js";

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

// globalThis.prisma: this global version ensures that the prisma client instance is reused across hot reloads during development.