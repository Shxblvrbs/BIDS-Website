// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import VoiceStressAnalysis from "./pages/VoiceStressAnalysis";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/voice-stress-analyzer" element={<VoiceStressAnalysis />} />
    </Routes>
  );
};

export default App;