import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+91-9596000323</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-300" />
              <span className="truncate">info@himalayanmountainsports.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Gulmarg, Jammu & Kashmir</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://himalayanmountainsports.com/about/" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://himalayanmountainsports.com/tour/" className="hover:text-white transition-colors">Other Tour Packages</a></li>
              <li><a href="https://himalayanmountainsports.com/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://himalayanmountainsports.com/terms_conditions/" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Himalayan-Mountain-Sports-100063566336964/" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/himalayan_mountain_sports/" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p>Subscribe to get special offers and updates</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Himalayan Mountain Sports</p>
        </div>
      </div>
    </footer>
  );
}
