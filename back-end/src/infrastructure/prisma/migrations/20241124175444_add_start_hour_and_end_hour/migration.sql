/*
  Warnings:

  - You are about to drop the column `hour` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `endHour` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startHour` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "hour",
ADD COLUMN     "endHour" TEXT NOT NULL,
ADD COLUMN     "startHour" TEXT NOT NULL;
