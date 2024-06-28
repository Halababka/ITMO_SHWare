/*
  Warnings:

  - You are about to drop the `_QuestionToSubject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_QuestionToSubject" DROP CONSTRAINT "_QuestionToSubject_A_fkey";

-- DropForeignKey
ALTER TABLE "_QuestionToSubject" DROP CONSTRAINT "_QuestionToSubject_B_fkey";

-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "type" SET DEFAULT 'TEXT';

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "subjectId" INTEGER;

-- AlterTable
ALTER TABLE "Sections" ALTER COLUMN "unlocks_at" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_QuestionToSubject";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
