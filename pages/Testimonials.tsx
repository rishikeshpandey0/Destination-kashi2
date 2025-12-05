import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useData } from '../context/DataContext';

const Testimonials: React.FC = () => {
  const { testimonials } = useData();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Guest Experiences</h1>
           <p className="text-gray-600">See what our travelers have to say about their spiritual journey with us.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-100">
               <Quote className="absolute top-6 right-6 text-brand-gold/20 w-12 h-12" />
               <div className="flex items-center gap-1 text-brand-gold mb-6">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-300"} />
                 ))}
               </div>
               <p className="text-gray-600 mb-8 italic leading-relaxed">"{testimonial.comment}"</p>
               <div className="flex items-center">
                 <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                 <div>
                   <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                   <span className="text-sm text-gray-400">{testimonial.location}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
        
        {testimonials.length === 0 && (
            <div className="text-center text-gray-500 py-12">
                No testimonials found. Check back later!
            </div>
        )}

        {/* Call to Action for Reviews */}
        <div className="mt-20 bg-brand-dark rounded-2xl p-8 md:p-12 text-center text-white">
           <h3 className="text-2xl font-serif font-bold mb-4">Have you traveled with us?</h3>
           <p className="text-gray-400 mb-6">We would love to hear about your experience.</p>
           <a href="mailto:reviews@destinationkashi.com" className="inline-block px-8 py-3 bg-brand-gold text-white font-bold rounded-sm hover:bg-yellow-600 transition-colors">
             Submit a Review
           </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;