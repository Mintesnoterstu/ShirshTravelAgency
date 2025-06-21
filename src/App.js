import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ToursPage from './pages/ToursPage';
import ContactPage from './pages/ContactPage';
import LalibelaDetails from './pages/LalibelaDetails';
import AxumDetails from './pages/AxumDetails';
import GondarDetails from './pages/GondarDetails';
import SimienMountainsDetails from './pages/SimienMountainsDetails';
import DanakilDepressionDetails from './pages/DanakilDepressionDetails';
import OmoValleyDetails from './pages/OmoValleyDetails';
import BlueNileFallsDetails from './pages/BlueNileFallsDetails';
import TiyaDetails from './pages/TiyaDetails';
import BaleMountainsDetails from './pages/BaleMountainsDetails';
import HararDetails from './pages/HararDetails';
import NationalMuseumDetails from './pages/NationalMuseumDetails';
import AbunaYemataGuhDetails from './pages/AbunaYemataGuhDetails';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function AppContent() {
  const { currentTheme } = useTheme();
  
  return (
    <Router>
      <div className="App" style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/lalibela" element={<LalibelaDetails />} />
            <Route path="/axum" element={<AxumDetails />} />
            <Route path="/gondar" element={<GondarDetails />} />
            <Route path="/simien-mountains" element={<SimienMountainsDetails />} />
            <Route path="/danakil-depression" element={<DanakilDepressionDetails />} />
            <Route path="/omo-valley" element={<OmoValleyDetails />} />
            <Route path="/blue-nile-falls" element={<BlueNileFallsDetails />} />
            <Route path="/tiya" element={<TiyaDetails />} />
            <Route path="/bale-mountains" element={<BaleMountainsDetails />} />
            <Route path="/harar" element={<HararDetails />} />
            <Route path="/national-museum" element={<NationalMuseumDetails />} />
            <Route path="/abuna-yemata-guh" element={<AbunaYemataGuhDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 