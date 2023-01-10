import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Body", req.body);
  const fullName: string = req.body.fullName;
  const updateDetail: string = req.body.detail;
  const allUser = prisma.patient.findMany();
  allUser.then(async (response) => {
    await response.map((patients) => {
      if (patients.full_name === fullName) {
        updateData(patients.id, updateDetail);
      }
    });
  });

  res.json({ message: `${fullName} is uptaded` });
}
async function updateData(_id: number, updateDetail: string) {
  await prisma.patient.update({
    where: {
      id: _id,
    },
    data: {
      description: updateDetail,
    },
  });
}
