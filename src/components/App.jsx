import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import CalibrateSensors from './routes/CalibrateSensors.jsx';
import CalibrateOutput from './routes/CalibrateOutput.jsx';
import CalibrateBase from './routes/CalibrateBase.jsx';
import ValidateSystem from './routes/ValidateSystem.jsx';
import Search from './routes/Search.jsx';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calibrate-sensor" element={<CalibrateSensors />} />
        <Route path="/calibrate-sensor/output" element={<CalibrateOutput />} />
        <Route path="/calibrate-base" element={<CalibrateBase />} />
        <Route path="/validate-system" element={<ValidateSystem />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;