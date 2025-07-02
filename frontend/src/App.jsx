import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/ServicesPage/Services';
import ContactUs from './pages/ContactUsPage/ContactUs';
import Blogs from './pages/BlogPage/Blog';
import WebDevelopmentPage from './pages/ServicesSubPages/WebDevelopment/WebDevelopmentPage';
import MobileDevelopmentPage from './pages/ServicesSubPages/MobileDevelopment/MobileDevelopmentPage';
import CloudServicesPage from './pages/ServicesSubPages/CloudServices/CloudServicesPage';
import QualityAssurancePage from './pages/ServicesSubPages/QualityAssurance/QualityAssurancePage';
import SalesforcePage from './pages/ServicesSubPages/Salesforce/SalesforcePage';
import CI_CD_DevOpsPage from './pages/ServicesSubPages/CI-CD-DevOps/CI_CD_DevOpsPage';
import Portfolio from './pages/PortfolioPage/Portfolio';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import AboutUS from './pages/AboutUsPage/AboutUs';
import ScrollToAnchor from './components/ScrollToAnchor';

const App = () => {
  return (
    <Router basename="/new">
      <Layout>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/services" element={<Services />}>
            <Route path="webdevelopment" element={<WebDevelopmentPage />} />
            <Route path="mobiledevelopment" element={<MobileDevelopmentPage />} />
            <Route path="cloudservices" element={<CloudServicesPage />} />
            <Route path="qualityassurance" element={<QualityAssurancePage />} />
            <Route path="salesforce" element={<SalesforcePage />} />
            <Route path="cicddevops" element={<CI_CD_DevOpsPage />} />
          </Route>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
