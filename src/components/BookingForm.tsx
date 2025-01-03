import React, { useState } from 'react';
import { X } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle?: string;
}

export default function BookingForm({
  isOpen,
  onClose,
  packageTitle,
}: BookingFormProps) {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    package: '',
    date: '',
    adults: '2',
    children: '0',
  });
  const [formErrors, setFormErrors] = useState<any>({});

  // Update package title when it changes
  React.useEffect(() => {
    if (packageTitle) {
      setFormData(prev => ({ ...prev, package: packageTitle }));
    }
  }, [packageTitle]);

  const validatePhone = (phone: string) => {
    return phone.length >= 10; // Basic validation for minimum length
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const validateForm = () => {
    let errors: any = {};
    if (!formData.name) errors.name = 'Full Name is required';
    if (!formData.email) errors.email = 'Email Address is required';
    if (!formData.phone || !validatePhone(formData.phone))
      errors.phone = 'Valid phone number is required';
    if (!formData.date) errors.date = 'Travel Date is required';
    if (!formData.adults) errors.adults = 'Number of adults is required';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          package: formData.package
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit booking');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          package: '',
          date: '',
          adults: '2',
          children: '0',
        });
      }, 2000);
    } catch (error) {
      console.error('Booking error:', error);
      setStatus('error');
      setErrorMessage(
        error.message ||
          'Failed to send booking request. Please try again later.'
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
        />

        <div className="relative w-full max-w-xl rounded-lg bg-white p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-display font-semibold text-[#1B3C6B]">
              Book Your Kashmir Adventure
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {packageTitle && (
            <div className="mb-4 rounded-md bg-blue-50 p-3">
              <p className="text-sm text-blue-800">
                Selected Package:{' '}
                <span className="font-semibold">{packageTitle}</span>
              </p>
            </div>
          )}

          {status === 'success' && (
            <div className="mb-4 rounded-md bg-green-50 p-3">
              <p className="text-sm text-green-800">
                Booking request sent successfully! We'll contact you soon.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-4 rounded-md bg-red-50 p-3">
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 ${
                    formErrors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#1B3C6B]`}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {formErrors.name && (
                  <p className="text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 ${
                    formErrors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#1B3C6B]`}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <PhoneInput
                  country={'in'}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    required: true,
                    className: `w-full rounded-md pl-12 ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`,
                  }}
                  containerClass="!w-full"
                  buttonClass="!rounded-l-md"
                  enableSearch={true}
                  preferredCountries={['in']}
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500">{formErrors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Travel Date *
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 ${
                    formErrors.date ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#1B3C6B]`}
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
                {formErrors.date && (
                  <p className="text-sm text-red-500">{formErrors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="adults"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adults *
                </label>
                <select
                  id="adults"
                  required
                  className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 ${
                    formErrors.adults ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#1B3C6B]`}
                  value={formData.adults}
                  onChange={(e) =>
                    setFormData({ ...formData, adults: e.target.value })
                  }
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                {formErrors.adults && (
                  <p className="text-sm text-red-500">{formErrors.adults}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="children"
                  className="block text-sm font-medium text-gray-700"
                >
                  Children (0-12 years)
                </label>
                <select
                  id="children"
                  className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#1B3C6B]"
                  value={formData.children}
                  onChange={(e) =>
                    setFormData({ ...formData, children: e.target.value })
                  }
                >
                  {[0, 1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Special Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1B3C6B] focus:outline-none focus:ring-1 focus:ring-[#1B3C6B]"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us about your travel plans, preferences, or any special requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-md bg-[#1B3C6B] px-4 py-3 text-white font-medium hover:bg-[#152f52] focus:outline-none focus:ring-2 focus:ring-[#1B3C6B] focus:ring-offset-2 disabled:bg-gray-400 transition-colors"
            >
              {status === 'loading' ? 'Sending...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}