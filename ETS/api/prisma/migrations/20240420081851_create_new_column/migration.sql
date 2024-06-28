/*
  Warnings:

  - You are about to drop the column `text` on the `Answer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `questionId` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AnswerTypes" AS ENUM ('TEXT', 'IMAGE', 'RICH');

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "text",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "correct" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "questionId" INTEGER NOT NULL,
ADD COLUMN     "type" "AnswerTypes" NOT NULL;

-- AlterTable
ALTER TABLE "Roles" ADD COLUMN     "code" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Roles_code_key" ON "Roles"("code");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
