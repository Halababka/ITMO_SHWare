/*
  Warnings:

  - You are about to drop the column `name` on the `Groups` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Materials` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[full_name]` on the table `Groups` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `Courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Materials` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Groups_name_key";

-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "duration_days" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "ends_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Groups" DROP COLUMN "name",
ADD COLUMN     "abbr" TEXT,
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Materials" DROP COLUMN "created",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Groups_full_name_key" ON "Groups"("full_name");
