import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { SiteImages } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageImages: React.FC = () => {
  const navigate = useNavigate();
  const { siteImages, updateSiteImages } = useData();
  const [formData, setFormData] = useState<SiteImages>(siteImages);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteImages(formData);
    navigate('/admin/dashboard');
  };

  const labels: Record<keyof SiteImages, string> = {
    homeHeroPoster: "Home: Hero Video Poster",
    homeIntroVaranasi: "Home: Intro Image 1 (Varanasi)",
    homeIntroAyodhya: "Home: Intro Image 2 (Ayodhya)",
    homeCtaBackground: "Home: Bottom CTA Background",
    aboutHeaderBackground: "About Us: Header Background",
    aboutJourneyImage: "About Us: Journey Section Image",
    servicesHeaderBackground: "Services: Header Background"
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                Manage Site Images
            </h1>
            <p className="text-gray-500">Update the banners and background images across your website.</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
                {Object.keys(formData).map((key) => {
                    const fieldName = key as keyof SiteImages;
                    return (
                        <div key={key}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">{labels[fieldName]}</label>
                            <div className="flex gap-4 items-start">
                                <div className="flex-grow">
                                    <input 
                                        type="text" 
                                        name={fieldName}
                                        value={formData[fieldName]}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none text-sm" 
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="w-24 h-16 bg-gray-100 rounded-md overflow-hidden border border-gray-200 flex-shrink-0">
                                    <img 
                                        src={formData[fieldName]} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="pt-4 flex gap-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                        <Save size={18} className="mr-2" /> Save Changes
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ManageImages;