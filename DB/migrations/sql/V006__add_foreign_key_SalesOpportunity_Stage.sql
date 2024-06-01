ALTER TABLE "SalesOpportunity"
  ADD CONSTRAINT "FK_SalesOpportunity_Stage"
    FOREIGN KEY ("Stage")
    REFERENCES "PipelineStage"("StageID");