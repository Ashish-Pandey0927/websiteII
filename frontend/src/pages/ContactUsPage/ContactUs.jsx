import React from 'react'
import ContactUsHero from './ContactUsHero';
import ContactDetailsSection from './ContactDetailsSection';
import LocationSection from './LocationSection';
import Footer from '../../components/Footer';


const ContactUs = () => {
  return (
    <div>
    <section id="contact-section1">
        <ContactUsHero />
      </section>
     <section id="contact-section2">
        <ContactDetailsSection />
      </section>
     <section id="contact-section3">
        <LocationSection />
      </section>
      <section id="contact-section4">
      <Footer/>
      </section>
    </div>
  )
}

export default ContactUs