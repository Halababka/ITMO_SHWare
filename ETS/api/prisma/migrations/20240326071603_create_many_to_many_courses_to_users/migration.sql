/*
  Warnings:

  - You are about to drop the column `userId` on the `Courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_userId_fkey";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_CoursesOwners" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EnrolledCourses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoursesOwners_AB_unique" ON "_CoursesOwners"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursesOwners_B_index" ON "_CoursesOwners"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EnrolledCourses_AB_unique" ON "_EnrolledCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_EnrolledCourses_B_index" ON "_EnrolledCourses"("B");

-- AddForeignKey
ALTER TABLE "_CoursesOwners" ADD CONSTRAINT "_CoursesOwners_A_fkey" FOREIGN KEY ("A") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoursesOwners" ADD CONSTRAINT "_CoursesOwners_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnrolledCourses" ADD CONSTRAINT "_EnrolledCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EnrolledCourses" ADD CONSTRAINT "_EnrolledCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
