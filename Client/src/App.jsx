import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Campaign from './pages/Campaign';
import Research from './pages/Research';
import Festival from './pages/Festival';
import GetInvolved from './pages/GetInvolved';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/campaign/*" element={<Campaign />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/*" element={<Research />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/festival/*" element={<Festival />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/fellowship" element={<GetInvolved />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;