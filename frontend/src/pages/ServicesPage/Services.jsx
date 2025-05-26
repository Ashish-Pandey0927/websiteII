import React from 'react'
// import ServicePage from './ServicePage'
import OfferedServices from './OfferedServices'
import ProcessSection from './ProcessSection'
import NewsletterSection from './NewsletterSection'
import FAQSection from './FAQSection'
import Footer from './Footer'
import ServicePage from './ServicePage'

const Services = () => {
  return (
    <div>
      <section id="services-section1">
        <ServicePage />
      </section>
      <section id="services-section2">
        <OfferedServices />
      </section>
     <section id="services-section3">
        <ProcessSection />
      </section>
      <section id="services-section4">
        <NewsletterSection />
      </section>
      <section id="services-section5">
        <FAQSection />
      </section>
      <section id="services-section6">
        <Footer />
      </section> 
    </div>
  )
}

export default Services
