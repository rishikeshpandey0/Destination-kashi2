import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ICON_MAP } from '../constants';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { ArrowLeft, CheckCircle, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { services } = useData();
  const service = services.find((s) => s.id === id);
  const { hotels } = useData();

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Service Not Found</h2>
        <Link to="/services">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }

  const Icon = ICON_MAP[service.icon] || ShieldCheck;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="text-white w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                {service.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-t-4 border-brand-gold"
        >
            <div className="mb-10">
                <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-brand-gold transition-colors mb-6 text-sm font-bold uppercase tracking-wide">
                    <ArrowLeft size={16} className="mr-2" /> Back to Services
                </Link>
                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {service.longDescription}
                </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 mb-10">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {service.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                             <CheckCircle className="text-green-500 w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                             <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">Interested in this Service?</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto shadow-xl">Enquire Now</Button>
                  </Link>

                  {service.id === 'premium-hotels' && (
                    <Link to="/hotels?highlight=premium">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">View Premium Hotels</Button>
                    </Link>
                  )}
                  {service.id === 'transport-services' && (
                    <Link to="/transports">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">View Transport</Button>
                    </Link>
                  )}
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;