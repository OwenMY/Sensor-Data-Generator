CREATE TABLE IF NOT EXISTS sensor_filename (
  id INTEGER,
  file_name VARCHAR(10) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS sensor_cal_data (
  file_name VARCHAR(10) REFERENCES sensor_filename (file_name)
  calibration_date TIMESTAMP,
  sensor_unique_id INTEGER,
  sensor_type VARCHAR(5),
  sensor_data TEXT
);

