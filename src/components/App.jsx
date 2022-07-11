import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import CalibrateSensors from './CalibrateSensors.jsx';
import Search from './Search.jsx';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calibrate-sensor" element={<CalibrateSensors />} />
        <Route path="/calibrate-base" element={<div>calibrate base</div>} />
        <Route path="/validate-system" element={<div>validate system</div>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;