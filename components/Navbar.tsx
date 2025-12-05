import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Settings, Mail, MapPin, Facebook, Instagram, Twitter, CalendarCheck } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { contactInfo } = useData();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  // Navbar Logic: 
  // 1. Transparent only on Home page, when not scrolled, and when Mobile Menu is CLOSED.
  // 2. If Mobile Menu is OPEN, force solid white background so text is visible.
  const isTransparent = isHome && !scrolled && !isOpen;
  
  const navClasses = isTransparent
    ? 'bg-transparent border-b border-white/10'
    : 'bg-white shadow-md py-2';

  const textColorClass = isTransparent ? 'text-white' : 'text-brand-dark';

  // Position Logic:
  // If not scrolled, the Top Bar (height 10) is visible on Desktop.
  // We must push the Navbar down by Top Bar's height (top-10).
  // This applies to ALL pages if they are at the top (not scrolled).
  const topClass = !scrolled ? 'md:top-10 top-0' : 'top-0';

  return (
    <>
      {/* Top Bar - Professional header info (Desktop Only) */}
      <div className={`hidden md:block bg-brand-dark text-white text-xs transition-all duration-300 ease-in-out z-[51] relative ${scrolled ? 'h-0 overflow-hidden py-0' : 'h-10 py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
            <div className="flex items-center space-x-6 font-medium tracking-wide">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <Mail size={12} className="text-brand-gold group-hover:text-white transition-colors" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-gold transition-colors">{contactInfo.email}</a>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer">
                    <MapPin size={12} className="text-brand-gold group-hover:text-white transition-colors" />
                    <span className="truncate max-w-xs">{contactInfo.address.split(',')[0]}...</span>
                </div>
            </div>
            <div className="flex items-center space-x-5">
                 <div className="flex space-x-4 pr-5 border-r border-gray-700">
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={12} /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={12} /></a>
                    <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={12} /></a>
                 </div>
                 {isAuthenticated && (
                   <Link to="/admin/dashboard" className="flex items-center gap-1 text-brand-gold hover:text-white transition-colors font-bold uppercase text-[10px] tracking-wider">
                     <Settings size={12} /> Admin
                   </Link>
                 )}
            </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${topClass} ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group">
               <div className="flex flex-col">
                 <span className={`text-2xl font-serif font-bold tracking-wider leading-none transition-colors duration-300 ${textColorClass}`}>
                   DESTINATION <span className="text-brand-gold">KASHI</span>
                 </span>
                 <span className={`text-[0.6rem] uppercase tracking-[0.3em] mt-1 font-medium transition-colors duration-300 group-hover:text-brand-gold ${isTransparent ? 'text-gray-300' : 'text-gray-500'}`}>
                   Tours & Travels
                 </span>
               </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 hover:text-brand-gold relative group py-2 ${
                    location.pathname === link.path ? 'text-brand-gold' : textColorClass
                  }`}
                >
                  {link.name}
                  {/* Hover Underline Animation */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}

              <Link 
                to="/contact" 
                className={`flex items-center gap-2 px-6 py-3 rounded-sm transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                    isTransparent 
                        ? 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white' 
                        : 'bg-brand-gold text-white hover:bg-brand-dark'
                }`}
              >
                <CalendarCheck size={14} />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
                 {/* Mobile Phone Icon shown when menu is closed */}
                 {!isOpen && (
                    <Link to="/contact" className={`p-2 rounded-full transition-colors ${isTransparent ? 'bg-white/10 text-white' : 'bg-brand-gold/10 text-brand-gold'}`}>
                        <Phone size={20} />
                    </Link>
                 )}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-md ${textColorClass} hover:text-brand-gold focus:outline-none transition-colors`}
                >
                  {isOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} />}
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 origin-top overflow-hidden border-t border-gray-100 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col h-full">
            <div className="px-5 py-6 space-y-2">
                {NAV_LINKS.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors ${
                        location.pathname === link.path 
                        ? 'bg-brand-gold/10 text-brand-gold' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-brand-gold'
                    }`}
                >
                    {link.name}
                </Link>
                ))}
                
                {isAuthenticated && (
                <Link
                    to="/admin/dashboard"
                    className="block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg text-brand-dark hover:bg-gray-50 flex items-center gap-2"
                >
                    <Settings size={16} /> Admin Dashboard
                </Link>
                )}
            </div>

            <div className="bg-gray-50 p-6 border-t border-gray-100 mt-2">
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Contact Information</p>
               <div className="space-y-4">
                    <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-gray-700 hover:text-brand-gold transition-colors">
                            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-gold"><Phone size={14} /></div>
                            <span className="font-medium">{contactInfo.phone}</span>
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-700 hover:text-brand-gold transition-colors">
                            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-gold"><Mail size={14} /></div>
                            <span className="font-medium text-sm">{contactInfo.email}</span>
                    </a>
               </div>
               
               <div className="pt-6">
                    <Link 
                        to="/contact" 
                        className="block w-full text-center bg-brand-gold text-white px-4 py-3.5 rounded-sm font-bold shadow-md active:scale-95 transition-transform uppercase tracking-wider text-sm"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;