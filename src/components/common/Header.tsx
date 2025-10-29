import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-global-3">
      <div className="flex items-center justify-between w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[80px] py-3 md:py-6">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src="/images/MY_LOGO.png"
            alt="My Logo"
            className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
          />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6 md:gap-12">
            {['Home', 'Skills', 'Experience', 'About Me', 'Projects', 'Contact me'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-[16px] lg:text-[20px] font-sora font-semibold text-global-1 hover:text-global-2 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button - Desktop */}
        <div className="hidden lg:block">
          <a href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              rightImage={{
                src: '/images/img_download.svg',
                width: 20,
                height: 20,
              }}
              className="text-[16px] lg:text-[20px] font-sora font-semibold text-global-5 bg-global-1 rounded-[4px] px-4 py-2 lg:px-6 lg:py-3 gap-2"
            >
              Resume
            </Button>
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <div className="flex flex-col justify-center items-center w-6 h-6 gap-1">
            <span className="block w-full h-0.5 bg-global-1"></span>
            <span className="block w-full h-0.5 bg-global-1"></span>
            <span className="block w-full h-0.5 bg-global-1"></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-white w-full shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {['Home', 'Skills', 'Experience', 'About Me', 'Projects', 'Contact me'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-[16px] font-sora font-semibold text-global-1 hover:text-global-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">
                <Button
                  variant="primary"
                  rightImage={{
                    src: '/images/img_download.svg',
                    width: 20,
                    height: 20,
                  }}
                  className="text-[16px] font-sora font-semibold text-global-5 bg-global-1 rounded-[4px] px-4 py-2 gap-2"
                >
                  Resume
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
