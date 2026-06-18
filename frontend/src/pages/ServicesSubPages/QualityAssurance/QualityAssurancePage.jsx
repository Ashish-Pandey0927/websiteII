import React from 'react';
import QualityAssuranceHero from './QualityAssuranceHero';
import QualityAssuranceServices from './QualityAssuranceServices';
import QualityAssuranceTechCards from './QualityAssuranceTechCards';
import Footer from '../../../components/Footer';

function QualityAssurancePage() {
  return (
    <div>
          <section id="web-development-section1"><QualityAssuranceHero /></section>
          <section id="web-development-section2"><QualityAssuranceServices /></section>
          <section id="web-development-section3"><QualityAssuranceTechCards /></section>
          <section id="web-development-section4"><Footer /></section>
    </div>
  )
}

export default QualityAssurancePage
