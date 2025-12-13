import React from 'react';
import { NavLink, TourPackage, Testimonial, GalleryImage, SiteImages, Service, Hotel, Transport } from './types';
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
  "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.567087826356!2d82.9897!3d25.3330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin",
  "facebook": "https://www.facebook.com/share/17Lq6zSGB6/",
  "instagram": "https://www.instagram.com/destinationkashi?igsh=MWRxcTJvY3lkbHhucw=="
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
    "id": "1765185363063",
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/960px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg?20240122115543",
    "alt": "Ayodhya ram temple",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765185469102",
    "src": "https://media.cnn.com/api/v1/images/stellar/prod/240123131600-09-ayodhya-temple-india.jpg?c=original",
    "alt": "Ayodhya ram temple nights view",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765185636079",
    "src": "https://m.media-amazon.com/images/I/81udiGg5Q2L.jpg",
    "alt": "Ayodhya lord ram picture",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765186001832",
    "src": "https://travelleemsps.com/wp-content/uploads/2025/12/hanuman-garhi-temple-ayodhya-darshan-timings.jpg",
    "alt": "Hanuman garhi temple ayodhya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765186149126",
    "src": "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Ayodhya_Hanuman_garhi_fort_1_l_468_640.jpg",
    "alt": "Hanuman garhi fort",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765186317550",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBOrfpYP2enNImmMYmXB5T8pRkwZK5nM1kQ&s",
    "alt": "Kanak bhawan ayodhya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765186553918",
    "src": "https://www.travelbaits.in/wp-content/uploads/2025/11/Dashrath-Mahal_01-1200x675-cropped.jpg",
    "alt": "Dashrath Mahal ayodhya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765186809456",
    "src": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/05/92d6622dc6e8d331d56c7e1e403c12fd_1000x1000.jpg",
    "alt": "Shri Nageshwarnath Temple",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765187787765",
    "src": "https://www.divyahimachal.com/wp-content/uploads/2024/02/3as4-1-copy.jpg",
    "alt": "Treta-ke-Thakur ayodhaya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765188070030",
    "src": "https://imgs.etvbharat.com/etvbharat/prod-images/08-07-2025/up-ayo-01-parvat-visbyte-10180_08072025154809_0807f_1751969889_659.jpg",
    "alt": "Mani Parvat ayodhya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765188501613",
    "src": "https://static.newstrack.com/uploads/images/2023/08/image_800x450_64db9f2823485.jpg",
    "alt": "lete hanuman prayagraj",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765188608788",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q66PKq3ndWxNEHNnTz-zb7KbZe666usctQ&s",
    "alt": "Narayani Ashram ayodhya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765189076885",
    "src": "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fcontent%2Ftemple%2Fimages%2F7f0743d1-7ce4-431e-ac43-69f821a49027.png&w=3840&q=100",
    "alt": "Kalyani devi temple",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765189226044",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROru-dzs9AchmYVTjrURxwWcFq6nynf8iPmA&s",
    "alt": "Shankar Viman Mandapam prayagraj",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765190875042",
    "src": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/23/4f/fc/new-yamuna-bridge.jpg?w=900&h=500&s=1",
    "alt": "Amuna bridge",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765190950793",
    "src": "https://www.travelworldplanet.com/wp-content/uploads/2018/11/Someshwar-Mahadev-Temple-Allahabad.jpg",
    "alt": "Someshwar Mahadev Temple",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765191133593",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZBDc1tP_exR_kyGedRhYi2cohoRTvmS25g&s",
    "alt": "Triveni sangam prayagraj",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765191254945",
    "src": "https://optimatravels.com/images/allahabad-images/nag-vasuki-temple-prayagraj.jpg",
    "alt": "Naag Vasuki Temple prayagraj",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765191486688",
    "src": "https://www.pinddaangaya.bihar.gov.in/images/extra/vishnupad_1.jpeg",
    "alt": "vishnupad temple gaya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765191677042",
    "src": "https://s7ap1.scene7.com/is/image/incredibleindia/A-Spiritual-Travel-Guide-to-Gaya-1-popular?qlt=82&ts=1726740883825",
    "alt": "mangla gauri temple gaya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765191789680",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7YOO86BDnWLt3_3aNEXS0CSNlfHFD0XNzzA&s",
    "alt": "Pind daan ghat gaya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765191981960",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4QdnQN1snxG2BGJbRoA3gdoSz67G9QDcWw&s",
    "alt": "mahabodhi temple bodh gaya",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765192158377",
    "src": "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/12/shutterstock_402120757-1.webp",
    "alt": "great buddha status bodh gaya ",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765192568408",
    "src": "images/kedarrrr.png",
    "alt": "kedarnath dham",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765192660521",
    "src": "images/CHAR DHAM.png",
    "alt": "Char dham yatra",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765192697416",
    "src": "images/GOA.png",
    "alt": "Goa trips",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765192823575",
    "src": "images/LASKHADWEEP.png",
    "alt": "lakshadeep  trip",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765192869903",
    "src": "images/THE-BUDDIST-CIRCUIT.png",
    "alt": "THE-BUDDIST-CIRCUIT",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765192945375",
    "src": "images/SINGAPORE.png",
    "alt": "SINGAPORE TRIP",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765193461263",
    "src": "images/template1.jpg",
    "alt": "Gallery Image",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765193492504",
    "src": "images/template2.jpg",
    "alt": "Gallery Image",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765193519951",
    "src": "images/template3.jpg",
    "alt": "Gallery Image",
    "span": "col-span-1 row-span-1"
  },
  {
    "id": "1765193650825",
    "src": "images/template4.jpg",
    "alt": "Gallery Image",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765193695663",
    "src": "images/template5.jpg",
    "alt": "Gallery Image",
    "span": "col-span-1 row-span-2"
  },
  {
    "id": "1765193764935",
    "src": "images/template6.jpg",
    "alt": "Gallery Image",
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
    "price": "₹9,500",
    "image": "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=800&auto=format&fit=crop",
    "description": "Experience the spiritual capital of India with morning boat rides and evening Aarti.",
    "highlights": [
      "Ganga Aarti",
      "Kashi Vishwanath Temple",
      "Kaal bhairav temple",
      "Sarnath Tour"
    ]
  },
  {
    "id": "2",
    "title": "Ayodhya Ram Janmabhoomi",
    "location": "Ayodhya",
    "duration": "2 Days / 1 Night",
    "price": "₹5,500",
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
    "price": "₹6,500",
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
    "price": "₹23,500",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcGZ5YOz8qBcJUS6oaD0SM_JYo600LdavLA&s",
    "description": "The ultimate pilgrimage covering Varanasi, Ayodhya, Prayagraj, and Gaya.",
    "highlights": [
      "All Major Temples",
      "Luxury Transport",
      "Guided Tours"
    ]
  },
  {
    "id": "1765276359523",
    "title": "Packages For Manali",
    "location": "manali",
    "duration": "3 Days / 2 Nights",
    "price": "7,800",
    "priceUnit": "/ person / for 2 person",
    "image": "https://www.mytownblog.com/wp-content/uploads/2024/10/Best-Places-to-Visit-in-Manali.png",
    "description": "Manali, nestled in the Himalayas, offers breathtaking views, adventure activities, and a serene escape. Ideal for nature lovers, adventure seekers, and honeymooners, this tour showcases the beauty of nature",
    "highlights": [
      "Enjoy adventure sports like paragliding, skiing, and river rafting.",
      "Trek to nearby villages and scenic spots.",
      "Visit the Manu Temple and other religious sites.",
      "Explore the local markets for handicrafts..."
    ]
  },
  {
    "id": "1765276608881",
    "title": "Packages For Goa",
    "location": "Goa",
    "duration": "3 Days / 2 Nights",
    "price": "7,700",
    "priceUnit": "/ person / for 2 person",
    "image": "https://www.sushanttravels.com/blog/2019/12/1576592415.jpg",
    "description": "Goa, located on the western coast of India, is renowned for its beautiful beaches, vibrant culture, and rich colonial history.",
    "highlights": [
      "Relax on the pristine beaches",
      "Explore Portuguese heritage and colonial architecture",
      "Indulge in water sports like parasailing and jet skiing",
      "Enjoy vibrant beach parties and nightlife",
      "Visit spice planta..."
    ]
  },
  {
    "id": "1765276768248",
    "title": "Packages For Darjeeling",
    "location": "Darjeeling",
    "duration": "3 Days / 2 Nights",
    "price": "8,600",
    "priceUnit": "/ person / for 2 person",
    "image": "https://trekinsikkim.in/_next/image?url=https%3A%2F%2Fupload.trekinsikkim.in%2Fuploads%2Fmedia-gallery%2Ffiles-1748685567719-977695027&w=3840&q=75",
    "description": "Darjeeling, the \"Queen of the Hills,\" offers breathtaking views of the Himalayas, lush tea gardens, and a serene atmosphere. Ideal for nature lovers, honeymooners, and those seeking a peaceful getaway...",
    "highlights": [
      "Enjoy a ride on the Darjeeling Himalayan Railway (Toy Train)",
      "Visit a tea estate and learn about tea processing",
      "Witness the sunrise from Tiger Hill",
      "Explore the local markets for handicrafts and souveni..."
    ]
  },
  {
    "id": "1765277031867",
    "title": "Packages For Ladakh",
    "location": "Ladakh",
    "duration": "3 Days / 2 Nights",
    "price": "23,000",
    "priceUnit": "/ person / for 2 person",
    "image": "https://montaxe.com/wp-content/uploads/2024/04/Ladakh-Tourism.webp",
    "description": "Ladakh, the land of high passes, offers a breathtaking journey through rugged mountains, pristine lakes, and ancient monasteries. Ideal for adventure seekers, nature lovers, and spiritual explorers",
    "highlights": [
      "Visit ancient monasteries like Hemis, Thiksey, and Alchi",
      "Enjoy white water rafting in the Zanskar River",
      "Trek to remote villages and high-altitude passes",
      "Stargaze in the clear night sky",
      "Experience the ..."
    ]
  },
  {
    "id": "1765277326528",
    "title": "Packages For Kedarnath",
    "location": "kedarnath dham",
    "duration": "3 Days / 2 Nights",
    "price": "14,000",
    "priceUnit": "/ person / for 2 person",
    "image": "images/kedarrrr.png",
    "description": "Embark on a spiritual journey to Kedarnath, one of the holiest shrines dedicated to Lord Shiva, nestled in the majestic Himalayas. This pilgrimage is ideal for devotees and adventure seekers looking",
    "highlights": [
      "Attend the morning and evening prayers at Kedarnath Temple",
      "Trek to Vasuki Tal, a serene lake known for its pristine beauty",
      "Visit the Bhairavnath Temple for panoramic views of the valley",
      "Explore the lo..."
    ]
  },
  {
    "id": "1765277568160",
    "title": "Packages For Lakshadweep",
    "location": "Lakshadweep",
    "duration": "3 Days / 2 Nights",
    "price": "21,500",
    "priceUnit": "/ person / for 2 person",
    "image": "images/LASKHADWEEP.png",
    "description": "Lakshadweep, India's tropical archipelago, offers pristine beaches, vibrant coral reefs, and serene lagoons. Ideal for beach lovers, adventure seekers, and those looking for tranquility, this tour",
    "highlights": [
      "Scuba diving and snorkeling in the coral reefs",
      "Enjoy water sports like kayaking, windsurfing, and sailing",
      "Relax on the pristine beaches and soak up the sun",
      "Explore the local culture and cuisine"
    ]
  },
  {
    "id": "1765277763040",
    "title": "Chitrakoot Dham",
    "location": "Chitrakoot",
    "duration": "3 Days / 2 Nights",
    "price": "9,400",
    "priceUnit": "/ person / for 2 person",
    "image": "https://seawatersports.com/images/places/chitrakoot.jpg",
    "description": "Chitrakoot Tourism 2 Nights 3 Days will take you to a few of the best places to visit in Chitrakoot. With this Chitrakoot Tour Package spread over 5 days, you will get to visit the prominent tourist places in Chitrakoot. Chitrakoot is famous for pilgrimage places. Click on Book Now to explore More!!",
    "highlights": [
      "Accommodation in Selected Hotel",
      "All State Taxes, Toll Taxes, Paring fees and Driver Charges",
      "Break Fast and Dinner",
      "Sightseeing as per Itinerary",
      "Transportation in Selected Mode of Transport"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    "id": "1765272894381",
    "name": "Rajesh kumar",
    "location": "prayagraj",
    "comment": "An absolutely divine experience. The arrangements in Varanasi were top-notch. Highly recommended",
    "rating": 5,
    "avatar": "https://i.pinimg.com/564x/54/95/07/549507b290b7b3ee0626e5710a354f39.jpg"
  },
  {
    "id": "1765273082690",
    "name": "vivek singh",
    "location": "gaya",
    "comment": "Destination Kashi made our trip to Ayodhya seamless. The guide was very knowledgeable",
    "rating": 4,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHOqSGRmj_SeRuzMpVCHbYeBtLAYKJmk3Vg&s"
  },
  {
    "id": "1765273229387",
    "name": "abhinandan singh",
    "location": "mathura",
    "comment": "Professional service. The hotels selected were clean and close to the temples",
    "rating": 5,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLX62ngGcKKfRDmHK2-kZ8ixUZvclXpE6XA&s"
  },
  {
    "id": "1765273679251",
    "name": "nitish sharma",
    "location": "ayodhya",
    "comment": "We made a Ladhak tour, India which arranged by Tour by Driver. We had the opportunity to meet several employees that went beyond their responsibility to make our trip great. To name a few, Raju, Chaman, Manu and the driver Ram were excellent. Most of the arranged places, hotels, and transportation were perfect.",
    "rating": 5,
    "avatar": "data:image/jpeg;base64,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"
  },
  {
    "id": "1765274150212",
    "name": "abhishek kumar",
    "location": "lanka, varanasi",
    "comment": "Our Footstep of Buddha Tour with Tour by Driver India was amazing. We visited Delhi, Agra, Sankasya, Lucknow, Varanasi, Bodhgaya, Rajgir, Nalanda, Vaishali, Kushinagar, Lumbini, Kapilvastu and Sravasti. We are group of 15 people from Japan for this Buddhist tour. Thank you to destination kashi tours & travels for beautiful travel plan. Tour by Driver is best travel company for Buddhism tour. Highly recommended.",
    "rating": 5,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4guKoKdMPW7mjBHXWI02RKiFnMrd6uu-ug&s"
  },
  {
    "id": "1765274559296",
    "name": "satyanand singh",
    "location": "shamneghat, varanasi",
    "comment": "Hi destination kashi tours & travels, We are still missing you. You have organized fantastic tour of north India with Rishikesh and Haridwar. Everything was very nice well organized. Especially we had very nice welcome and support by driver at the airport that helped us with everything! He was very helpful. From first day to 15th day he was 24/7 available to help us. We had never seen hospitality like this before.",
    "rating": 5,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWEgVXJnWSJ-ml_E_C-xPGLlgAKPdfachug&s"
  },
  {
    "id": "1765275139600",
    "name": "jagdish keshari",
    "location": "bhelupur, varanasi",
    "comment": "Tour by destination kashi tours & travels are to be complemented for the hassle-free holiday that they arranged for us. We thoroughly enjoyed our holiday through the ayodhya and prayagraj provinces, and can honestly say that we did not encounter one single problem during our tours.\n\nI would highly recommend Tour By Driver for anyone wishing to arrange a safe and enjoyable holiday to enjoy the sights, smells, and tastes of India!!",
    "rating": 5,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF133CtxubzfApr2Y-jFT8qCWOrtpIMI6Hg&s"
  },
  {
    "id": "1765275611740",
    "name": "gautam tiwari",
    "location": "pune, india",
    "comment": "Going in a group tour with complete strangers can be challenging, but transforming travels and the group leader of the tour made their best efforts to bring in the group together and made this trip to remember for us.\nPlace is good to beat the regular congestion.\nStay was very comfortable and the host was very helpful and supportive in every possible way.",
    "rating": 5,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwf0LT1ts58csSCr5N05qmTHMYStVvWmOXQ&s"
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

export const INITIAL_HOTELS: Hotel[] = [
  {
    "id": "1765613482345",
    "name": "Radisson Hotel  varanasi",
    "location": "Varanasi",
    "address": "Varanasi, Uttar Pradesh",
    "rating": 0,
    "price": "",
    "currency": "",
    "images": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/eb/87/ed/radisson-hotel-varanasi.jpg?w=500&h=-1&s=1"
    ],
    "amenities": [],
    "description": "",
    "contact": "",
    "website": ""
  },
  {
    "id": "1765614759369",
    "name": "Hotel Ramada ",
    "location": "Varanasi",
    "address": "Varanasi, Uttar Pradesh",
    "images": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/d9/28/26/ramada-plaza-jhv-varanasi.jpg?w=700&h=-1&s=1"
    ],
    "description": ""
  },
  {
    "id": "1765614889642",
    "name": "Hotel Madin ",
    "location": "Varanasi",
    "address": "Varanasi, Uttar Pradesh",
    "images": [
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201608231653085625-255a4e6afe3211eabe360242ac110002.jpg"
    ],
    "description": ""
  },
  {
    "id": "1765615352313",
    "name": "Taj Ganges",
    "location": "Varanasi",
    "address": "Varanasi, Uttar Pradesh",
    "images": [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48557750.jpg?k=5b3739e8a877776a36514c482180c227249de4bc4de4db85215e9ae7f0be8b87&o="
    ],
    "description": ""
  },
  {
    "id": "1765615404375",
    "name": "Park Inn by Radisson",
    "location": "Ayodhya",
    "address": "Ayodhya, Uttar pradesh",
    "images": [
      "https://r1imghtlak.mmtcdn.com/c74aa4f0b12a11ee8b450a58a9feac02.jpg?&output-quality=75&downsize=520:350&crop=520:350;12",
      "0&output-format=jpg"
    ],
    "description": ""
  },
  {
    "id": "1765615701007",
    "name": "Cygnett Collection KK Hotel",
    "location": "Ayodhya",
    "address": "Ayodhya, Uttar pradesh",
    "images": [
      "https://gos3.ibcdn.com/f171ac2299a311eeb37a0a58a9feac02.jpg"
    ],
    "description": ""
  },
  {
    "id": "1765615874769",
    "name": "Praveg Tent City Saryu",
    "location": "Ayodhya",
    "address": "Ayodhya, Uttar pradesh",
    "images": [
      "https://cf.bstatic.com/xdata/images/hotel/max500/550200457.jpg?k=0b47d7b45bbd7c48e1728343dbb0f2ee5111e1a8f6dbd6606054c5df2c6238ff&o=&hp=1"
    ],
    "description": ""
  },
  {
    "id": "1765616220985",
    "name": "Amritara Ramila Kutir",
    "location": "Ayodhya",
    "address": "Ayodhya, Uttar pradesh",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxutE-DpmjMeOwd7S8yEG3sWI0oC1M_2IKMg&s"
    ],
    "description": ""
  },
  {
    "id": "1765616654769",
    "name": "Hotel hira inn",
    "location": "Prayagraj",
    "address": "Prayagraj, Uttar pradesh",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIyxFofj882tr4OIOERgZ85LLkgrKpf7EYw&s"
    ],
    "description": ""
  },
  {
    "id": "1765616927312",
    "name": "Millennium Inn",
    "location": "Prayagraj",
    "address": "Prayagraj, Uttar pradesh",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9c7nFoaWalC7S7RzSGbccXSwEjcklJP2Zg&s"
    ],
    "description": ""
  },
  {
    "id": "1765617025201",
    "name": "Grand Continental Hotel",
    "location": "Prayagraj",
    "address": "Prayagraj, Uttar pradesh",
    "images": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/49/1e/85/hotel-grand-continental.jpg?w=500&h=-1&s=1"
    ],
    "description": ""
  },
  {
    "id": "1765617247581",
    "name": "WelcomHeritage Badi Kothi",
    "location": "Prayagraj",
    "address": "Prayagraj, Uttar pradesh",
    "images": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/6d/04/31/wh-badi-kothi-facade.jpg?w=900&h=-1&s=1"
    ],
    "description": ""
  }
];

export const INITIAL_TRANSPORTS: Transport[] = [
  {
    "id": "1765624866083",
    "name": "Maruti Suzuki Dzire",
    "image": "https://www.carblogindia.com/wp-content/uploads/2024/02/new-generation-2024-maruti-dzire-front-three-quarters-rendering.jpg"
  },
  {
    "id": "1765625009791",
    "name": "Innova crysta",
    "image": "https://m.media-amazon.com/images/I/51DTZ3GOByL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    "id": "1765625092528",
    "name": "Kia Carens",
    "image": "https://imgd.aeplcdn.com/370x208/n/a97j3cb_1726575.jpg?q=80"
  },
  {
    "id": "1765625181640",
    "name": "Maruti ertiga",
    "image": "https://imgd.aeplcdn.com/642x336/n/c6es93a_1572125.jpg?q=80"
  },
  {
    "id": "1765626204852",
    "name": "Tempo traveller",
    "image": "https://www.vpltravels.com/wp-content/uploads/2024/01/18-Seater-Tempo-Traveller-Rental-in-Chennai.webp"
  },
  {
    "id": "1765626255496",
    "name": "Force Urbania",
    "image": "https://dashboard.manojtravels.in/assets/uploads/1722181068.png"
  },
  {
    "id": "1765626368866",
    "name": "Luxury buses",
    "image": "https://applecarrentals.com/assets/web/images/about/bus.jpg"
  }
];
