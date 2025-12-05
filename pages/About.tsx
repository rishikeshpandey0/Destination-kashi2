import React from 'react';
import { CheckCircle, Briefcase, Bus, Shield, Users, Clock, Award } from 'lucide-react';
import { useData } from '../context/DataContext';

const About: React.FC = () => {
  const { siteImages } = useData();

  return (
    <div className="pt-20 min-h-screen">
       {/* Header */}
       <div className="bg-brand-dark text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
              <img src={siteImages.aboutHeaderBackground} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
              <p className="text-xl text-gray-300">25+ Years of Excellence in Spiritual & Corporate Travel</p>
          </div>
       </div>

       {/* Story / Journey */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Our Legacy</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                      <strong>Destination Kashi Tours & Travels</strong> is one of the most trusted and experienced travel agencies in the Kashi region, proudly serving pilgrims and travelers for more than <strong>25 years</strong>. With decades of expertise, we specialize in creating spiritual journeys, religious tours, and customized travel experiences across <strong>Ayodhya, Kashi (Varanasi), Prayagraj, and Gaya</strong>.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                      Over the years, we have built a reputation for providing well-organized, safe, and comfortable tours designed for individuals, families, and large groups. Our team understands the spiritual importance of these destinations and ensures that every traveler experiences peace, devotion, and a seamless journey.
                  </p>
              </div>
              <div className="relative">
                  <div className="absolute -inset-4 bg-brand-gold/20 rounded-lg transform rotate-3"></div>
                  <img src={siteImages.aboutJourneyImage} alt="Spiritual Ceremony" className="relative rounded-lg shadow-xl w-full" />
                  <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-brand-gold">
                      <p className="text-brand-dark font-bold text-xl">25+ Years</p>
                      <p className="text-gray-500 text-sm">Of Trusted Service</p>
                  </div>
              </div>
           </div>
         </div>
       </section>

       {/* Corporate Travel Experts */}
       <section className="py-20 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 text-brand-gold rounded-full mb-6">
                          <Briefcase size={20} />
                          <span className="font-bold uppercase tracking-wide text-sm">Corporate Services</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Corporate Travel Experts</h2>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Along with pilgrimage tours, we also organize corporate sector tours. Our team is highly experienced in managing large corporate groups with precision, comfort, and punctuality.
                      </p>
                      <ul className="space-y-4">
                          {[
                              "Corporate meetings and events",
                              "Business group travel",
                              "Customized packages for professional teams",
                              "Complete transport arrangements for corporate delegates"
                          ].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                  <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center shrink-0">
                                      <CheckCircle size={14} className="text-brand-dark" />
                                  </div>
                                  <span className="text-gray-200">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="flex-1 w-full">
                      <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                           <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">Transport & Travel Solutions</h3>
                           <p className="text-gray-400 mb-6">
                               Destination Kashi Tours & Travels offers reliable and well-maintained transportation options. Every journey is handled with full safety, professional drivers, and on-time service.
                           </p>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                               <div className="bg-brand-dark/50 p-4 rounded-lg flex items-center gap-3 border border-gray-700">
                                   <Bus className="text-brand-gold" />
                                   <span>Luxury Buses</span>
                               </div>
                               <div className="bg-brand-dark/50 p-4 rounded-lg flex items-center gap-3 border border-gray-700">
                                   <CarIcon className="text-brand-gold" />
                                   <span>Sedans & SUVs</span>
                               </div>
                               <div className="bg-brand-dark/50 p-4 rounded-lg flex items-center gap-3 border border-gray-700">
                                   <Users className="text-brand-gold" />
                                   <span>Tempo Travellers</span>
                               </div>
                               <div className="bg-brand-dark/50 p-4 rounded-lg flex items-center gap-3 border border-gray-700">
                                   <CheckCircle className="text-brand-gold" />
                                   <span>AC & Non-AC</span>
                               </div>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
       </section>

       {/* Why Choose Us */}
       <section className="py-20 bg-slate-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-serif font-bold text-brand-dark">Why Choose Us?</h2>
                   <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <FeatureCard 
                        icon={<Award />} 
                        title="25+ Years Experience" 
                        desc="Trusted expertise in the travel industry for over two decades." 
                   />
                   <FeatureCard 
                        icon={<Users />} 
                        title="Specialized Tourism" 
                        desc="Experts in Pilgrimage, Religious, and Corporate tourism." 
                   />
                   <FeatureCard 
                        icon={<CheckCircle />} 
                        title="Customized Plans" 
                        desc="Tour itineraries tailored specifically to customer needs." 
                   />
                   <FeatureCard 
                        icon={<Briefcase />} 
                        title="Corporate Experts" 
                        desc="Proven track record in managing large business groups." 
                   />
                   <FeatureCard 
                        icon={<Bus />} 
                        title="Reliable Transport" 
                        desc="Comfortable, safe, and well-maintained vehicle fleet." 
                   />
                   <FeatureCard 
                        icon={<Clock />} 
                        title="Dedicated Support" 
                        desc="24/7 team ensuring smooth and hassle-free travel." 
                   />
               </div>
           </div>
       </section>

       {/* Mission */}
       <section className="py-20 bg-white">
           <div className="max-w-4xl mx-auto px-4 text-center">
               <div className="inline-block p-3 rounded-full bg-brand-gold/10 text-brand-gold mb-6">
                   <Shield size={32} />
               </div>
               <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Our Mission</h2>
               <p className="text-xl text-gray-600 leading-relaxed italic">
                   "Our mission is to provide travelers with a meaningful, comfortable, and memorable journey through the sacred cities of India. Whether you are a pilgrim seeking blessings or a corporate group planning your travel, we ensure excellence at every step."
               </p>
           </div>
       </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-brand-gold">
        <div className="inline-block p-4 bg-brand-dark/5 rounded-full mb-4 text-brand-dark">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

// Simple SVG icon for Car since lucide-react 'Car' might conflict if not careful with imports
const CarIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
    </svg>
);

export default About;