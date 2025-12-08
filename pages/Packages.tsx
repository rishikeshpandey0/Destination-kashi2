import React, { useState } from 'react';
import PackageCard from '../components/PackageCard';
import { useData } from '../context/DataContext';

const Packages: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Varanasi' | 'Ayodhya' | 'Prayagraj' | 'Gaya'>('All');
  const { packages } = useData();

  // Updated filter logic: Check if the package location string INCLUDES the filter
  // This allows "Varanasi, Ayodhya" package to show up when filtering for "Varanasi"
  const filteredPackages = filter === 'All' 
    ? packages 
    : packages.filter(p => p.location.includes(filter));

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Our Tour Packages</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our meticulously crafted itineraries designed to offer you the most fulfilling spiritual experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
           <button 
              onClick={() => setFilter('All')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'All' ? 'bg-brand-gold text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
           >
              All Destinations
           </button>
           {['Varanasi', 'Ayodhya', 'Prayagraj', 'Gaya'].map((loc) => (
             <button 
                key={loc}
                onClick={() => setFilter(loc as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === loc ? 'bg-brand-gold text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
             >
                {loc}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredPackages.map((pkg) => (
             <PackageCard key={pkg.id} pkg={pkg} />
           ))}
        </div>

        {filteredPackages.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No packages found for this selection.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Packages;