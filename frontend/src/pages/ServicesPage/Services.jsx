import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import OfferedServices from './OfferedServices';
import ProcessSection from './ProcessSection';
import NewsletterSection from './NewsletterSection';
import FAQSection from './FAQSection';
import ServicePage from './ServicePage';
import Footer from '../../components/Footer';

const Services = () => {
  const location = useLocation();
  const isSubPage = location.pathname !== '/services';
  return (
    <div>
  {!isSubPage && (
        <>
          <section id="services-section1"><ServicePage /></section>
          <section id="services-section2"><OfferedServices /></section>
          <section id="services-section3"><ProcessSection /></section>
          <section id="services-section4"><NewsletterSection /></section>
          <section id="services-section5"><FAQSection /></section>
          <section id="services-section6"><Footer /></section>
        </>
      )}
      {/* This renders /services/webdevelopment and other subpages */}
      <Outlet />
    </div>
  );
};

export default Services;
