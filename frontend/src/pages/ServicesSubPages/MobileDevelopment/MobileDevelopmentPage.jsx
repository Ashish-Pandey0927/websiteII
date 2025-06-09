import React from 'react';
import MobileDevHero from './MobileDevHero';
import MobileDevServices from './MobileDevServices';
import MobileDevTechCards from './MobileDevTechCards';
import ServicesSubPageFooter from '../ServicesSubPagesFooter';

function MobileDevelopmentPage() {
  return (
    <div>
          <section id="mobile-development-section1"><MobileDevHero /></section>
          <section id="mobile-development-section2"><MobileDevServices /></section>
          <section id="mobile-development-section3"><MobileDevTechCards /></section>
          <section id="mobile-development-section4"><ServicesSubPageFooter /></section>
    </div>
  )
}

export default MobileDevelopmentPage
