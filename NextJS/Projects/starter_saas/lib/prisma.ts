import { PrismaClient } from "@/app/generated/prisma";

const prismaClientSignlton = () => {
  return new PrismaClient();
};

type prismaClientSignlton = ReturnType<typeof prismaClientSignlton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSignlton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
