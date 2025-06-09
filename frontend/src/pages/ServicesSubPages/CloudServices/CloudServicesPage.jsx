import React from 'react';
import ServicesSubPageFooter from '../ServicesSubPagesFooter';
import CloudServicesHero from './CloudServicesHero';
import CloudServicesServices from './CloudServicesServices';
import CloudServicesTechCards from './CloudServicesTechCards';

function CloudServicesPage() {
  return (
    <div>
          <section id="mobile-development-section1"><CloudServicesHero /></section>
          <section id="mobile-development-section2"><CloudServicesServices /></section>
          <section id="mobile-development-section3"><CloudServicesTechCards /></section>
          <section id="mobile-development-section4"><ServicesSubPageFooter /></section>
    </div>
  )
}

export default CloudServicesPage

