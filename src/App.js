import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingArtist from '../src/pages/LandingArtist';
import Landing from '../src/pages/Landing';

function App() {
  return (
    
      <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/landing-artist" element={<LandingArtist />} />
    </Routes>
    </Router>
  );
}

export default App;
