/*
  Warnings:

  - You are about to drop the column `testTemplateId` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `initialDifficulty` on the `TestSettings` table. All the data in the column will be lost.
  - The primary key for the `UserAssign` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_testTemplateId_fkey";

-- AlterTable
ALTER TABLE "Materials" ADD COLUMN     "studentAssignmentsId" INTEGER;

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "testTemplateId";

-- AlterTable
ALTER TABLE "TestSettings" DROP COLUMN "initialDifficulty";

-- AlterTable
ALTER TABLE "UserAssign" DROP CONSTRAINT "UserAssign_pkey",
ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "questionId" INTEGER,
ADD COLUMN     "startTime" TIMESTAMP(3),
ADD CONSTRAINT "UserAssign_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "text" TEXT,
    "sectionContentsId" INTEGER,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentAssignments" (
    "id" SERIAL NOT NULL,
    "submitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tasksId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "StudentAssignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestTemplateSubjects" (
    "id" SERIAL NOT NULL,
    "testTemplateId" INTEGER,
    "subjectId" INTEGER NOT NULL,
    "subjectName" TEXT NOT NULL,
    "initialDifficulty" INTEGER,
    "threshold" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TestTemplateSubjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserQuestions" (
    "id" SERIAL NOT NULL,
    "userAssignId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answerTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "level" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UserQuestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserQuestionsAnswer" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "answeredContent" TEXT,
    "type" "AnswerTypes" NOT NULL DEFAULT 'TEXT',
    "correct" BOOLEAN NOT NULL DEFAULT false,
    "selected" BOOLEAN NOT NULL DEFAULT false,
    "AnsweredCorrectly" BOOLEAN NOT NULL DEFAULT false,
    "userQuestionsId" INTEGER,

    CONSTRAINT "UserQuestionsAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MaterialsToTasks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MaterialsToTasks_AB_unique" ON "_MaterialsToTasks"("A", "B");

-- CreateIndex
CREATE INDEX "_MaterialsToTasks_B_index" ON "_MaterialsToTasks"("B");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_sectionContentsId_fkey" FOREIGN KEY ("sectionContentsId") REFERENCES "SectionContents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAssignments" ADD CONSTRAINT "StudentAssignments_tasksId_fkey" FOREIGN KEY ("tasksId") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAssignments" ADD CONSTRAINT "StudentAssignments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materials" ADD CONSTRAINT "Materials_studentAssignmentsId_fkey" FOREIGN KEY ("studentAssignmentsId") REFERENCES "StudentAssignments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestTemplateSubjects" ADD CONSTRAINT "TestTemplateSubjects_testTemplateId_fkey" FOREIGN KEY ("testTemplateId") REFERENCES "TestTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestTemplateSubjects" ADD CONSTRAINT "TestTemplateSubjects_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAssign" ADD CONSTRAINT "UserAssign_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuestions" ADD CONSTRAINT "UserQuestions_userAssignId_fkey" FOREIGN KEY ("userAssignId") REFERENCES "UserAssign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuestions" ADD CONSTRAINT "UserQuestions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserQuestionsAnswer" ADD CONSTRAINT "UserQuestionsAnswer_userQuestionsId_fkey" FOREIGN KEY ("userQuestionsId") REFERENCES "UserQuestions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialsToTasks" ADD CONSTRAINT "_MaterialsToTasks_A_fkey" FOREIGN KEY ("A") REFERENCES "Materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialsToTasks" ADD CONSTRAINT "_MaterialsToTasks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
