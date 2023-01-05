import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { User } from "../../../types/user";
import { TempUser } from "../../../types/tempUser";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;
  console.log("Body", body);

  const userFetch = (body: any) =>
    prisma.users
      .findMany({
        where: {
          user_name: body.username,
          user_password: body.password,
        },
      })
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  const user = userFetch(body);
  res.status(200).json({ name: user });
}
