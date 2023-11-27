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
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pulau" element={<Pulau />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/kuliner" element={<Kuliner />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
