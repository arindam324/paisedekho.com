import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import { prisma } from "../../utils/Prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  const SECRET = "jabfgjkbajfbjafjasdb";
  try {
    if (req.method === "POST") {
      const user = await prisma.user.create({
        data: data,
      });

      const accessToken = jwt.sign(user, SECRET, { expiresIn: "30d" });
      res.status(200).json({ user: user, accessToken: accessToken });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e });
  }
};

export default handler;
