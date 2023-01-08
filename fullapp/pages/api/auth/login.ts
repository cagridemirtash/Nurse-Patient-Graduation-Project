import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let match: boolean = false;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;
  console.log("Body", body.username, body.password);

  const allUser = prisma.users.findMany();

  await allUser
    .then(async (response) => {
      console.log("Response", response);
      response.forEach((user) => {
        console.log("User", user);
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
  return match
    ? res.status(200).json({ login: `${match}` })
    : res.status(401).json({ message: "Invalid credentials" });
}
