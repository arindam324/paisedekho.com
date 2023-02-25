import { NextApiRequest, NextApiResponse } from "next";
import {
  createBanner,
  getBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
} from "../../utils/Prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
    case "PUT":
      handlePutRequest(req, res);
      break;
    case "DELETE":
      handleDeleteRequest(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const banners = await getBanners();
    res.status(200).json(banners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { imageUrl } = req.body;
    const banner = await createBanner(imageUrl);
    res.status(201).json(banner);
  } catch (error) {
    console.error(error);
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {}
