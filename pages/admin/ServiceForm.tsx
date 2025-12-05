import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Service } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { services, updateService } = useData();
  
  const [formData, setFormData] = useState<Service | null>(null);
  const [featuresText, setFeaturesText] = useState('');

  useEffect(() => {
    if (id) {
      const existingService = services.find(s => s.id === id);
      if (existingService) {
        setFormData(existingService);
        setFeaturesText(existingService.features.join('\n'));
      }
    }
  }, [id, services]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formData) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    
    // Process features from textarea
    const processedFeatures = featuresText
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0);

    const finalData = {
      ...formData,
      features: processedFeatures
    };

    updateService(finalData);
    navigate('/admin/manage-services');
  };

  if (!formData) return <div className="pt-24 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/manage-services" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Services List
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                Edit Service: {formData.title}
            </h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                    <input 
                        type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    />
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
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Description (Card)</label>
                    <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={2}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detailed Description (Page)</label>
                    <textarea 
                        name="longDescription"
                        value={formData.longDescription}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Features (One per line)</label>
                    <textarea 
                        value={featuresText}
                        onChange={(e) => setFeaturesText(e.target.value)}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none font-mono" 
                    ></textarea>
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg">
                        <Save size={18} className="mr-2" /> Save Changes
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;