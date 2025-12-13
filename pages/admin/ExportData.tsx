import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import Button from '../../components/ui/Button';
import { ArrowLeft, Copy, CheckCircle, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExportData: React.FC = () => {
  const { packages, siteImages, gallery, contactInfo, testimonials, faqs, services, hotels, transports } = useData();
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    return `import React from 'react';
import { NavLink, TourPackage, Testimonial, GalleryImage, SiteImages, Service, Hotel, Transport } from './types';
import { MapPin, Sun, Moon, Coffee, Landmark, Users, BedDouble, Bus, UserCheck, Globe } from 'lucide-react';

export const CONTACT_INFO = ${JSON.stringify(contactInfo, null, 2)};

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export const INITIAL_SITE_IMAGES: SiteImages = ${JSON.stringify(siteImages, null, 2)};

export const INITIAL_GALLERY_IMAGES: GalleryImage[] = ${JSON.stringify(gallery, null, 2)};

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

export const SERVICES_DATA: Service[] = ${JSON.stringify(services, null, 2)};

export const PACKAGES: TourPackage[] = ${JSON.stringify(packages, null, 2)};

export const TESTIMONIALS: Testimonial[] = ${JSON.stringify(testimonials, null, 2)};

export const FAQ_DATA = ${JSON.stringify(faqs, null, 2)};

export const INITIAL_HOTELS: Hotel[] = ${JSON.stringify(hotels || [], null, 2)};

export const INITIAL_TRANSPORTS: Transport[] = ${JSON.stringify(transports || [], null, 2)};
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const code = generateCode();
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'constants.ts';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/admin/dashboard" className="text-gray-500 hover:text-brand-dark flex items-center gap-2 mb-4">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-serif font-bold text-brand-dark">
            Export Data for Live Site
          </h1>
          <p className="text-gray-600 mt-2">
            The changes you make in the Admin Panel are saved in your browser (Local Storage). 
            To make them permanent on the live website, copy the code below and paste it into your <code>constants.ts</code> file.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-700 font-bold">
              <Code size={18} />
              <span>constants.ts</span>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={handleDownload} size="sm" className="mr-2">
                <Code size={16} className="mr-2" /> Download File
              </Button>
              <Button onClick={handleCopy} size="sm" className={copied ? "bg-green-600 hover:bg-green-700" : ""}>
                {copied ? (
                  <>
                    <CheckCircle size={16} className="mr-2" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" /> Copy Code
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className="relative">
            <pre className="p-6 bg-[#1e1e1e] text-blue-300 overflow-auto h-[600px] text-sm font-mono leading-relaxed selection:bg-blue-500/30">
              {generateCode()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportData;