/*
  Warnings:

  - Added the required column `key` to the `Materials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Materials" ADD COLUMN     "key" TEXT NOT NULL;
