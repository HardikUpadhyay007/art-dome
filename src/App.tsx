import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Artists from './pages/Artists';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <CustomCursor />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
        
        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                © 2025 Artistry. All masterpieces remain the property of their respective artists.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/50 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-white/50 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;