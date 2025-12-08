import React from 'react';
import { Clock, MapPin, CheckCircle } from 'lucide-react';
import { TourPackage } from '../types';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  pkg: TourPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative overflow-hidden h-64">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          onError={(e) => {
            // Fallback image if the source fails
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=800&auto=format&fit=crop';
          }}
        />
        <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-md">
          Best Seller
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center text-white text-sm">
                <MapPin size={16} className="mr-1 text-brand-gold" />
                {pkg.location}
            </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-brand-gold transition-colors">{pkg.title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock size={16} className="mr-2" />
          {pkg.duration}
        </div>

        <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
            {pkg.description}
        </p>
        
        <div className="mb-6 space-y-2">
            {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle size={14} className="mr-2 mt-1 text-brand-gold shrink-0" />
                    <span>{highlight}</span>
                </div>
            ))}
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 block uppercase tracking-wide">Starting From</span>
            <span className="text-2xl font-bold text-brand-blue">{pkg.price}</span>
            <span className="text-xs text-gray-400"> {pkg.priceUnit || '/ person'}</span>
          </div>
          <Link to="/contact">
            <Button variant="outline" size="sm">Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;