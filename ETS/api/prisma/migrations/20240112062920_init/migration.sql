/*
  Warnings:

  - You are about to drop the column `value` on the `RolesToPermissions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Materials" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "RolesToPermissions" DROP COLUMN "value";
