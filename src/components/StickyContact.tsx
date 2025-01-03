import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyContact() {
  const [isStickyVisible, setIsStickyVisible] = useState(true);

  const handleCall = () => {
    window.location.href = 'tel:+91-9596000323';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi! I\'m interested in Kashmir tour packages.');
    window.open(`https://wa.me/919596000323?text=${message}`, '_blank');
  };

  useEffect(() => {
    // Function to handle scroll behavior
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // If the user has scrolled to the bottom of the page, hide the sticky contact buttons
      if (scrollPosition + windowHeight >= documentHeight - 9) {
        setIsStickyVisible(false);
      } else {
        setIsStickyVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-transparent z-40 md:hidden transition-opacity duration-300 ${
        isStickyVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="grid grid-cols-2 gap-1 p-2">
        <button
          onClick={handleCall}
          className="flex items-center justify-center gap-2 bg-primary-600 text-white py-3 rounded-lg shadow-md"
        >
          <Phone className="h-4 w-4" /> {/* Smaller icon */}
          <span>Call Now</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg shadow-md"
        >
          <MessageCircle className="h-4 w-4" /> {/* Smaller icon */}
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
