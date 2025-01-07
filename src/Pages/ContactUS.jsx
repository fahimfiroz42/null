import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, MessageCircle } from 'lucide-react';
import Swal from 'sweetalert2';

const ContactUS = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        Swal.fire('Message sent successfully!');
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
    return (
        <div className="min-h-screen bg-gray-50">
        {/* Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 text-white" />
            <h1 className="text-4xl font-bold text-white mb-4">Get In Touch With Us</h1>
            <p className="text-lg text-white/90">We're here to help and answer any questions you might have</p>
          </div>
        </div>
  
        <div className="w-11/12 mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 py-4 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-xl font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 py-4 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your email"
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-xl font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 py-4 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your message here..."
                />
              </div>
  
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
  
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                    <p className="mt-1 text-gray-600">
                      123 Business Street<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact Info</h3>
                    <p className="mt-1 text-gray-600">
                      Phone: (555) 123-4567<br />
                      Email: contact@example.com
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUS;