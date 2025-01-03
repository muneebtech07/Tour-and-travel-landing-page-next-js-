import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Zila',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    text: ' Himalayan Mountain Sports is a must for anyone looking to explore the Himalayas in a truly immersive, safe, and exciting way. Highly recommended for adventure enthusiasts and nature lovers alike!',
    location: 'India',
  },
  {
    name: 'Sarthak Dash',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    rating: 5,
    text: 'Aashu is fabulous ! You can see wonders of Gulmarg by them . Had a great experience ! Tip on ice is they are best for insta worthy pics .',
    location: 'India',
  },
  {
    name: 'Emma Wilson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
    text: 'Kashmir Travels made our honeymoon truly special. The houseboat stay was the highlight of our trip.',
    location: 'Australia',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-4
     bg-gradient-to-r from-emerald-50 to-green-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
            What Our Guests Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
            Check out genuine reviews from travelers who explored Kashmir with
            us, directly on <a href="https://g.co/kgs/opRHsFd">Google</a>
          </p>
        </div>
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1"
            >
              {/* Guest Info */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-900 font-playfair">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-roboto">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-gray-600 italic font-roboto">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
