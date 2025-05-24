// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import VoiceStressAnalysis from "./pages/VoiceStressAnalysis";
import TacticalVehicles from './pages/TacticalVehicles';
import ExpeditionarySystems from './pages/ExpeditionarySystems';
import WeaponSystems from './pages/WeaponSystems';
import CBRN from './pages/CBRN';
import MDA from './pages/MDA';
import UnmannedSystems from './pages/UnmannedSystems';
import IBD from './pages/IBD';
import JVMA from './pages/JVMA';
import PostConflict from './pages/PostConflict';
import Solutions from './pages/Solutions';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/voice-stress-analyzer" element={<VoiceStressAnalysis />} />

      {/* informational pages */}
      <Route path="/tactical-vehicles" element={<TacticalVehicles />} />
      <Route path="/expeditionary-systems" element={<ExpeditionarySystems />} />
      <Route path="/weapon-systems" element={<WeaponSystems />} />
      <Route path="/cbrn-and-eod-bomb-detection" element={<CBRN />} />
      <Route path="/maritime-domain-awareness" element={<MDA />} />
      <Route path="/unmanned-systems" element={<UnmannedSystems />} />

      <Route path="/training" element={<ComingSoon />} />

      {/* directional pages */}
      <Route path="/products-and-services" element={<ComingSoon />} />
      <Route path="/defense" element={<ComingSoon />} />
      <Route path="/defense/land" element={<ComingSoon />} />
      <Route path="/defense/sea" element={<ComingSoon />} />
      <Route path="/defense/air" element={<ComingSoon />} />

      <Route path="/solutions" element={<Solutions />} />
      <Route path="/international-business-development-and-capture-management" element={<IBD />} />
      <Route path="/joint-ventures-mergers-and-acquisitions" element={<JVMA />} />
      <Route path="/post-conflict-reconstruction" element={<PostConflict />} />

    </Routes>
  );
};

export default App;