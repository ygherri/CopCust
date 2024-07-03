import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingArtist from '../src/pages/LandingArtist';
import Landing from '../src/pages/Landing';

function App() {
  return (
    
      <Router>
    <Routes>
      <Route path="/landing-visiteurs" element={<Landing />} />
      <Route path="/" element={<LandingArtist />} />
    </Routes>
    </Router>
  );
}

export default App;
