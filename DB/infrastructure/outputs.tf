output "RDS_INSTANCE_ENDPOINT" {
  value = aws_db_instance.CRM_postgres_rds.endpoint
}