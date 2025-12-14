import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InternationalHome from './pages/InternationalHome';
import GolfHome from './pages/GolfHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InternationalHome />} />
        <Route path="/golf" element={<GolfHome />} />
      </Routes>
    </Router>
  );
}

export default App;
