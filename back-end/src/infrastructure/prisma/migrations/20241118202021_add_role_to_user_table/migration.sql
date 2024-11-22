/*
  Warnings:

  - Added the required column `hour` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sport` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "hour" TEXT NOT NULL,
ADD COLUMN     "sport" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
