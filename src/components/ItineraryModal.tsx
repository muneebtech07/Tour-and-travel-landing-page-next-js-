import React from 'react';
import { X, Clock, MapPin } from 'lucide-react';

export default function ItineraryModal({ isOpen, onClose, packageDetails }) {
  if (!isOpen || !packageDetails) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-3xl rounded-lg bg-white shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {packageDetails.title} - Detailed Itinerary
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary-500 mr-2" />
                <span>{packageDetails.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                <span>{packageDetails.location}</span>
              </div>
            </div>

            <div className="space-y-6">
              {packageDetails.itinerary.map((day) => (
                <div key={day.day} className="border-b pb-6">
                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-primary-600">{day.day}</span>
                    <span className="ml-4 text-lg font-medium text-gray-900">
                      {day.title}
                    </span>
                  </div>
                  <ul className="space-y-2 ml-6">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}