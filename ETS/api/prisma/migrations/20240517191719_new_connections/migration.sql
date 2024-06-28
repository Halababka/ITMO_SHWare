/*
  Warnings:

  - You are about to drop the column `groups` on the `RegistrationLinks` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `RegistrationLinks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Groups" ADD COLUMN     "testAssignId" INTEGER;

-- AlterTable
ALTER TABLE "RegistrationLinks" DROP COLUMN "groups",
DROP COLUMN "role",
ADD COLUMN     "rolesId" INTEGER;

-- CreateTable
CREATE TABLE "UserAssign" (
    "userId" INTEGER NOT NULL,
    "assignId" INTEGER NOT NULL,

    CONSTRAINT "UserAssign_pkey" PRIMARY KEY ("userId","assignId")
);

-- CreateTable
CREATE TABLE "_GroupsToRegistrationLinks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GroupsToRegistrationLinks_AB_unique" ON "_GroupsToRegistrationLinks"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupsToRegistrationLinks_B_index" ON "_GroupsToRegistrationLinks"("B");

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_testAssignId_fkey" FOREIGN KEY ("testAssignId") REFERENCES "TestAssign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistrationLinks" ADD CONSTRAINT "RegistrationLinks_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAssign" ADD CONSTRAINT "UserAssign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAssign" ADD CONSTRAINT "UserAssign_assignId_fkey" FOREIGN KEY ("assignId") REFERENCES "TestAssign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupsToRegistrationLinks" ADD CONSTRAINT "_GroupsToRegistrationLinks_A_fkey" FOREIGN KEY ("A") REFERENCES "Groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupsToRegistrationLinks" ADD CONSTRAINT "_GroupsToRegistrationLinks_B_fkey" FOREIGN KEY ("B") REFERENCES "RegistrationLinks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
