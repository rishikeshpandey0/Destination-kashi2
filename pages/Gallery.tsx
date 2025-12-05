import React from 'react';
import { useData } from '../context/DataContext';

const Gallery: React.FC = () => {
  const { gallery } = useData();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Gallery</h1>
          <p className="text-gray-600">Glimpses of the divine beauty awaiting you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {gallery.map((img) => (
            <div key={img.id} className={`relative group overflow-hidden rounded-lg shadow-md ${img.span} h-full`}>
               <img 
                 src={img.src} 
                 alt={img.alt} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=800&auto=format&fit=crop';
                 }} 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-serif text-lg font-bold tracking-wide border-b-2 border-brand-gold pb-1">{img.alt}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;