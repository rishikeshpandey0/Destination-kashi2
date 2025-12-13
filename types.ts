export interface TourPackage {
  id: string;
  title: string;
  location: string; // Changed to string to support "Varanasi, Ayodhya" etc.
  duration: string;
  price: string;
  priceUnit: string; // New field for '/ person', '/ couple', etc.
  image: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: string; // e.g. 'col-span-1 row-span-1'
}

export interface SiteImages {
  homeHeroPoster: string;
  homeIntroVaranasi: string;
  homeIntroAyodhya: string;
  homeCtaBackground: string;
  aboutHeaderBackground: string;
  aboutJourneyImage: string;
  servicesHeaderBackground: string;
}

export interface ContactInfo {
  phone: string;
  phones: string[];
  whatsapp: string;
  email: string;
  address: string;
  mapUrl: string;
  facebook: string;
  instagram: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  icon: string; // Stored as string name of the icon
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  address?: string;
  images: string[];
  description?: string;
}

export interface Transport {
  id: string;
  name: string;
  image: string;
}