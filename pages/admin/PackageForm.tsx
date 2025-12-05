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
    image: '',
    description: '',
    highlights: []
  });

  const [highlightsText, setHighlightsText] = useState('');

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
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <select 
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none"
                        >
                            <option value="Varanasi">Varanasi</option>
                            <option value="Ayodhya">Ayodhya</option>
                            <option value="Prayagraj">Prayagraj</option>
                            <option value="Gaya">Gaya</option>
                        </select>
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
                    <div>
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
                    <p className="text-xs text-gray-400 mt-1">Paste a link to an image (Unsplash, etc.)</p>
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
