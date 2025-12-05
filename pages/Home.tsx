import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Map, Clock, Gem, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import PackageCard from '../components/PackageCard';
import { ICON_MAP } from '../constants';
import { useData } from '../context/DataContext';

const Home: React.FC = () => {
  const { packages, siteImages, services } = useData();
  const featuredPackages = packages.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 pb-24">
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={siteImages.homeHeroPoster}
            className="w-full h-full object-cover"
          >
            {/* The user should place their video file named 'hero-video.mp4' in the public/root directory */}
            <source src="hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-brand-gold text-brand-gold text-sm font-semibold tracking-widest uppercase mb-6 rounded-sm bg-black/30 backdrop-blur-sm">
              Welcome to the Spiritual Capital
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Explore the Divine Journey with <br />
              <span className="text-brand-gold">Destination Kashi</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Premium tours designed for comfort, devotion, and unforgettable experiences in Varanasi, Ayodhya, Prayagraj, and Gaya.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">Book Now</Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black hover:border-white">
                  Explore Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Features Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-12">
        <div className="bg-white rounded-lg shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b-4 border-brand-gold">
           {/* Feature 1 */}
           <div className="flex flex-col items-center text-center group">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                 <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-dark">Safe & Verified</h3>
              <p className="text-gray-500 text-sm">Verified guides and secure transport for a worry-free pilgrimage.</p>
           </div>
           
           {/* Feature 2 */}
           <div className="flex flex-col items-center text-center group">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                 <Gem size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-dark">Premium Comfort</h3>
              <p className="text-gray-500 text-sm">Top-rated hotels and hygienic amenities tailored for you.</p>
           </div>

           {/* Feature 3 */}
           <div className="flex flex-col items-center text-center group">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                 <Map size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-dark">Custom Itineraries</h3>
              <p className="text-gray-500 text-sm">Flexible plans covering Varanasi, Ayodhya, Prayagraj & Gaya.</p>
           </div>

           {/* Feature 4 */}
           <div className="flex flex-col items-center text-center group">
              <div className="bg-slate-50 p-4 rounded-full mb-4 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                 <Clock size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-dark">24/7 Support</h3>
              <p className="text-gray-500 text-sm">Dedicated team available round the clock to assist you.</p>
           </div>
        </div>
      </div>

      {/* Modern Intro Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                 <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Philosophy</span>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
                    We Craft Journeys, <br/> Not Just Tours.
                 </h2>
                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    At Destination Kashi, we believe a pilgrimage is a sacred dialogue between the soul and the divine. We don't just take you to places; we help you experience the vibration, the history, and the silence of these holy lands.
                 </p>
                 
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-brand-gold hover:shadow-md transition-shadow">
                       <HeartHandshake className="text-brand-dark shrink-0" size={28} />
                       <div>
                          <h4 className="font-bold text-brand-dark text-lg">Personalized Care</h4>
                          <p className="text-sm text-gray-500">Every aspect of your trip is tailored to your family's needs.</p>
                       </div>
                    </div>
                     <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-brand-gold hover:shadow-md transition-shadow">
                       <Star className="text-brand-dark shrink-0" size={28} />
                       <div>
                          <h4 className="font-bold text-brand-dark text-lg">Spiritual Authenticity</h4>
                          <p className="text-sm text-gray-500">Authentic rituals, knowledgeable priests, and deep cultural immersion.</p>
                       </div>
                    </div>
                 </div>
                 
                 <Link to="/about">
                    <Button variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-8">
                       Read Our Story <ArrowRight size={18} className="ml-2" />
                    </Button>
                 </Link>
              </div>
              
              {/* Creative Image Layout */}
              <div className="relative mt-8 lg:mt-0">
                 {/* Decorative elements */}
                 <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
                 <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
                 
                 <div className="grid grid-cols-2 gap-6 relative">
                    <img 
                       src={siteImages.homeIntroVaranasi} 
                       alt="Varanasi Arati" 
                       className="rounded-2xl shadow-xl w-full h-80 object-cover mt-12 hover:scale-[1.02] transition-transform duration-500"
                    />
                    <img 
                       src={siteImages.homeIntroAyodhya} 
                       alt="Ayodhya Temple" 
                       className="rounded-2xl shadow-xl w-full h-80 object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                     {/* Floating Badge */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl text-center border-4 border-slate-50 w-32 h-32 flex flex-col items-center justify-center z-20">
                        <span className="block text-3xl font-bold text-brand-gold">25+</span>
                        <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide leading-tight mt-1">Years of<br/>Service</span>
                     </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">What We Offer</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-3">Our Premium Services</h2>
                <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const Icon = ICON_MAP[service.icon] || ShieldCheck;
                    return (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                             <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center mb-6 text-brand-dark">
                                <Icon size={28} />
                             </div>
                             <h3 className="text-xl font-bold font-serif mb-3 text-white">{service.title}</h3>
                             <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-12">
                <Link to="/services">
                    <Button variant="outline" className="text-white border-brand-gold hover:bg-brand-gold hover:text-white">
                        Learn More About Services
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Our Offerings</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mt-3">Popular Spiritual Packages</h2>
                <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
             
             <div className="text-center mt-12">
                <Link to="/packages">
                    <Button variant="outline" size="lg">View All Packages</Button>
                </Link>
             </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
             <img src={siteImages.homeCtaBackground} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready for your spiritual awakening?</h2>
             <p className="text-gray-200 text-lg mb-10">
                 Contact us today to customize your pilgrimage to the holiest cities of India.
             </p>
             <Link to="/contact">
                <Button size="lg" className="!bg-white !text-brand-dark hover:!bg-gray-200 hover:!text-black border-none shadow-xl">
                    Start Your Journey
                </Button>
             </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;