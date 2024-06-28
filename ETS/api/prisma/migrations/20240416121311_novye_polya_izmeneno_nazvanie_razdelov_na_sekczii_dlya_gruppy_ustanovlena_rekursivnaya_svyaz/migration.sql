/*
  Warnings:

  - You are about to drop the column `duration_days` on the `Courses` table. All the data in the column will be lost.
  - You are about to drop the `Chapters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChaptersToMaterials` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "QuestionTypes" AS ENUM ('ONE_ANSWER', 'MANY_ANSWERS', 'TEXT_ANSWER');

-- DropForeignKey
ALTER TABLE "Chapters" DROP CONSTRAINT "Chapters_coursesId_fkey";

-- DropForeignKey
ALTER TABLE "_ChaptersToMaterials" DROP CONSTRAINT "_ChaptersToMaterials_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChaptersToMaterials" DROP CONSTRAINT "_ChaptersToMaterials_B_fkey";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "duration_days",
ADD COLUMN     "duration_hours" INTEGER,
ALTER COLUMN "image_url" SET DEFAULT 'https://s3.aeza.cloud/productive-girls/no_course_photo.png',
ALTER COLUMN "starts_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "starts_at" SET DATA TYPE DATE,
ALTER COLUMN "ends_at" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Groups" ADD COLUMN     "parentId" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "lastLogin" TIMESTAMP(3);

-- DropTable
DROP TABLE "Chapters";

-- DropTable
DROP TABLE "_ChaptersToMaterials";

-- CreateTable
CREATE TABLE "Sections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "unlocks_at" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER,
    "coursesId" INTEGER,

    CONSTRAINT "Sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionContents" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "sectionsId" INTEGER NOT NULL,

    CONSTRAINT "SectionContents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "type" "QuestionTypes" NOT NULL DEFAULT 'ONE_ANSWER',

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MaterialsToSections" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MaterialsToSectionContents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_QuestionToSubject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MaterialsToSections_AB_unique" ON "_MaterialsToSections"("A", "B");

-- CreateIndex
CREATE INDEX "_MaterialsToSections_B_index" ON "_MaterialsToSections"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MaterialsToSectionContents_AB_unique" ON "_MaterialsToSectionContents"("A", "B");

-- CreateIndex
CREATE INDEX "_MaterialsToSectionContents_B_index" ON "_MaterialsToSectionContents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QuestionToSubject_AB_unique" ON "_QuestionToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_QuestionToSubject_B_index" ON "_QuestionToSubject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sections" ADD CONSTRAINT "Sections_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sections" ADD CONSTRAINT "Sections_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionContents" ADD CONSTRAINT "SectionContents_sectionsId_fkey" FOREIGN KEY ("sectionsId") REFERENCES "Sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialsToSections" ADD CONSTRAINT "_MaterialsToSections_A_fkey" FOREIGN KEY ("A") REFERENCES "Materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialsToSections" ADD CONSTRAINT "_MaterialsToSections_B_fkey" FOREIGN KEY ("B") REFERENCES "Sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialsToSectionContents" ADD CONSTRAINT "_MaterialsToSectionContents_A_fkey" FOREIGN KEY ("A") REFERENCES "Materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialsToSectionContents" ADD CONSTRAINT "_MaterialsToSectionContents_B_fkey" FOREIGN KEY ("B") REFERENCES "SectionContents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToSubject" ADD CONSTRAINT "_QuestionToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToSubject" ADD CONSTRAINT "_QuestionToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
