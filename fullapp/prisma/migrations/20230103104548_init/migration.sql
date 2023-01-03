-- CreateTable
CREATE TABLE "patient" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "bed_number" TEXT NOT NULL,
    "patient_complaint" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);
