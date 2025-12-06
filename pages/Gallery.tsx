import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const { gallery } = useData();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Gallery</h1>
          <p className="text-gray-600">Glimpses of the divine beauty awaiting you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {gallery.map((img) => (
            <div 
                key={img.id} 
                className={`relative group overflow-hidden rounded-lg shadow-md ${img.span} h-full cursor-pointer`}
                onClick={() => setSelectedImage(img)}
            >
               <img 
                 src={img.src} 
                 alt={img.alt} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=800&auto=format&fit=crop';
                 }} 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                 <ZoomIn className="text-brand-gold w-8 h-8" />
                 <span className="text-white font-serif text-lg font-bold tracking-wide border-b-2 border-brand-gold pb-1">{img.alt}</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
                >
                    <X size={32} />
                </button>

                {/* Image Container */}
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-full max-h-full"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                >
                    <img 
                        src={selectedImage.src} 
                        alt={selectedImage.alt} 
                        className="max-h-[85vh] max-w-[95vw] object-contain rounded-md shadow-2xl"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=800&auto=format&fit=crop';
                        }} 
                    />
                    <div className="mt-4 text-center">
                        <h3 className="text-xl font-serif font-bold text-white tracking-wide">{selectedImage.alt}</h3>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;