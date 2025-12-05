import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

// Admin Imports
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import PackageForm from './pages/admin/PackageForm';
import ManageImages from './pages/admin/ManageImages';
import ManageGallery from './pages/admin/ManageGallery';
import ManageContact from './pages/admin/ManageContact';
import ManageTestimonials from './pages/admin/ManageTestimonials';
import ManageFAQs from './pages/admin/ManageFAQs';
import ManageServices from './pages/admin/ManageServices';
import ServiceForm from './pages/admin/ServiceForm';
import ExportData from './pages/admin/ExportData';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<Login />} />
                <Route 
                  path="/admin/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/export-data" 
                  element={
                    <ProtectedRoute>
                      <ExportData />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/package/new" 
                  element={
                    <ProtectedRoute>
                      <PackageForm />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/package/edit/:id" 
                  element={
                    <ProtectedRoute>
                      <PackageForm />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/manage-images" 
                  element={
                    <ProtectedRoute>
                      <ManageImages />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/manage-gallery" 
                  element={
                    <ProtectedRoute>
                      <ManageGallery />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/manage-contact" 
                  element={
                    <ProtectedRoute>
                      <ManageContact />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/manage-testimonials" 
                  element={
                    <ProtectedRoute>
                      <ManageTestimonials />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/manage-faqs" 
                  element={
                    <ProtectedRoute>
                      <ManageFAQs />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/manage-services" 
                  element={
                    <ProtectedRoute>
                      <ManageServices />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/service/edit/:id" 
                  element={
                    <ProtectedRoute>
                      <ServiceForm />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;