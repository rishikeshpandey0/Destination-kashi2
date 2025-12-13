import React from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2, Plus } from 'lucide-react';

const ManageHotels: React.FC = () => {
  const { hotels, deleteHotel } = useData();

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this hotel?')) deleteHotel(id);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
            <div>
                <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-2">
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-serif font-bold text-brand-dark">Manage Hotels</h1>
            </div>
            <Link to="/admin/hotel/new" className="inline-block">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2">
                <Plus size={16} /> Add Hotel
              </button>
            </Link>
        </div>

        <div className="grid gap-6">
            {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-28 h-20 bg-gray-100 rounded overflow-hidden">
                            <img src={hotel.images?.[0] || ''} alt={hotel.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-brand-dark">{hotel.name}</h3>
                          <p className="text-sm text-gray-500">{hotel.address || hotel.location}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to={`/admin/hotel/edit/${hotel.id}`}>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"><Edit size={18} /></button>
                        </Link>
                        <button onClick={() => handleDelete(hotel.id)} className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"><Trash2 size={18} /></button>
                    </div>
                </div>
            ))}
            {hotels.length === 0 && (
                <div className="p-8 text-center text-gray-500">No hotels available. Add one to get started.</div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ManageHotels;
