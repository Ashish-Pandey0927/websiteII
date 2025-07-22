import React, { useEffect } from 'react';
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
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  useEffect(() => {
    // if (process.env.NODE_ENV !== "production") return;

    // Google Analytics (GA4)
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-PFLNEBNYBE";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaInitScript = document.createElement("script");
    gaInitScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PFLNEBNYBE', { page_path: window.location.pathname });
    `;
    document.head.appendChild(gaInitScript);

    // Microsoft Clarity
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "qfuwyxc1ns"); // Replace with your Clarity ID

  }, []);

  return (
    <Router>
      <Layout>
        <ScrollToTop />
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
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
