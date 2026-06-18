import React from 'react';
import CloudServicesHero from './CloudServicesHero';
import CloudServicesServices from './CloudServicesServices';
import CloudServicesTechCards from './CloudServicesTechCards';
import Footer from '../../../components/Footer';

function CloudServicesPage() {
  return (
    <div>
          <section id="mobile-development-section1"><CloudServicesHero /></section>
          <section id="mobile-development-section2"><CloudServicesServices /></section>
          <section id="mobile-development-section3"><CloudServicesTechCards /></section>
          <section id="mobile-development-section4"><Footer /></section>
    </div>
  )
}

export default CloudServicesPage

