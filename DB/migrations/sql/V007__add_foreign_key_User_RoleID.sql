ALTER TABLE "User"
  ADD CONSTRAINT "FK_User_RoleID"
    FOREIGN KEY ("RoleID")
    REFERENCES "Role"("RoleID");