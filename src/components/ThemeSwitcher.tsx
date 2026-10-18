import React, { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';
import './ThemeSwitcher.css';

const themes = [
  { id: 'cyberpunk', name: 'Cyberpunk' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'terminal', name: 'Terminal' },
  { id: 'aesthetic', name: 'Aesthetic' },
  { id: 'bento', name: 'Bento Box' },
  { id: 'neumorphism', name: 'Neumorphism' },
  { id: 'popart', name: 'Pop-Art' },
  { id: 'brutalism', name: 'Brutalism' },
];

const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyberpunk');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher-container">
      <button 
        className="theme-switcher-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Theme Switcher"
      >
        <Palette size={20} />
      </button>

      {isOpen && (
        <div className="theme-switcher-menu glass-card">
          <h4 className="theme-switcher-title">Select Theme</h4>
          <div className="theme-options">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                onClick={() => {
                  setCurrentTheme(theme.id);
                  setIsOpen(false);
                }}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
