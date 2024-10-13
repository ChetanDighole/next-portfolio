/*
  Warnings:

  - You are about to drop the column `name` on the `skill` table. All the data in the column will be lost.
  - Added the required column `image` to the `skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skill" DROP COLUMN "name",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
