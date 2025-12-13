import React, { useState } from 'react';
import { Hotel } from '../types';

interface Props {
  hotel: Hotel;
  highlight?: boolean;
  compact?: boolean;
}

const HotelCard: React.FC<Props> = ({ hotel, highlight = false, compact = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id={hotel.id} className={`bg-white rounded-xl shadow-lg overflow-hidden transition-shadow ${highlight ? 'ring-4 ring-brand-gold/50' : ''}`}>
      <div className={`${compact ? 'h-56' : 'h-48'} w-full relative`}>
        <img src={hotel.images?.[0] || ''} alt={hotel.name} className="w-full h-full object-cover" />
      </div>

      <div className={`p-4 ${compact ? 'pb-6' : ''}`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-brand-dark">{hotel.name}</h3>
            <p className="text-sm text-gray-500">{hotel.address || hotel.location}</p>
          </div>
          {!compact && (
            <div className="text-right">
              {hotel.rating !== undefined && (
                <div className="text-sm font-semibold text-yellow-500">{hotel.rating}★</div>
              )}
              {hotel.price && <div className="text-sm text-gray-700">{hotel.price}</div>}
            </div>
          )}
        </div>

        {!compact && (
          <>
            <p className="text-sm text-gray-600 mt-3 line-clamp-3">{hotel.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {hotel.amenities?.slice(0, 3).map((a) => (
                  <span key={a} className="text-xs bg-slate-100 px-2 py-1 rounded-md text-gray-600">{a}</span>
                ))}
              </div>
              <button onClick={() => setOpen(!open)} className="text-sm font-bold text-brand-gold">
                {open ? 'Hide' : 'View details'}
              </button>
            </div>

            {open && (
              <div className="mt-4 border-t pt-4">
                <div className="grid grid-cols-2 gap-2">
                  {hotel.images?.map((src, i) => (
                    <img key={i} src={src} alt={`${hotel.name}-${i}`} className="w-full h-24 object-cover rounded" />
                  ))}
                </div>
                <div className="mt-3 text-sm text-gray-700">
                  <p>{hotel.description}</p>
                  {hotel.contact && <p className="mt-2">Contact: {hotel.contact}</p>}
                  {hotel.website && <p className="mt-1">Website: {hotel.website}</p>}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HotelCard;
