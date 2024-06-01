ALTER TABLE "SalesOpportunity"
  ADD CONSTRAINT "FK_SalesOpportunity_AssignedTo"
    FOREIGN KEY ("AssignedTo")
    REFERENCES "User"("UserID");