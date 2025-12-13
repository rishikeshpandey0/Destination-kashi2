import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Transports: React.FC = () => {
  const { transports } = useData();

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-dark">Our Transport Options</h1>
          <p className="mt-3 text-gray-600">Choose from our reliable fleet for comfortable travel.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(transports || []).map(v => (
            <div key={v.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 w-full relative">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-brand-dark">{v.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact">
            <button className="px-6 py-3 bg-brand-gold text-white rounded-lg font-bold">Enquire About Transport</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Transports;
