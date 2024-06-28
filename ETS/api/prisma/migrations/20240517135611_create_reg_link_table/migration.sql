/*
  Warnings:

  - You are about to drop the column `create_at` on the `Groups` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "AssessmentMethod" AS ENUM ('ADAPTIVE', 'STATISTICAL');

-- AlterTable
ALTER TABLE "Groups" DROP COLUMN "create_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "level" INTEGER;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "testTemplateId" INTEGER;

-- CreateTable
CREATE TABLE "RegistrationLinks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "token" TEXT NOT NULL,
    "remaining_usages" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" INTEGER,
    "groups" INTEGER[],

    CONSTRAINT "RegistrationLinks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestTemplate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "TestTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestSettings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "duration" INTEGER,
    "attemptsCount" INTEGER,
    "assessmentMethod" "AssessmentMethod" NOT NULL DEFAULT 'ADAPTIVE',
    "initialDifficulty" INTEGER,

    CONSTRAINT "TestSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestAssign" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "testTemplateId" INTEGER NOT NULL,
    "testSettingsId" INTEGER NOT NULL,

    CONSTRAINT "TestAssign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RegistrationLinks_token_key" ON "RegistrationLinks"("token");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_testTemplateId_fkey" FOREIGN KEY ("testTemplateId") REFERENCES "TestTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestTemplate" ADD CONSTRAINT "TestTemplate_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestSettings" ADD CONSTRAINT "TestSettings_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAssign" ADD CONSTRAINT "TestAssign_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAssign" ADD CONSTRAINT "TestAssign_testTemplateId_fkey" FOREIGN KEY ("testTemplateId") REFERENCES "TestTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestAssign" ADD CONSTRAINT "TestAssign_testSettingsId_fkey" FOREIGN KEY ("testSettingsId") REFERENCES "TestSettings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
