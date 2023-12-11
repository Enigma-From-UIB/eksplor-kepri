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
import Carousel from './assets/car.kuliner';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/pulau" element={<Pulau />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/kuliner" element={<Kuliner />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/game" element={<Game />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  
  );
}

function App() {
  let slides = [
    "https://www.teakpalace.com/image/cache/catalog/artikel/gambar-makanan-paling-enak-sate-kambing-1000x750h.jpg",
    "https://www.teakpalace.com/image/catalog/artikel/gambar-makanan-paling-enak-bakso.jpeg",
  ];
  return (
    <div className='w-[100%] m-auto pt-11'>
      <Carousel slides= {slides} />
    </div>
  )
}
export default App;
