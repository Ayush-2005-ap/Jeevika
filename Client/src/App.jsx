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
import Donate from './pages/Donate';
import { LanguageProvider } from './context/LanguageContext';
import ResearchDetail from './pages/ResearchDetail'
import { useTranslation } from 'react-i18next';


function App() {

  const { t } = useTranslation();

  return (
    <LanguageProvider>
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
              <Route path="/research/:slug" element={<ResearchDetail />} />
              <Route path="/festival" element={<Festival />} />
              <Route path="/festival/*" element={<Festival />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/fellowship" element={<GetInvolved />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>

  );
}

export default App;