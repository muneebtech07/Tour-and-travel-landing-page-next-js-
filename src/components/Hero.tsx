import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import { ArrowRight, Calendar, Currency, CurrencyIcon, MapIcon, MapPin, PowerCircleIcon, TimerIcon, Users } from 'lucide-react';
import BookingForm from './BookingForm';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative min-h-[90vh] flex items-center bg-[#1B3C6B] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Snowfall
          snowflakeCount={200}
          radius={[0.5, 2]}
          speed={[0.5, 2]}
          wind={[-0.5, 2]}
          color="white"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          // backgroundImage: 'url(https://images.unsplash.com/photo-1566837497312-7be4a47b6ec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-2 text-white/90 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-light tracking-wide">
              Kashmir, India
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-4 md:mb-6 leading-tight text-shadow">
            Kashmir Tour Packages
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed font-light">
            Book Customized Kashmir Tour Packages with the Best Travel Agency in
            Kashmir
          </p>

          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg mb-6 md:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-center gap-3">
                <MapIcon className="w-6 h-6 text-[#00ff7f]" />
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">
                    Destinations
                  </p>
                  <p className="text-white font-medium">10+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CurrencyIcon className="w-6 h-6 text-[#00ff7f]" />
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">
                    Starting From
                  </p>
                  <p className="text-white font-medium">₹8,999/person*</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TimerIcon className="w-6 h-6 text-[#00ff7f]" />
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider">
                    Duration
                  </p>
                  <p className="text-white font-medium">3-15 Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-6 md:px-8 py-3 md:py-4 bg-[#00ff7f] text-[#1B3C6B] rounded-lg font-bold tracking-wide hover:bg-[#00cc66] transition-all flex items-center justify-center group"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white rounded-lg font-medium tracking-wide backdrop-blur-sm hover:bg-white/20 transition-all">
              <a href="https://himalayanmountainsports.com/">
                {' '}
                View other Tours{' '}
              </a>
            </button>
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
