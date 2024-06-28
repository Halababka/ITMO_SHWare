/*
  Warnings:

  - You are about to drop the column `groupsId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_groupsId_fkey";

-- AlterTable
ALTER TABLE "Chapters" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Materials" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "mime_type" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "groupsId";

-- CreateTable
CREATE TABLE "_GroupsToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GroupsToUser_AB_unique" ON "_GroupsToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupsToUser_B_index" ON "_GroupsToUser"("B");

-- AddForeignKey
ALTER TABLE "_GroupsToUser" ADD CONSTRAINT "_GroupsToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupsToUser" ADD CONSTRAINT "_GroupsToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
