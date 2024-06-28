/*
  Warnings:

  - You are about to drop the `_PermissionsToRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PermissionsToRoles" DROP CONSTRAINT "_PermissionsToRoles_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermissionsToRoles" DROP CONSTRAINT "_PermissionsToRoles_B_fkey";

-- DropTable
DROP TABLE "_PermissionsToRoles";

-- CreateTable
CREATE TABLE "RolesToPermissions" (
    "roles_id" INTEGER NOT NULL,
    "permissions_id" INTEGER NOT NULL,
    "value" BOOLEAN NOT NULL,

    CONSTRAINT "RolesToPermissions_pkey" PRIMARY KEY ("roles_id","permissions_id")
);

-- AddForeignKey
ALTER TABLE "RolesToPermissions" ADD CONSTRAINT "RolesToPermissions_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesToPermissions" ADD CONSTRAINT "RolesToPermissions_permissions_id_fkey" FOREIGN KEY ("permissions_id") REFERENCES "Permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
