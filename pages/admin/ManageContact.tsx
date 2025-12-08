import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { ContactInfo } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageContact: React.FC = () => {
  const navigate = useNavigate();
  const { contactInfo, updateContactInfo } = useData();
  const [formData, setFormData] = useState<ContactInfo>(contactInfo);
  const [phonesText, setPhonesText] = useState(contactInfo.phones.join('\n'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process phones from textarea (split by new line)
    const processedPhones = phonesText
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);
      
    const finalData = {
        ...formData,
        phones: processedPhones,
        // Ensure primary phone matches first in list or what is set
        phone: formData.phone || processedPhones[0] || ''
    };

    updateContactInfo(finalData);
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
                Manage Contact Info
            </h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Primary Phone</label>
                        <input 
                            type="text" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                        <input 
                            type="text" 
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">All Contact Numbers (One per line)</label>
                    <textarea 
                        value={phonesText}
                        onChange={(e) => setPhonesText(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none font-mono"
                        placeholder="+91 12345 67890"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                        <input 
                            type="text" 
                            name="facebook"
                            value={formData.facebook || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                            placeholder="https://facebook.com/..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                        <input 
                            type="text" 
                            name="instagram"
                            value={formData.instagram || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                            placeholder="https://instagram.com/..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Physical Address</label>
                    <textarea 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps Embed URL</label>
                    <input 
                        type="text" 
                        name="mapUrl"
                        value={formData.mapUrl}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    />
                    <p className="text-xs text-gray-400 mt-1">Copy the 'src' attribute from Google Maps Embed code</p>
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                        <Save size={18} className="mr-2" /> Save Contact Info
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ManageContact;