CREATE TABLE "SalesOpportunity" (
  "OpportunityID" serial PRIMARY KEY,
  "Title" varchar(255) NOT NULL,
  "ProbOfCompletion" float NOT NULL,
  "Amount" float NOT NULL,
  "DateCreated" timestamp NOT NULL,
  "DateClosed" timestamp,
  "Stage" int NOT NULL,
  "AssignedTo" int NOT NULL,
  "Notes" text
);