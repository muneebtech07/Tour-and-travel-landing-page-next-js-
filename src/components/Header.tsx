import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain, MessageCircle, Phone } from 'lucide-react';
import logImage from '../assets/images/HMS_logo-1.svg';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#1B3C6B]/90 backdrop-blur-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src={logImage}
                alt="Log"
                className="object-cover h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
              />
              {/* Image as logo */}
              <span
                className={`ml-2 font-display font-semibold ${isScrolled ? 'text-[#1B3C6B]' : 'text-white'
                  } text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
              >
                Himalayan Mountain Sports
              </span>

            </div>

            <nav className="hidden md:flex space-x-8">
              {['Home', 'Packages'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`px-3 py-2 text-sm uppercase tracking-wider font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-[#1B3C6B]'
                    : 'text-white hover:text-[#00ff7f]'
                    }`}
                >
                  {item}
                </a>
              ))}

              <a
                href="https://himalayanmountainsports.com/about/"  // Replace with your actual external URL
                target="_blank"  // Opens in a new tab
                rel="noopener noreferrer"  // Security best practice for external links
                className="text-earth-800 hover:text-primary-600 px-3 py-2 text-sm uppercase tracking-wider font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="https://himalayanmountainsports.com/contact/"  // Replace with your actual external URL
                target="_blank"  // Opens in a new tab
                rel="noopener noreferrer"  // Security best practice for external links
                className="text-earth-800 hover:text-primary-600 px-3 py-2 text-sm uppercase tracking-wider font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isScrolled ? 'text-[#1B3C6B]' : 'text-white'}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Packages'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-base font-medium text-[#1B3C6B] hover:text-[#00ff7f] hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
              href="https://himalayanmountainsports.com/contact/"  // Replace with your actual external URL
              target="_blank"  // Opens in a new tab
              rel="noopener noreferrer"  // Security best practice for external links
              className="block px-3 py-2 text-base font-medium text-earth-800 hover:text-primary-600 hover:bg-earth-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="https://himalayanmountainsports.com/about/"  // Replace with your actual external URL
              target="_blank"  // Opens in a new tab
              rel="noopener noreferrer"  // Security best practice for external links
              className="block px-3 py-2 text-base font-medium text-earth-800 hover:text-primary-600 hover:bg-earth-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
