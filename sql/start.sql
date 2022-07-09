CREATE TABLE IF NOT EXISTS sensor_filenames (
  id INTEGER,
  file_name VARCHAR(10) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS sensor_cal_data (
  file_name VARCHAR(10) REFERENCES sensor_filename (file_name),
  calibration_date TIMESTAMP,
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
  calibration_date TIMESTAMP,
  sensor_unique_id INTEGER,
  sensor_type VARCHAR(5),
  sensor_data TEXT
);