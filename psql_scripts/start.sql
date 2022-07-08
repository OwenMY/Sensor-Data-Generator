CREATE TABLE IF NOT EXISTS Sensor_Cal_Data (
  file_name VARCHAR(10) PRIMARY KEY,
  calibration_date TIMESTAMP,
  sensor_unqiue_id INTEGER,
  sensor_type VARCHAR(5),
  sensor_data TEXT
);

