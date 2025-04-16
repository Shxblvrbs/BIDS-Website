// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // if you want a separate About Us page
import ComingSoon from './pages/ComingSoon';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
};

export default App;