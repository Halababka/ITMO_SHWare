/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Permissions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Permissions` table without a default value. This is not possible if the table is not empty.
  - Made the column `code` on table `Roles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Courses" ALTER COLUMN "image_url" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Permissions" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Roles" ALTER COLUMN "code" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_code_key" ON "Permissions"("code");
