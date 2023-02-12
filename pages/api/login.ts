import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

import { prisma } from "../../utils/Prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const SECRET = "jabfgjkbajfbjafjasdb";
  try {
    if (req.method === "POST") {
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      });
      console.log(user);
      if (user) {
        const accessToken = jwt.sign(user, SECRET, { expiresIn: "30d" });
        res.status(200).json({ user: user, accessToken: accessToken });
      }

      res.json("somethng did happen");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "something went wrong" });
  }
};

export default handler;
