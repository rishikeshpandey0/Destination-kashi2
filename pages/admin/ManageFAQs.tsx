import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { FAQ } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Trash2, Plus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageFAQs: React.FC = () => {
  const { faqs, addFaq, deleteFaq } = useData();
  
  const [newFaq, setNewFaq] = useState<FAQ>({
      question: '',
      answer: ''
  });

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (!newFaq.question || !newFaq.answer) return;

      addFaq(newFaq);
      setNewFaq({ question: '', answer: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-serif font-bold text-brand-dark">
                Manage FAQs
            </h1>
        </div>

        {/* Add New Form */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Add New FAQ</h2>
            <form onSubmit={handleAdd} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                    <input 
                        type="text" 
                        value={newFaq.question}
                        onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        placeholder="e.g. What is the cancellation policy?"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                    <textarea 
                        value={newFaq.answer}
                        onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                        required
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold outline-none" 
                        placeholder="e.g. You can cancel up to 24 hours before..."
                    ></textarea>
                </div>

                <Button type="submit">
                    <Plus size={18} className="mr-2" /> Add FAQ
                </Button>
            </form>
        </div>

        {/* List */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Current FAQs ({faqs.length})</h2>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative group flex gap-4">
                    <div className="bg-teal-50 p-3 rounded-full h-fit text-teal-600">
                        <HelpCircle size={20} />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-brand-dark mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                    <button 
                        onClick={() => deleteFaq(index)}
                        className="absolute top-4 right-4 p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
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

export default ManageFAQs;