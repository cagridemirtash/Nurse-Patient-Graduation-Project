import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  login: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;
  let match: boolean = false;
  console.log("Body", body);

  const allUser = prisma.users
    .findMany()
    .then(async (result) => {
      result.map((user) => {
        if (
          user.user_name === body.username &&
          user.user_password === body.password
        ) {
          match = true;
        }
      });
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

  res.status(200).json({ login: `${match}` });
}
