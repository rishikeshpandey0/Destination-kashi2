import React from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit } from 'lucide-react';
import { ICON_MAP } from '../../constants';

const ManageServices: React.FC = () => {
  const { services } = useData();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                Manage Services
            </h1>
        </div>

        <div className="grid gap-6">
            {services.map((service) => {
                const Icon = ICON_MAP[service.icon] || ICON_MAP['Landmark'];
                return (
                    <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-24 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <Icon size={18} className="text-brand-gold" />
                                <h3 className="font-bold text-lg text-brand-dark">{service.title}</h3>
                            </div>
                            <p className="text-gray-500 text-sm line-clamp-1">{service.description}</p>
                        </div>
                        <Link to={`/admin/service/edit/${service.id}`}>
                            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2">
                                <Edit size={16} /> Edit
                            </button>
                        </Link>
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;