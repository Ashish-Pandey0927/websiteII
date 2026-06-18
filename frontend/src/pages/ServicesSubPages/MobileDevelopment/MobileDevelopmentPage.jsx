import React from 'react';
import MobileDevHero from './MobileDevHero';
import MobileDevServices from './MobileDevServices';
import MobileDevTechCards from './MobileDevTechCards';
import Footer from '../../../components/Footer';

function MobileDevelopmentPage() {
  return (
    <div>
          <section id="mobile-development-section1"><MobileDevHero /></section>
          <section id="mobile-development-section2"><MobileDevServices /></section>
          <section id="mobile-development-section3"><MobileDevTechCards /></section>
          <section id="mobile-development-section4"><Footer /></section>
    </div>
  )
}

export default MobileDevelopmentPage
