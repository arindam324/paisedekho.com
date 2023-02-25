import { NextApiRequest, NextApiResponse } from "next";

import deleteDocument from "../../utils/deleteProducts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (id) {
    try {
      const response = await deleteDocument("products", id[0].toString());
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}
