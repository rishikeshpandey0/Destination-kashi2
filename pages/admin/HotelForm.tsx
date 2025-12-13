import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Hotel } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

const HotelForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { hotels, addHotel, updateHotel } = useData();
  const isEdit = !!id;

  const getEmptyForm = (): Hotel => ({
    id: Date.now().toString(),
    name: '',
    location: '',
    address: '',
    images: [],
    description: '',
  });

  const [form, setForm] = useState<Hotel>(getEmptyForm());

  useEffect(() => {
    // If editing, populate form from existing hotel
    if (isEdit && id) {
      const h = hotels.find(h => h.id === id);
      if (h) setForm(h);
    }
    // If not editing (Add New), reset to an empty form to avoid retaining previous values
    if (!isEdit) {
      setForm(getEmptyForm());
    }
  }, [id, isEdit, hotels]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value } as Hotel));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ensure arrays
    const payload: Hotel = {
      ...form,
      images: form.images || []
    };

    if (isEdit) updateHotel(payload);
    else addHotel(payload);

    navigate('/admin/manage-hotels');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/manage-hotels" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Hotels
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">{isEdit ? 'Edit Hotel' : 'Add New Hotel'}</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input name="location" value={form.location} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <input name="address" value={form.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Images (comma separated URLs)</label>
                    <input value={(form.images || []).join(', ')} onChange={(e) => setForm(prev => ({ ...prev, images: e.target.value.split(',').map(s => s.trim()).filter(Boolean) }))} className="w-full px-4 py-3 rounded-lg border" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border"></textarea>
                </div>

                <div className="pt-4 flex gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                        <Save size={18} className="mr-2" /> {isEdit ? 'Update Hotel' : 'Create Hotel'}
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default HotelForm;
