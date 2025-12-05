import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Testimonial } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Trash2, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageTestimonials: React.FC = () => {
  const { testimonials, addTestimonial, deleteTestimonial } = useData();
  
  const [newReview, setNewReview] = useState<Partial<Testimonial>>({
      name: '',
      location: '',
      comment: '',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
  });

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (!newReview.name || !newReview.comment) return;

      const testimonialToAdd: Testimonial = {
          id: Date.now().toString(),
          name: newReview.name!,
          location: newReview.location || '',
          comment: newReview.comment!,
          rating: newReview.rating || 5,
          avatar: newReview.avatar || ''
      };

      addTestimonial(testimonialToAdd);
      setNewReview({
          name: '',
          location: '',
          comment: '',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                Manage Testimonials
            </h1>
        </div>

        {/* Add New Form */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Review</h2>
            <form onSubmit={handleAdd} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                        <input 
                            type="text" 
                            value={newReview.name}
                            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                            required
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input 
                            type="text" 
                            value={newReview.location}
                            onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        />
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                        <select 
                            value={newReview.rating}
                            onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none"
                        >
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Avatar URL (Optional)</label>
                        <input 
                            type="text" 
                            value={newReview.avatar}
                            onChange={(e) => setNewReview({...newReview, avatar: e.target.value})}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                    <textarea 
                        value={newReview.comment}
                        onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                        required
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                    ></textarea>
                </div>

                <Button type="submit">
                    <Plus size={18} className="mr-2" /> Add Review
                </Button>
            </form>
        </div>

        {/* List */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Current Reviews ({testimonials.length})</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative group">
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">"{t.comment}"</p>
                    <div className="flex items-center">
                        <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover mr-3" />
                        <div>
                            <p className="font-bold text-sm text-brand-dark">{t.name}</p>
                            <p className="text-xs text-gray-400">{t.location}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => deleteTestimonial(t.id)}
                        className="absolute top-2 right-2 p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
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

export default ManageTestimonials;