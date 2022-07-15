CREATE TABLE IF NOT EXISTS sensor_filenames (
  id INTEGER,
  file_name VARCHAR(10) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS sensor_cal_data (
  file_name VARCHAR(10) REFERENCES sensor_filename (file_name),
  calibration_date DATE,
  sensor_unique_id INTEGER,
  sensor_type VARCHAR(5),
  sensor_data TEXT
);

CREATE TABLE IF NOT EXISTS base_filenames (
  id INTEGER,
  file_name VARCHAR(10) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS base_cal_data (
  file_name VARCHAR(10) REFERENCES base_filenames (file_name),
  base_station_unique_id VARCHAR(5),
  calibration_date DATE,
  sensor_unique_id INTEGER,
  sensor_type VARCHAR(5),
  sensor_data TEXT
);

CREATE TABLE IF NOT EXISTS output_filenames (
  id INTEGER,
  file_name VARCHAR(10) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS sensor_output_data (
  file_name VARCHAR(10) REFERENCES output_filenames (file_name),
  calibration_file VARCHAR(10),
  algorithm_version VARCHAR(10),
  generation_date DATE,
  sensor_unique_id INTEGER,
  calibration_parameters TEXT
);

CREATE TABLE IF NOT EXISTS validate_filenames (
  id INTEGER,
  file_name VARCHAR(10) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS validate_system_data (
  file_name VARCHAR(10) REFERENCES validate_filenames (file_name),
  base_station_unique_id VARCHAR(5),
  algorithm_version VARCHAR(10),
  validation_date DATE,
  sensor_unique_id INTEGER,
  accuracy REAL,
  precision REAL
);
