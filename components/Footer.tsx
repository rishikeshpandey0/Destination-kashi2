import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useData } from '../context/DataContext';

const Footer: React.FC = () => {
  const { contactInfo } = useData();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
             <div className="mb-6">
                <span className="text-2xl font-serif font-bold tracking-wider text-white">
                  DESTINATION <span className="text-brand-gold">KASHI</span>
                </span>
             </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your gateway to spiritual awakening. We specialize in crafting comfortable, meaningful, and unforgettable journeys to India's most sacred destinations.
            </p>
            <div className="flex space-x-4">
              <a href={contactInfo.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href={contactInfo.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6">Top Destinations</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Varanasi - The City of Light</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ayodhya - Land of Rama</li>
              <li className="hover:text-white transition-colors cursor-pointer">Prayagraj - Sangam City</li>
              <li className="hover:text-white transition-colors cursor-pointer">Gaya - Land of Enlightenment</li>
              <li className="hover:text-white transition-colors cursor-pointer">Chitrakoot Dham</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-brand-gold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={18} />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="text-brand-gold shrink-0 mt-1" size={18} />
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white mb-1">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">{contactInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Destination Kashi Tours & Travels. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <Link to="/admin/login" className="hover:text-white">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;