/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `userId` on the `Event` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fromDate" DATETIME NOT NULL,
    "toDate" DATETIME NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyAddress" TEXT,
    "city" TEXT,
    "country" TEXT,
    "task" TEXT,
    "asmeId" TEXT,
    "asmeApp" TEXT,
    "aia" TEXT,
    "hotelName" TEXT,
    "airportName" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Event" ("aia", "airportName", "asmeApp", "asmeId", "city", "companyAddress", "companyName", "completed", "country", "createdAt", "fromDate", "hotelName", "id", "task", "toDate") SELECT "aia", "airportName", "asmeApp", "asmeId", "city", "companyAddress", "companyName", "completed", "country", "createdAt", "fromDate", "hotelName", "id", "task", "toDate" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
