import { HttpStatusCode } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../types/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HttpStatusCode>
) {
  const body = req.body;
  console.log("Body", body);
  res.status(200).json(HttpStatusCode.Ok);
}
