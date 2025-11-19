import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden pb-[96px] md:pb-16">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <div className="bottom-10 md:bottom-0">
          <ChatWidget />
        </div>
      </div>
    </Router>
  );
};

export default App;