import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import Button from '../../components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';

const TransportForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { transports, addTransport, updateTransport } = useData();
  const isEdit = !!id;

  const getEmpty = () => ({ id: Date.now().toString(), name: '', image: '' });
  const [form, setForm] = useState(getEmpty());

  useEffect(() => {
    if (isEdit && id) {
      const t = transports.find(x => x.id === id);
      if (t) setForm(t);
    }
    if (!isEdit) setForm(getEmpty());
  }, [id, isEdit, transports]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit) updateTransport(form);
    else addTransport(form);
    navigate('/admin/manage-transports');
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/manage-transports" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Transports
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">{isEdit ? 'Edit Transport' : 'Add New Transport'}</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input name="name" value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} required className="w-full px-4 py-3 rounded-lg border" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input name="image" value={form.image} onChange={(e) => setForm(prev => ({ ...prev, image: e.target.value }))} className="w-full px-4 py-3 rounded-lg border" />
                </div>

                <div className="pt-4 flex gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                        <Save size={18} className="mr-2" /> {isEdit ? 'Update Transport' : 'Create Transport'}
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default TransportForm;
