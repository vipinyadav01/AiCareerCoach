import { PrismaClient } from "@prisma/client";



export const db = new PrismaClient ();

if (process.env.NODE_ENV  !== "production"){
    globalThis.prisma = db;
}

//globleThis.prisma: this globle version ensures that the prisma client intences is  reused across hot reloads during development.