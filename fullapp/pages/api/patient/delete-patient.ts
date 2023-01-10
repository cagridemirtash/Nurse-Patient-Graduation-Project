import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prismaClient";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const _id: number = req.body.id;
  const deleteUser = await prisma.patient.delete({
    where: {
      id: _id,
    },
  });

  res.json({ message: `${deleteUser.full_name} is deleted` });
}
