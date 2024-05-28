output "RDS_INSTANCE_ENDPOINT" {
  value = aws_db_instance.crm_postgres_rds.endpoint
}