/**
 * APP COMPONENT (Main Router)
 * ===========================
 * Defines which page component to show based on the URL path.
 * Example: visiting /contact shows the Contact page.
 */

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutProfile from './pages/AboutProfile';
import AboutCertifications from './pages/AboutCertifications';
import ServiceDetail from './pages/ServiceDetail';
import Branches from './pages/Branches';
import Contact from './pages/Contact';
import TrackStatus from './pages/TrackStatus';
import PayNow from './pages/PayNow';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/profile" element={<AboutProfile />} />
          <Route path="about/certifications" element={<AboutCertifications />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="branches" element={<Branches />} />
          <Route path="contact" element={<Contact />} />
          <Route path="track-status" element={<TrackStatus />} />
          <Route path="pay-now" element={<PayNow />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
