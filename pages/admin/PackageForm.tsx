import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { TourPackage } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { packages, addPackage, updatePackage } = useData();
  const isEdit = !!id;

  const [formData, setFormData] = useState<TourPackage>({
    id: Date.now().toString(),
    title: '',
    location: 'Varanasi',
    duration: '',
    price: '',
    priceUnit: '/ person',
    image: '',
    description: '',
    highlights: []
  });

  const [highlightsText, setHighlightsText] = useState('');
  
  const AVAILABLE_LOCATIONS = ['Varanasi', 'Ayodhya', 'Prayagraj', 'Gaya', 'Chitrakoot'];

  useEffect(() => {
    if (isEdit && id) {
      const existingPackage = packages.find(p => p.id === id);
      if (existingPackage) {
        setFormData(existingPackage);
        setHighlightsText(existingPackage.highlights.join('\n'));
      }
    }
  }, [id, isEdit, packages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleLocation = (loc: string) => {
    let currentLocs = formData.location ? formData.location.split(', ').filter(l => l.trim() !== '') : [];
    
    if (currentLocs.includes(loc)) {
        currentLocs = currentLocs.filter(l => l !== loc);
    } else {
        currentLocs.push(loc);
    }
    
    setFormData(prev => ({ ...prev, location: currentLocs.join(', ') }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process highlights from textarea (split by new line)
    const processedHighlights = highlightsText
      .split('\n')
      .map(h => h.trim())
      .filter(h => h.length > 0);

    const finalData = {
      ...formData,
      highlights: processedHighlights
    };

    if (isEdit) {
      updatePackage(finalData);
    } else {
      addPackage(finalData);
    }
    
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                {isEdit ? 'Edit Package' : 'Create New Package'}
            </h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Package Title</label>
                        <input 
                            type="text" 
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                            placeholder="e.g. Divine Varanasi Tour"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Locations (Select Multiple)</label>
                        <div className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white">
                            <div className="flex flex-wrap gap-3">
                                {AVAILABLE_LOCATIONS.map(loc => {
                                    const isSelected = formData.location.includes(loc);
                                    return (
                                        <button
                                            type="button"
                                            key={loc}
                                            onClick={() => toggleLocation(loc)}
                                            className={`px-3 py-1 rounded-full text-xs font-bold transition-colors border ${
                                                isSelected 
                                                ? 'bg-brand-gold text-white border-brand-gold' 
                                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                                            }`}
                                        >
                                            {loc} {isSelected && '✓'}
                                        </button>
                                    );
                                })}
                            </div>
                            <input 
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Or type manually..."
                                className="w-full mt-3 text-sm text-gray-600 outline-none border-t border-gray-100 pt-2"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Click to select, or type manually for combos.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                        <input 
                            type="text" 
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                            placeholder="e.g. 3 Days / 2 Nights"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                            <input 
                                type="text" 
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                                placeholder="e.g. ₹13,500"
                            />
                        </div>
                        <div className="w-1/3">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                            <input 
                                type="text" 
                                name="priceUnit"
                                value={formData.priceUnit}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                                placeholder="/ person"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> If using a local image, place it in the <code>public/images</code> folder and use path <code>images/filename.jpg</code>
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input 
                        type="text" 
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        placeholder="https://..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        placeholder="Short summary of the tour..."
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Highlights</label>
                    <textarea 
                        value={highlightsText}
                        onChange={(e) => setHighlightsText(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none font-mono text-sm" 
                        placeholder="Enter each highlight on a new line&#10;Kashi Vishwanath Temple&#10;Ganga Aarti&#10;Sarnath"
                    ></textarea>
                    <p className="text-xs text-gray-400 mt-1">Enter each highlight on a new line</p>
                </div>

                <div className="pt-4 flex gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                        <Save size={18} className="mr-2" /> {isEdit ? 'Update Package' : 'Create Package'}
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default PackageForm;