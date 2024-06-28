-- AlterTable
ALTER TABLE "StudentAssignments" ADD COLUMN     "grade" INTEGER,
ADD COLUMN     "reviewerId" INTEGER;

-- AddForeignKey
ALTER TABLE "StudentAssignments" ADD CONSTRAINT "StudentAssignments_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
