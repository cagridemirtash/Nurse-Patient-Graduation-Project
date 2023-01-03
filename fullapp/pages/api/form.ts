import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  fullName: string;
  bedNumber: string;
  patientComplaint: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get data submitted in request's body.
  const body = req.body;
  console.log("body: ", body);

  return res.status(200).json({
    fullName: body.fullName,
    bedNumber: body.bedNumber,
    patientComplaint: body.patientComplaint,
    description: body.description,
  });
}
