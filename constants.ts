import React from 'react';
import { NavLink, TourPackage, Testimonial, GalleryImage, SiteImages, Service } from './types';
import { MapPin, Sun, Moon, Coffee, Landmark, Users, BedDouble, Bus, UserCheck, Globe } from 'lucide-react';

export const CONTACT_INFO = {
  "phone": "+91 96518 18442",
  "phones": [
    "+91 96518 18442",
    "+91 96212 19750",
    "+91 74979 04541",
    "+91 74979 04542"
  ],
  "whatsapp": "+91 96518 18442",
  "email": "destinationstourvns@gmail.com",
  "address": "Vinayak Plaza, Fatman Road, Maldahiya, Chetganj, Varanasi, Uttar Pradesh, India - 221001",
  "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.567087826356!2d82.9897!3d25.3330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export const INITIAL_SITE_IMAGES: SiteImages = {
  "homeHeroPoster": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop",
  "homeIntroVaranasi": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=600&auto=format&fit=crop",
  "homeIntroAyodhya": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFw6WEAetVwGP4PyPg3wXjat-6-q7ChqXKw&s",
  "homeCtaBackground": "https://images.unsplash.com/photo-1590458671607-b3623b2075b6?q=80&w=1920&auto=format&fit=crop",
  "aboutHeaderBackground": "images\\about-us.png",
  "aboutJourneyImage": "images\\25+years.jpeg",
  "servicesHeaderBackground": "images\\our-services.jpg"
};

export const INITIAL_GALLERY_IMAGES: GalleryImage[] = [
  {
    "id": "1",
    "src": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=800&auto=format&fit=crop",
    "alt": "Ganga Aarti, Varanasi",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1764828478873",
    "src": "https://3.imimg.com/data3/PM/LD/MY-18573705/wp-content-uploads-2012-11-evening_ganga_aarti_at_dashashwamedh_ghat_varanasi.jpg",
    "alt": "varanasi evening ganga aarti",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1764828559982",
    "src": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/08/A-Detailed-Travel-Guide-Kashi-Vishwanath-Temple-In-Varanasi.jpg?fit=1200%2C800&ssl=1",
    "alt": "Kashi vishwanath temple",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1764828723030",
    "src": "https://pbs.twimg.com/media/E8wu0ZaVgAUQlSe.jpg",
    "alt": "Vishwanath Temple BHU",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1764828846039",
    "src": "https://s7ap1.scene7.com/is/image/incredibleindia/durga-temple-varanasi-6-attr-hero?qlt=82&ts=1727353607687",
    "alt": "Durga Temple Varanasi",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1764829670234",
    "src": "https://sannidhi.net/wp-content/uploads/2023/05/Kaal_bhairav_kashi0.png",
    "alt": "Shree Kaal Bhairav Mandir",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765008701813",
    "src": "images\\CHAR DHAM.png",
    "alt": "Char dham",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765008762429",
    "src": "images\\GOA.png",
    "alt": "Goa",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765008830764",
    "src": "images\\kedarrrr.png",
    "alt": "kedarnath",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765008897558",
    "src": "images\\LASKHADWEEP.png",
    "alt": "Lakshadeep",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765009123612",
    "src": "images\\SINGAPORE.png",
    "alt": "Singapur",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765009196940",
    "src": "images\\THE-BUDDIST-CIRCUIT.png",
    "alt": "THE BUDDIST CIRCUIT",
    "span": "col-span-1 row-span-2"
  }
];

export const ICON_MAP: Record<string, React.ElementType> = {
  Landmark,
  Globe,
  Users,
  BedDouble,
  Bus,
  UserCheck,
  MapPin,
  Sun,
  Moon,
  Coffee
};

export const SERVICES_DATA: Service[] = [
  {
    "id": "pilgrimage-tours",
    "title": "Pilgrimage Tours",
    "description": "Expertly crafted spiritual journeys covering the holy circuits of Varanasi, Ayodhya, Prayagraj, and Gaya.",
    "longDescription": "Embark on a soul-stirring journey through the heart of spiritual India. Our Pilgrimage Tours are designed to provide a hassle-free and deeply religious experience. We cover the most sacred destinations including the Kashi Vishwanath corridor in Varanasi, the Ram Janmabhoomi in Ayodhya, the Triveni Sangam in Prayagraj, and the Pind Daan sites in Gaya. We ensure that your focus remains solely on devotion while we handle the logistics.",
    "features": [
      "VIP Darshan Assistance at major temples",
      "Arrangement of experienced Pandas/Priests",
      "Ritual coordination (Pind Daan, Abhishek)",
      "Accompanied by spiritual guides"
    ],
    "image": "images\\piligrimage-tours.jpg",
    "icon": "Landmark"
  },
  {
    "id": "international-tours",
    "title": "International Tours",
    "description": "Explore the world with our premium international packages to Dubai, Singapore, Vietnam, Bali, and Thailand.",
    "longDescription": "Expand your horizons with our curated International Tour packages. Whether you crave the futuristic skyline of Dubai, the cultural richness of Vietnam, the tropical paradise of Bali, or the vibrant street life of Thailand and Singapore, we have it all. Our packages include visa assistance, flight bookings, and expertly planned local sightseeing to ensure you have a global experience with the comfort of home-like care.",
    "features": [
      "Complete Visa Assistance",
      "Flight & Hotel Combos",
      "Indian Meals availability",
      "English-speaking local guides"
    ],
    "image": "images\\international-tours.jpg",
    "icon": "Globe"
  },
  {
    "id": "customized-packages",
    "title": "Customized Packages",
    "description": "Tailor-made itineraries for solo travelers, families, and large groups fitting your schedule and budget.",
    "longDescription": "We understand that no two travelers are the same. Our Customized Packages allow you to build your dream itinerary from scratch. Whether you are a solo backpacker looking for adventure, a family seeking a relaxing spiritual retreat, or a large group requiring specialized logistics, we tailor every aspect of the trip—from dates and duration to hotel categories and pace of travel.",
    "features": [
      "Flexible Itineraries",
      "Budget to Luxury options",
      "Special care for elderly & children",
      "Group discounts available"
    ],
    "image": "images\\customized-tours.jpg",
    "icon": "Users"
  },
  {
    "id": "premium-hotels",
    "title": "Premium Hotels",
    "description": "Stay in top-rated properties providing comfortable, hygienic, and safe accommodation.",
    "longDescription": "Rest and rejuvenate in the best accommodations the region has to offer. We have established partnerships with a wide range of properties, from heritage havelis on the Ghats of Varanasi to modern luxury hotels in Ayodhya. We prioritize hygiene, safety, and proximity to major temples to ensure your stay is as comfortable as it is convenient.",
    "features": [
      "3-Star to 5-Star categories",
      "River-view rooms available",
      "Hygienic food & amenities",
      "Proximity to temples & ghats"
    ],
    "image": "images\\primium-hotels.jpg",
    "icon": "BedDouble"
  },
  {
    "id": "transport-services",
    "title": "Cars | Tempo Traveller | Buses",
    "description": "Travel in comfort with our fleet of well-maintained Sedans, SUVs, Tempo Travellers, and Luxury Buses.",
    "longDescription": "The journey is just as important as the destination. We manage our own fleet of vehicles to ensure punctuality and cleanliness. Whether you need a sedan for a couple, an Innova Crysta for a family, or a luxury Urbania/Bus for a large group, we provide well-maintained, air-conditioned vehicles with professional chauffeurs who know the local routes perfectly.",
    "features": [
      "Well-maintained AC Vehicles",
      "Experienced & Polite Drivers",
      "Airport/Station Transfers",
      "24/7 Transport availability"
    ],
    "image": "images\\car-tempo.jpg",
    "icon": "Bus"
  },
  {
    "id": "professional-guidance",
    "title": "Professional Guidance",
    "description": "Explore with knowledgeable government-approved guides and enjoy 24/7 customer support.",
    "longDescription": "Discover the hidden stories and legends of the holy cities with our expert guides. Unlike standard tours, our guides are deeply knowledgeable about the history, mythology, and cultural significance of every site. Additionally, our back-end support team is available round the clock to assist you with any queries or emergencies during your trip.",
    "features": [
      "Government Approved Guides",
      "Multi-lingual support",
      "Deep cultural & historical insights",
      "24/7 On-call assistance"
    ],
    "image": "images\\profestional-guiding.jpg",
    "icon": "UserCheck"
  }
];

export const PACKAGES: TourPackage[] = [
  {
    "id": "1",
    "title": "Divine Varanasi Experience",
    "location": "Varanasi",
    "duration": "3 Days / 2 Nights",
    "price": "₹13,500",
    "image": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=800&auto=format&fit=crop",
    "description": "Experience the spiritual capital of India with morning boat rides and evening Aarti.",
    "highlights": [
      "Ganga Aarti",
      "Kashi Vishwanath Temple",
      "Sarnath Tour"
    ]
  },
  {
    "id": "2",
    "title": "Ayodhya Ram Janmabhoomi",
    "location": "Ayodhya",
    "duration": "2 Days / 1 Night",
    "price": "₹7,500",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg/640px-Ram_Janmbhoomi_Mandir%2C_Ayodhya_Dham.jpg",
    "description": "Visit the sacred birthplace of Lord Rama and witness the grandeur of the new temple.",
    "highlights": [
      "Ram Mandir",
      "Hanuman Garhi",
      "Saryu River Ghats"
    ]
  },
  {
    "id": "3",
    "title": "Prayagraj Triveni Sangam",
    "location": "Prayagraj",
    "duration": "2 Days / 1 Night",
    "price": "₹6,500",
    "image": "https://media.istockphoto.com/id/1479317502/photo/aerial-view-of-sangam-prayagraj.jpg?s=612x612&w=0&k=20&c=GTTUcHAv6XXKQx9_pHdbvEUdwxbfZH7u49jqhHzDYVs=",
    "description": "Take a holy dip at the confluence of Ganga, Yamuna, and Saraswati rivers.",
    "highlights": [
      "Triveni Sangam",
      "Anand Bhavan",
      "Hanuman Temple"
    ]
  },
  {
    "id": "4",
    "title": "Gaya Pind Daan Special",
    "location": "Gaya",
    "duration": "2 Days / 1 Night",
    "price": "₹9,500",
    "image": "https://images.herzindagi.info/image/2020/Sep/gaya-district-in-bihar-to-visit.jpg",
    "description": "Perform ancestral rituals with our guided and hassle-free services in Gaya.",
    "highlights": [
      "Vishnupad Temple",
      "Bodhgaya Visit",
      "Pind Daan Ceremony"
    ]
  },
  {
    "id": "5",
    "title": "Complete Spiritual Circuit",
    "location": "Varanasi",
    "duration": "6 Days / 5 Nights",
    "price": "₹28,500",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcGZ5YOz8qBcJUS6oaD0SM_JYo600LdavLA&s",
    "description": "The ultimate pilgrimage covering Varanasi, Ayodhya, Prayagraj, and Gaya.",
    "highlights": [
      "All Major Temples",
      "Luxury Transport",
      "Guided Tours"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    "id": "1",
    "name": "Rajesh Kumar",
    "location": "Mumbai, India",
    "comment": "An absolutely divine experience. The arrangements in Varanasi were top-notch. Highly recommended!",
    "rating": 5,
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    "id": "2",
    "name": "Sarah Jenkins",
    "location": "London, UK",
    "comment": "Destination Kashi made our trip to Ayodhya seamless. The guide was very knowledgeable.",
    "rating": 5,
    "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    "id": "3",
    "name": "Amitabh Verma",
    "location": "Delhi, India",
    "comment": "Professional service. The hotels selected were clean and close to the temples.",
    "rating": 4,
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];

export const FAQ_DATA = [
  {
    "question": "What is included in the tour packages?",
    "answer": "Our packages typically include accommodation, breakfast, private transportation for sightseeing, and experienced tour guides. Entry fees to monuments are usually excluded unless specified."
  },
  {
    "question": "Can we customize the itinerary?",
    "answer": "Absolutely! We specialize in tailor-made packages. You can choose your preferred destinations, duration, and hotel category."
  },
  {
    "question": "Is it safe for solo female travelers?",
    "answer": "Yes, safety is our priority. We use verified drivers and guides, and our 24/7 support team is always available to assist you."
  },
  {
    "question": "Do you arrange for Pind Daan rituals?",
    "answer": "Yes, we have dedicated priests in Varanasi, Prayagraj, and Gaya to conduct Pind Daan and other religious rituals authentically."
  }
];
