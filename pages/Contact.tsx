import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send, Plus, Minus, MessageCircle, CheckCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { contactInfo, faqs } = useData();
  
  // Form State
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const userEmail = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Construct the email body
    const emailBody = `Name: ${name}
Phone: ${phone}
Email: ${userEmail}

Message:
${message}`;

    const subject = `Inquiry from ${name} - Website Contact`;

    // Construct Gmail Compose URL
    // view=cm (Compose Mode), fs=1 (Fullscreen), to=(Your Email), su=(Subject), body=(Body)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');

    // Show success message briefly
    setStatus('success');
    
    // Reset status after a delay so they can send another if needed
    setTimeout(() => {
        setStatus('idle');
        form.reset();
    }, 3000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="text-gray-600">We are here to help you plan your perfect pilgrimage.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info & Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="text-2xl font-serif font-bold text-brand-dark mb-8">Send us a Message</h3>
             
             {status === 'success' ? (
                 <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                         <CheckCircle size={32} />
                     </div>
                     <h4 className="text-xl font-bold text-green-800 mb-2">Redirecting to Gmail...</h4>
                     <p className="text-green-700">Please complete the email in the new window that opened.</p>
                 </div>
             ) : (
                 <form className="space-y-6" onSubmit={handleSubmit}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                       <input 
                            type="text" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" 
                            placeholder="John Doe" 
                        />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                       <input 
                            type="tel" 
                            name="phone" 
                            required 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" 
                            placeholder="+91 98765 43210" 
                        />
                     </div>
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                       <input 
                            type="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" 
                            placeholder="john@example.com" 
                        />
                   </div>
                   <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                       <textarea 
                            name="message" 
                            required 
                            rows={4} 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" 
                            placeholder="I am interested in the Varanasi package..."
                        ></textarea>
                   </div>
                   
                   <Button className="w-full" size="lg" isLoading={status === 'submitting'}>
                     <Send size={18} className="mr-2" /> 
                     {status === 'submitting' ? 'Opening Gmail...' : 'Send via Gmail'}
                   </Button>
                   <p className="text-xs text-gray-400 text-center mt-2">
                       This will open your Gmail app to send the message directly.
                   </p>
                 </form>
             )}
          </div>

          {/* Contact Details */}
          <div>
            <div className="grid gap-8 mb-12">
               <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-4 rounded-full mr-6">
                    <MapPin className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Our Office</h4>
                    <p className="text-gray-600 whitespace-pre-line">{contactInfo.address}</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-4 rounded-full mr-6">
                    <Phone className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Phone</h4>
                    <div className="flex flex-col gap-1">
                      {contactInfo.phones.map((phone) => (
                        <p key={phone} className="text-gray-600">
                           <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors">{phone}</a>
                        </p>
                      ))}
                    </div>
                    <div className="mt-4">
                        <a 
                            href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </a>
                    </div>
                  </div>
               </div>
               <div className="flex items-start">
                  <div className="bg-brand-blue/10 p-4 rounded-full mr-6">
                    <Mail className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark mb-1">Email</h4>
                    <p className="text-gray-600">
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-gold transition-colors">{contactInfo.email}</a>
                    </p>
                  </div>
               </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-gray-500">
                <iframe 
                    src={contactInfo.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-serif font-bold text-center text-brand-dark mb-10">Frequently Asked Questions</h2>
           <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                   <button 
                     onClick={() => toggleFaq(index)}
                     className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                   >
                     <span className="font-medium text-brand-dark">{faq.question}</span>
                     {openFaq === index ? <Minus size={20} className="text-brand-gold" /> : <Plus size={20} className="text-gray-400" />}
                   </button>
                   <div className={`px-6 bg-slate-50 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                     <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                   </div>
                </div>
              ))}
              {faqs.length === 0 && <p className="text-center text-gray-500">No FAQs currently available.</p>}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;