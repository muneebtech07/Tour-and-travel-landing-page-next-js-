import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, Clock } from 'lucide-react';
import BookingForm from './BookingForm';
import ItineraryModal from './ItineraryModal';

import dalLake from '../assets/images/kashmir tour packages (1).svg';
import srinagar from '../assets/images/kashmir tour packages (2).svg';
import pahalgam from '../assets/images/kashmir tour packages (3).svg';
import sonmarg from '../assets/images/kashmir tour packages (4).svg';
import gulmarg from '../assets/images/kashmir tour packages (5).svg';
import honeymoon from '../assets/images/kashmir tour packages (6).svg';

const packages = [
  {
    title: 'Kashmir Tour Package',
    description:
      'Experience the best of Srinagar with guided tours of Dal Lake, Mughal Gardens, and local markets.',
    price: '₹24,999',
    duration: '5 Days / 4 Nights',
    location: 'Srinagar',
    groupSize: '2-8',
    image: gulmarg,
    highlights: ['Dal Lake', 'Mughal Gardens', 'Shikara Ride', 'Local Cuisine'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Srinagar',
        activities: [
          'Airport pickup',
          'Check-in to houseboat',
          'Evening Shikara ride on Dal Lake',
          'Welcome dinner',
        ],
      },
      {
        day: 'Day 2',
        title: 'Mughal Gardens Tour',
        activities: [
          'Visit Nishat Garden',
          'Explore Shalimar Garden',
          'Tour of Chashme Shahi',
          'Local market visit',
        ],
      },
      {
        day: 'Day 3',
        title: 'Srinagar Exploration',
        activities: [
          'Morning visit to Hazratbal Shrine',
          'Afternoon leisure time by Dal Lake',
          'Evening Kashmiri cultural show',
        ],
      },
      {
        day: 'Day 4',
        title: 'Excursion to Sonmarg',
        activities: [
          'Drive to Sonmarg for a day trip',
          'Enjoy local sightseeing and glacier trek',
          'Return to Srinagar in the evening',
        ],
      },
      {
        day: 'Day 5',
        title: 'Departure',
        activities: [
          'Breakfast at the houseboat',
          'Airport drop-off',
        ],
      },
    ],
  },
  {
    title: 'Kashmir Luxury Escape Tour',
    description:
      'Indulge in the serene beauty of Kashmir with luxury stays, private shikara rides, and exclusive experiences.',
    price: '₹49,999',
    duration: '5 Days / 4 Nights',
    location: 'Srinagar, Gulmarg, Pahalgam',
    groupSize: '2-6',
    image: sonmarg,
    highlights: ['Luxury Stays', 'Private Shikara Ride', 'Exclusive Dining', 'Scenic Excursions'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Srinagar',
        activities: [
          'Airport pickup in private vehicle',
          'Check-in to a luxury houseboat',
          'Private Shikara ride on Dal Lake',
          'Gourmet dinner by the lake',
        ],
      },
      {
        day: 'Day 2',
        title: 'Exploring Srinagar',
        activities: [
          'Visit Mughal Gardens: Nishat, Shalimar, and Chashme Shahi',
          'Exclusive lunch at a heritage restaurant',
          'Evening leisure walk along Dal Lake',
        ],
      },
      {
        day: 'Day 3',
        title: 'Excursion to Gulmarg',
        activities: [
          'Luxury SUV transfer to Gulmarg',
          'Gondola ride to Kongdoori and Apharwat',
          'Relax with mountain views at a 5-star resort',
          'Evening bonfire and fine dining',
        ],
      },
      {
        day: 'Day 4',
        title: 'Discover Pahalgam',
        activities: [
          'Drive to Pahalgam with scenic stops',
          'Visit Betaab Valley and Aru Valley',
          'Picnic lunch by the Lidder River',
          'Return to Srinagar for an overnight stay',
        ],
      },
      {
        day: 'Day 5',
        title: 'Departure',
        activities: [
          'Morning spa session at the hotel',
          'Transfer to the airport for departure',
        ],
      },
    ],
  },
  {
    title: 'Kashmir Offbeat Adventure Tour',
    description:
      'Explore the hidden gems of Kashmir with remote trekking, camping, and an authentic village experience.',
    price: '₹34,999',
    duration: '7 Days / 6 Nights',
    location: 'Srinagar, Gurez Valley, Yusmarg',
    groupSize: '2-8',
    image: honeymoon,
    highlights: ['Remote Trekking', 'Camping', 'Village Experience', 'Scenic Trails'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Srinagar',
        activities: [
          'Airport pickup',
          'Check-in to a boutique hotel',
          'Evening orientation and trip briefing',
        ],
      },
      {
        day: 'Day 2',
        title: 'Journey to Gurez Valley',
        activities: [
          'Drive to Gurez Valley through Razdan Pass',
          'Visit the Habba Khatoon Peak',
          'Overnight stay in a traditional homestay',
        ],
      },
      {
        day: 'Day 3',
        title: 'Explore Gurez Villages',
        activities: [
          'Guided walk through Dawar and Tulail villages',
          'Learn about local traditions and crafts',
          'Evening campfire by the Kishanganga River',
        ],
      },
      {
        day: 'Day 4',
        title: 'Trek in Gurez',
        activities: [
          'Day trek to nearby meadows and glacier points',
          'Packed lunch during the trek',
          'Return to base camp for the night',
        ],
      },
      {
        day: 'Day 5',
        title: 'Transfer to Yusmarg',
        activities: [
          'Drive back to Yusmarg, known for its tranquil beauty',
          'Check-in to a cozy mountain lodge',
          'Evening nature walk in the pine forest',
        ],
      },
      {
        day: 'Day 6',
        title: 'Yusmarg Adventures',
        activities: [
          'Guided trek to Doodhpathri or Nilnag Lake',
          'Optional pony ride in the meadows',
          'Return to lodge for an overnight stay',
        ],
      },
      {
        day: 'Day 7',
        title: 'Departure',
        activities: [
          'Morning breakfast',
          'Transfer to Srinagar airport for departure',
        ],
      },
    ],
  },

  {
    title: 'Kashmir Honeymoon Tour Package',
    description:
      'Discover the winter wonderland of Gulmarg with skiing, gondola rides, and mountain views.',
    price: '₹29,999',
    duration: '4 Days / 3 Nights',
    location: 'Gulmarg',
    groupSize: '2-6',
    image: dalLake,
    highlights: ['Skiing', 'Gondola Ride', 'Mountain Views', 'Snow Activities'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Welcome to Gulmarg',
        activities: [
          'Transfer from Srinagar',
          'Hotel check-in',
          'Orientation walk',
          'Evening at leisure',
        ],
      },
      {
        day: 'Day 2',
        title: 'Adventure Activities',
        activities: [
          'Gondola ride to Kongdoori Mountain',
          'Skiing lessons or snow activities',
          'Evening bonfire and dinner',
        ],
      },
      {
        day: 'Day 3',
        title: 'Explore Gulmarg',
        activities: [
          'Visit St. Mary’s Church',
          'Explore snow-clad meadows',
          'Visit Strawberry Valley',
        ],
      },
      {
        day: 'Day 4',
        title: 'Departure',
        activities: [
          'Breakfast at the hotel',
          'Transfer to Srinagar for onward journey',
        ],
      },
    ],
  },
  {
    title: 'Kashmir Adventure Tour Packages',
    description:
      'Enjoy the winter wonderland of Gulmarg with skiing, gondola rides, and mountain views.',
    price: '₹29,999',
    duration: '4 Days / 3 Nights',
    location: 'Gulmarg',
    groupSize: '2-6',
    image: srinagar,
    highlights: ['Skiing', 'Gondola Ride', 'Mountain Views', 'Snow Activities'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Welcome to Gulmarg',
        activities: [
          'Transfer from Srinagar',
          'Hotel check-in',
          'Orientation walk',
          'Evening at leisure',
        ],
      },
      {
        day: 'Day 2',
        title: 'Winter Adventure',
        activities: [
          'Gondola ride to Mount Apharwat',
          'Snowboarding or trekking',
          'Evening bonfire',
        ],
      },
      {
        day: 'Day 3',
        title: 'Explore Gulmarg’s Beauty',
        activities: [
          'Horseback ride in Khilanmarg',
          'Visit Frozen Lake (if accessible)',
          'Enjoy local delicacies',
        ],
      },
      {
        day: 'Day 4',
        title: 'Departure',
        activities: [
          'Morning breakfast',
          'Transfer to Srinagar for departure',
        ],
      },
    ],
  },
  {
    title: 'Kashmir Family Tour Package',
    description:
      'Trek through scenic valleys, visit Betaab Valley, and enjoy river rafting in Pahalgam.',
    price: '₹27,999',
    duration: '6 Days / 5 Nights',
    location: 'Pahalgam',
    groupSize: '2-8',
    image: pahalgam,
    highlights: ['Betaab Valley', 'River Rafting', 'Trekking', 'Camping'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Pahalgam',
        activities: [
          'Morning transfer from Srinagar',
          'Hotel check-in',
          'Local sightseeing',
          'Evening by the Lidder River',
        ],
      },
      {
        day: 'Day 2',
        title: 'Betaab Valley and Aru Valley Tour',
        activities: [
          'Visit Betaab Valley',
          'Picnic at Aru Valley',
          'Trekking options in nearby trails',
        ],
      },
      {
        day: 'Day 3',
        title: 'Rafting Adventure',
        activities: [
          'River rafting in Lidder River',
          'Visit to Baisaran (Mini Switzerland)',
          'Return to the hotel for leisure',
        ],
      },
      {
        day: 'Day 4',
        title: 'Trekking and Camping',
        activities: [
          'Guided trek to Lidderwat Valley',
          'Overnight camping experience',
        ],
      },
      {
        day: 'Day 5',
        title: 'Pahalgam Local Exploration',
        activities: [
          'Explore local markets',
          'Relax by the riverside',
        ],
      },
      {
        day: 'Day 6',
        title: 'Departure',
        activities: [
          'Morning breakfast',
          'Return to Srinagar',
        ],
      },
    ],
  },
];


export default function Packages() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setIsBookingOpen(true);
  };

  const handleViewItinerary = (pkg) => {
    setSelectedPackage(pkg);
    setIsItineraryOpen(true);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-emerald-50 to-green-100" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Exclusive Kashmir Tour Packages
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
            Choose from our carefully curated packages for the perfect Kashmir experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              {/* WhatsApp Inquiry Button as Card Header */}
              <a href={`https://wa.me/919596000323?text=I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-t-2xl hover:bg-green-600 transition-colors" aria-label={`Contact us on WhatsApp for ${pkg.title}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5 mr-2" />
                Inquiry on WhatsApp
              </a>

              {/* Package Image */}
              <div className="relative h-56">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>

              {/* Package Details */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl md:text-1xl font-bold text-gray-900 mb-2 font-playfair">{pkg.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 font-roboto">{pkg.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-2 text-emerald-500" />
                    <span>{pkg.groupSize} people</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight) => (
                      <span key={highlight} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button onClick={() => handleViewItinerary(pkg)} className="px-3 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium">
                    View Itinerary
                  </button>
                  <button onClick={() => handleBookNow(pkg)} className="px-3 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pass the package title to the BookingForm */}
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} packageTitle={selectedPackage?.title} />

      {/* Pass the selected package for the itinerary */}
      <ItineraryModal isOpen={isItineraryOpen} onClose={() => setIsItineraryOpen(false)} packageDetails={selectedPackage} />
    </section>
  );
}
