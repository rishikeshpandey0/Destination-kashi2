import React from 'react';
import { ICON_MAP } from '../constants';
import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Services: React.FC = () => {
  const { siteImages, services } = useData();

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={siteImages.servicesHeaderBackground} alt="Services Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300">Comprehensive travel solutions for a divine experience</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || ShieldCheck;
            return (
              <Link 
                to={`/services/${service.id}`} 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon className="text-brand-gold w-8 h-8 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center text-brand-gold font-bold text-sm tracking-wide uppercase">
                        Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Need a Customized Plan?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                  We understand every journey is unique. Contact us to build a service package that fits your specific needs.
              </p>
              <Link to="/contact">
                  <Button size="lg">Contact Us Today</Button>
              </Link>
          </div>
      </div>
    </div>
  );
};

export default Services;