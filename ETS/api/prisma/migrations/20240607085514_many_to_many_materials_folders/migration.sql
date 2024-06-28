/*
  Warnings:

  - You are about to drop the column `folderId` on the `Materials` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Materials" DROP CONSTRAINT "Materials_folderId_fkey";

-- AlterTable
ALTER TABLE "Materials" DROP COLUMN "folderId";

-- CreateTable
CREATE TABLE "_FoldersToMaterials" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FoldersToMaterials_AB_unique" ON "_FoldersToMaterials"("A", "B");

-- CreateIndex
CREATE INDEX "_FoldersToMaterials_B_index" ON "_FoldersToMaterials"("B");

-- AddForeignKey
ALTER TABLE "_FoldersToMaterials" ADD CONSTRAINT "_FoldersToMaterials_A_fkey" FOREIGN KEY ("A") REFERENCES "Folders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoldersToMaterials" ADD CONSTRAINT "_FoldersToMaterials_B_fkey" FOREIGN KEY ("B") REFERENCES "Materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
