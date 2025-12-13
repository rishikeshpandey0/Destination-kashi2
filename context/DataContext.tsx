import React, { createContext, useContext, useState, useEffect } from 'react';
import { TourPackage, SiteImages, GalleryImage, ContactInfo, Testimonial, FAQ, Service, Hotel } from '../types';
import { 
  PACKAGES as INITIAL_PACKAGES, 
  INITIAL_SITE_IMAGES, 
  INITIAL_GALLERY_IMAGES,
  CONTACT_INFO as INITIAL_CONTACT_INFO,
  TESTIMONIALS as INITIAL_TESTIMONIALS,
  FAQ_DATA as INITIAL_FAQS,
  SERVICES_DATA as INITIAL_SERVICES,
  INITIAL_HOTELS
  , INITIAL_TRANSPORTS
} from '../constants';

interface DataContextType {
  packages: TourPackage[];
  siteImages: SiteImages;
  gallery: GalleryImage[];
  contactInfo: ContactInfo;
  testimonials: Testimonial[];
  faqs: FAQ[];
  services: Service[];
  hotels: Hotel[];
  transports: import('../types').Transport[];
  
  addPackage: (pkg: TourPackage) => void;
  updatePackage: (pkg: TourPackage) => void;
  deletePackage: (id: string) => void;
  updateSiteImages: (images: SiteImages) => void;
  addToGallery: (image: GalleryImage) => void;
  removeFromGallery: (id: string) => void;
  
  updateContactInfo: (info: ContactInfo) => void;
  addTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  addFaq: (f: FAQ) => void;
  deleteFaq: (index: number) => void;
  updateService: (s: Service) => void;
  addHotel: (h: Hotel) => void;
  updateHotel: (h: Hotel) => void;
  deleteHotel: (id: string) => void;
  addTransport: (t: import('../types').Transport) => void;
  updateTransport: (t: import('../types').Transport) => void;
  deleteTransport: (id: string) => void;

  resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [packages, setPackages] = useState<TourPackage[]>(INITIAL_PACKAGES);
  const [siteImages, setSiteImages] = useState<SiteImages>(INITIAL_SITE_IMAGES);
  const [gallery, setGallery] = useState<GalleryImage[]>(INITIAL_GALLERY_IMAGES);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(INITIAL_CONTACT_INFO);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [faqs, setFaqs] = useState<FAQ[]>(INITIAL_FAQS);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [hotels, setHotels] = useState<Hotel[]>(INITIAL_HOTELS as Hotel[]);
  const [transports, setTransports] = useState<import('../types').Transport[]>(INITIAL_TRANSPORTS as import('../types').Transport[]);
  
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const loadData = (key: string, setter: React.Dispatch<React.SetStateAction<any>>) => {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          setter(JSON.parse(stored));
        } catch (e) {
          console.error(`Failed to parse stored ${key}`, e);
        }
      }
    };

    loadData('site_packages', setPackages);
    loadData('site_images', setSiteImages);
    loadData('site_gallery', setGallery);
    loadData('site_contact', setContactInfo);
    loadData('site_testimonials', setTestimonials);
    loadData('site_faqs', setFaqs);
    loadData('site_services', setServices);
    loadData('site_hotels', setHotels);
    loadData('site_transports', setTransports);
    
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('site_packages', JSON.stringify(packages));
      localStorage.setItem('site_images', JSON.stringify(siteImages));
      localStorage.setItem('site_gallery', JSON.stringify(gallery));
      localStorage.setItem('site_contact', JSON.stringify(contactInfo));
      localStorage.setItem('site_testimonials', JSON.stringify(testimonials));
      localStorage.setItem('site_faqs', JSON.stringify(faqs));
      localStorage.setItem('site_services', JSON.stringify(services));
      localStorage.setItem('site_hotels', JSON.stringify(hotels));
      localStorage.setItem('site_transports', JSON.stringify(transports));
    }
  }, [packages, siteImages, gallery, contactInfo, testimonials, faqs, services, hotels, isLoaded]);
  

  // Packages Logic
  const addPackage = (pkg: TourPackage) => setPackages(prev => [...prev, pkg]);
  const updatePackage = (updatedPkg: TourPackage) => setPackages(prev => prev.map(p => p.id === updatedPkg.id ? updatedPkg : p));
  const deletePackage = (id: string) => setPackages(prev => prev.filter(p => p.id !== id));

  // Images Logic
  const updateSiteImages = (images: SiteImages) => setSiteImages(images);
  const addToGallery = (image: GalleryImage) => setGallery(prev => [...prev, image]);
  const removeFromGallery = (id: string) => setGallery(prev => prev.filter(img => img.id !== id));

  // Contact Info Logic
  const updateContactInfo = (info: ContactInfo) => setContactInfo(info);

  // Testimonials Logic
  const addTestimonial = (t: Testimonial) => setTestimonials(prev => [...prev, t]);
  const deleteTestimonial = (id: string) => setTestimonials(prev => prev.filter(t => t.id !== id));

  // FAQ Logic
  const addFaq = (f: FAQ) => setFaqs(prev => [...prev, f]);
  const deleteFaq = (index: number) => setFaqs(prev => prev.filter((_, i) => i !== index));

  // Services Logic
  const updateService = (updatedService: Service) => {
    setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
  };

  // Hotels Logic
  const addHotel = (h: Hotel) => setHotels(prev => [...prev, h]);
  const updateHotel = (updated: Hotel) => setHotels(prev => prev.map(h => h.id === updated.id ? updated : h));
  const deleteHotel = (id: string) => setHotels(prev => prev.filter(h => h.id !== id));

  // Transports Logic
  const addTransport = (t: import('../types').Transport) => setTransports(prev => [...prev, t]);
  const updateTransport = (updated: import('../types').Transport) => setTransports(prev => prev.map(t => t.id === updated.id ? updated : t));
  const deleteTransport = (id: string) => setTransports(prev => prev.filter(t => t.id !== id));

  const resetData = () => {
    setPackages(INITIAL_PACKAGES);
    setSiteImages(INITIAL_SITE_IMAGES);
    setGallery(INITIAL_GALLERY_IMAGES);
    setContactInfo(INITIAL_CONTACT_INFO);
    setTestimonials(INITIAL_TESTIMONIALS);
    setFaqs(INITIAL_FAQS);
    setServices(INITIAL_SERVICES);
    setHotels(INITIAL_HOTELS as Hotel[]);
    setTransports(INITIAL_TRANSPORTS as import('../types').Transport[]);
    
    localStorage.removeItem('site_packages');
    localStorage.removeItem('site_images');
    localStorage.removeItem('site_gallery');
    localStorage.removeItem('site_contact');
    localStorage.removeItem('site_testimonials');
    localStorage.removeItem('site_faqs');
    localStorage.removeItem('site_services');
    localStorage.removeItem('site_hotels');
    localStorage.removeItem('site_transports');
  };

  return (
    <DataContext.Provider value={{ 
      packages, siteImages, gallery, contactInfo, testimonials, faqs, services,
      hotels,
      addPackage, updatePackage, deletePackage,
      updateSiteImages, addToGallery, removeFromGallery,
      updateContactInfo,
      addTestimonial, deleteTestimonial,
      addFaq, deleteFaq,
      updateService,
      addHotel, updateHotel, deleteHotel,
        transports,
        addTransport, updateTransport, deleteTransport,
      resetData 
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};