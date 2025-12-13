import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';
import HotelCard from '../components/HotelCard';

const Hotels: React.FC = () => {
  const { hotels } = useData();
  const { search } = useLocation();
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const highlight = params.get('highlight');
    if (highlight === 'premium' && hotels.length > 0) {
      // highlight first hotel as a simple approach
      setHighlightIndex(0);
      // scroll into view after a tick
      setTimeout(() => {
        const el = document.getElementById(hotels[0].id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }, [search, hotels]);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-dark">Premium Hotels</h1>
          <p className="mt-3 text-gray-600">Handpicked premium hotels for comfortable and safe stays.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((h, idx) => (
            <HotelCard key={h.id} hotel={h} highlight={highlightIndex === idx} compact />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
