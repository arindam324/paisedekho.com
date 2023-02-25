import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteDocument<T>(modelName: string, id: string): Promise<T> {
  const result = await prisma[modelName].delete({
    where: { id },
  });
  return result as T;
}

export default deleteDocument;
