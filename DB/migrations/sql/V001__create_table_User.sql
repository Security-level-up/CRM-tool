CREATE TABLE "User" (
  "UserID" serial PRIMARY KEY,
  "Username" varchar(255) NOT NULL,
  "RoleID" int NOT NULL
);