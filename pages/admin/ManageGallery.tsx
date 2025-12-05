import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { GalleryImage } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Trash2, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageGallery: React.FC = () => {
  const { gallery, addToGallery, removeFromGallery } = useData();
  
  const [newImage, setNewImage] = useState({
      src: '',
      alt: '',
      size: 'standard' // standard or tall
  });

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (!newImage.src) return;

      const spanClass = newImage.size === 'tall' ? 'col-span-1 row-span-2' : 'col-span-1 row-span-1';
      
      const imageToAdd: GalleryImage = {
          id: Date.now().toString(),
          src: newImage.src,
          alt: newImage.alt || 'Gallery Image',
          span: spanClass
      };

      addToGallery(imageToAdd);
      setNewImage({ src: '', alt: '', size: 'standard' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                Manage Gallery
            </h1>
        </div>

        {/* Add New Image Form */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Image</h2>
            <form onSubmit={handleAdd} className="grid md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input 
                        type="text" 
                        value={newImage.src}
                        onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        placeholder="https://..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Caption / Alt Text</label>
                    <input 
                        type="text" 
                        value={newImage.alt}
                        onChange={(e) => setNewImage({...newImage, alt: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        placeholder="e.g. Morning Aarti"
                    />
                </div>
                <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                     <select 
                        value={newImage.size}
                        onChange={(e) => setNewImage({...newImage, size: e.target.value})}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none"
                     >
                         <option value="standard">Standard Square</option>
                         <option value="tall">Tall (Portrait)</option>
                     </select>
                </div>
                <div className="md:col-span-4 mt-2">
                    <Button type="submit" className="w-full md:w-auto">
                        <Plus size={18} className="mr-2" /> Add to Gallery
                    </Button>
                </div>
            </form>
        </div>

        {/* Existing Gallery Grid */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Current Images ({gallery.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gallery.map((img) => (
                <div key={img.id} className="relative group bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                    <div className={`w-full ${img.span.includes('row-span-2') ? 'h-80' : 'h-40'}`}>
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3 bg-white">
                        <p className="text-xs text-gray-500 truncate">{img.alt}</p>
                    </div>
                    <button 
                        onClick={() => removeFromGallery(img.id)}
                        className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;