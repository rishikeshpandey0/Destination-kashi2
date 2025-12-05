import React from 'react';
import { useData } from '../../context/DataContext';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { Plus, Edit, Trash2, LogOut, RotateCcw, Image, Grid, Phone, MessageSquare, HelpCircle, Layers, Code } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { packages, deletePackage, resetData } = useData();
  const { logout } = useAuth();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      deletePackage(id);
    }
  };

  const handleReset = () => {
    if (window.confirm('This will delete all your custom changes and restore the original website data. Are you sure?')) {
      resetData();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-serif font-bold text-brand-dark">Admin Dashboard</h1>
          <div className="flex gap-4">
             <Link to="/admin/export-data">
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20">
                   <Code size={18} /> Get Updated Code
                </Button>
             </Link>
            <Button variant="outline" onClick={logout} className="flex items-center gap-2">
              <LogOut size={18} /> Logout
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link to="/admin/package/new" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">Add Package</h3>
                        <p className="text-gray-500 text-sm">Create a new tour package</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Plus size={20} />
                    </div>
                </div>
            </Link>
            
            <Link to="/admin/manage-images" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">Site Images</h3>
                        <p className="text-gray-500 text-sm">Update banners & backgrounds</p>
                    </div>
                    <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Image size={20} />
                    </div>
                </div>
            </Link>

            <Link to="/admin/manage-services" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">Manage Services</h3>
                        <p className="text-gray-500 text-sm">Edit Cars, Tours, Hotels info</p>
                    </div>
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Layers size={20} />
                    </div>
                </div>
            </Link>

            <Link to="/admin/manage-gallery" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">Gallery</h3>
                        <p className="text-gray-500 text-sm">Add/Remove gallery photos</p>
                    </div>
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Grid size={20} />
                    </div>
                </div>
            </Link>

            <Link to="/admin/manage-contact" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">Contact Info</h3>
                        <p className="text-gray-500 text-sm">Phone, Email, Address</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Phone size={20} />
                    </div>
                </div>
            </Link>

            <Link to="/admin/manage-testimonials" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">Testimonials</h3>
                        <p className="text-gray-500 text-sm">Manage customer reviews</p>
                    </div>
                    <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                        <MessageSquare size={20} />
                    </div>
                </div>
            </Link>

            <Link to="/admin/manage-faqs" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between group h-full">
                    <div>
                        <h3 className="font-bold text-brand-dark text-lg">FAQs</h3>
                        <p className="text-gray-500 text-sm">Manage Questions & Answers</p>
                    </div>
                    <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <HelpCircle size={20} />
                    </div>
                </div>
            </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h2 className="text-xl font-bold text-gray-800">Manage Packages ({packages.length})</h2>
            <button onClick={handleReset} className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-1">
                <RotateCcw size={14} /> Reset All Data to Defaults
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="p-4 border-b">Image</th>
                  <th className="p-4 border-b">Title</th>
                  <th className="p-4 border-b">Location</th>
                  <th className="p-4 border-b">Price</th>
                  <th className="p-4 border-b text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-b">
                      <img src={pkg.image} alt={pkg.title} className="w-16 h-12 object-cover rounded" />
                    </td>
                    <td className="p-4 border-b font-medium text-gray-900">{pkg.title}</td>
                    <td className="p-4 border-b text-gray-600">{pkg.location}</td>
                    <td className="p-4 border-b text-brand-blue font-bold">{pkg.price}</td>
                    <td className="p-4 border-b text-right">
                      <div className="flex justify-end gap-2">
                        <Link to={`/admin/package/edit/${pkg.id}`}>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                            <Edit size={18} />
                          </button>
                        </Link>
                        <button 
                          onClick={() => handleDelete(pkg.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {packages.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                    No packages found. Click "Add Package" to create one.
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;