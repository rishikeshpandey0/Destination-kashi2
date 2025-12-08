export interface TourPackage {
  id: string;
  title: string;
  location: 'Varanasi' | 'Ayodhya' | 'Prayagraj' | 'Gaya';
  duration: string;
  price: string;
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