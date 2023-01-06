import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prismaClient";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get data submitted in request's body.
  const body = req.body;
  let fullName: string = "";
  const patient = await prisma.patient
    .create({
      data: {
        full_name: body.fullName,
        bed_number: body.bedNumber,
        patient_complaint: body.patientComplaint,
        description: body.description,
      },
    })
    .then(async (response) => {
      fullName = response.full_name;
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  console.log(patient);
  return res.status(200).json({ message: `Welcome the nursolo ${fullName}` });
}
