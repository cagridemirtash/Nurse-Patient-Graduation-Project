import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const patient = await prisma.patient.create({
    data: {
      full_name: "Çağrı Demirtaş",
      bed_number: "12312312",
      patient_complaint: "Mide bulantısı",
      description: "Ebele Hübele",
    },
  });
  console.log(patient);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
