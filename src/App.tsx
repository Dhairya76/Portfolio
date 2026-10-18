import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Writing />
        <Skills />
        <Education />
      </main>

      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
