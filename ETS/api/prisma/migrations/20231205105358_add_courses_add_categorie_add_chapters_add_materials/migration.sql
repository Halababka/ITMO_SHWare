-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "starts_at" TIMESTAMP(3) NOT NULL,
    "ends_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unlocks_at" TIMESTAMP(3) NOT NULL,
    "coursesId" INTEGER,

    CONSTRAINT "Chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materials" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoriesToCourses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ChaptersToMaterials" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriesToCourses_AB_unique" ON "_CategoriesToCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriesToCourses_B_index" ON "_CategoriesToCourses"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChaptersToMaterials_AB_unique" ON "_ChaptersToMaterials"("A", "B");

-- CreateIndex
CREATE INDEX "_ChaptersToMaterials_B_index" ON "_ChaptersToMaterials"("B");

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToCourses" ADD CONSTRAINT "_CategoriesToCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriesToCourses" ADD CONSTRAINT "_CategoriesToCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChaptersToMaterials" ADD CONSTRAINT "_ChaptersToMaterials_A_fkey" FOREIGN KEY ("A") REFERENCES "Chapters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChaptersToMaterials" ADD CONSTRAINT "_ChaptersToMaterials_B_fkey" FOREIGN KEY ("B") REFERENCES "Materials"("id") ON DELETE CASCADE ON UPDATE CASCADE;
