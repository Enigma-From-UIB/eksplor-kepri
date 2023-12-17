// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Pulau from './components/pulau';
import Wisata from './components/wisata';
import Kuliner from './components/kuliner';
import Budaya from './components/budaya';
import Game from './components/game';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Pulau" element={<Pulau />} />
          <Route path="/Wisata" element={<Wisata />} />
          <Route path="/Kuliner" element={<Kuliner />} />
          <Route path="/Budaya" element={<Budaya />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
