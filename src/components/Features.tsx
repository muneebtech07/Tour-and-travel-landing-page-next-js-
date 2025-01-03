import React from 'react';
import { Ship, Home, Mountain, Sun, Tree, Snowflake, Leaf, Coffee } from 'lucide-react';

// Feature data with icons and descriptions
const features = [
  {
    icon: Ship,
    title: 'Shikara Ride on Dal Lake',
    description:
      'Experience the serenity of Dal Lake on traditional wooden boats',
  },
  {
    icon: Home,
    title: 'Luxury Houseboats',
    description:
      'Stay in traditional Kashmiri houseboats with modern amenities',
  },
  {
    icon: Mountain,
    title: 'Mountain Adventures',
    description: 'Explore snow-capped peaks and scenic hiking trails',
  },
  {
    icon: Sun,
    title: 'Mughal Gardens',
    description:
      'Visit historic gardens with stunning architecture and landscapes',
  },
  {
    icon: Leaf,
    title: 'Pine Forest Walks',
    description: 'Immerse yourself in the tranquil beauty of dense pine forests',
  },
  {
    icon: Snowflake,
    title: 'Winter Wonderland',
    description:
      'Enjoy snow activities like skiing, sledding, and snowboarding in Gulmarg',
  },
  {
    icon: Leaf,
    title: 'Kashmiri Saffron Fields',
    description:
      'Visit the lush saffron fields and learn about this precious spice',
  },
  {
    icon: Coffee,
    title: 'Traditional Kashmiri Cuisine',
    description:
      'Savor the rich flavors of Wazwan and enjoy Kahwa in a cozy setting',
  },
];

export default function Features() {
  return (
    <section className="py-4 bg-gradient-to-r from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            Experience Kashmir
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
            Discover what makes Kashmir truly special
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {/* Icon with Stylish Background */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>

              {/* Feature Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 font-playfair">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-sm sm:text-base text-gray-600 font-roboto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
