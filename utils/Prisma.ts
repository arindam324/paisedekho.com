import { Banner, PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export async function createBanner(imageUrl: string): Promise<Banner> {
  const banner = await prisma.banner.create({
    data: {
      src: imageUrl,
    },
  });
  return banner;
}

export async function getBanners(): Promise<Banner[]> {
  const banners = await prisma.banner.findMany();
  return banners;
}

export async function getBannerById(id: string): Promise<Banner | null> {
  const banner = await prisma.banner.findUnique({
    where: { id },
  });
  return banner;
}

export async function updateBanner(
  id: string,
  imageUrl: string
): Promise<Banner | null> {
  const banner = await prisma.banner.update({
    where: { id },
    data: {
      src: imageUrl,
    },
  });
  return banner;
}

export async function deleteBanner(id: string): Promise<Banner | null> {
  const banner = await prisma.banner.delete({
    where: { id },
  });
  return banner;
}
