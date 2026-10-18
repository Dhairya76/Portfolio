import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="cursor-glow" ref={cursorGlowRef}></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
