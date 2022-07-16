DELETE FROM base_cal_data WHERE  sensor_unique_id >= 1;
DELETE FROM base_filenames WHERE id >= 1;
DELETE FROM sensor_cal_data WHERE sensor_unique_id >= 1;
DELETE FROM sensor_filenames WHERE id >=1;
DELETE FROM sensor_output_data WHERE sensor_unique_id >= 1;
DELETE FROM output_filenames WHERE id >= 1;
DELETE FROM validate_system_data WHERE sensor_unique_id >= 1;
DELETE FROM validate_filenames WHERE id >= 1;