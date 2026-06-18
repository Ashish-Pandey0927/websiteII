import React from 'react';
import WebDevHero from './WebDevHero';
import WebDevServices from './WebDevServices';
import WebDevTechCards from './WebDevTechCards';
import Footer from '../../../components/Footer';

function WebDevelopmentPage() {
  return (
    <div>
          <section id="web-development-section1"><WebDevHero /></section>
          <section id="web-development-section2"><WebDevServices /></section>
          <section id="web-development-section3"><WebDevTechCards /></section>
          <section id="web-development-section4"><Footer /></section>
    </div>
  )
}

export default WebDevelopmentPage
