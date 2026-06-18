import AboutUsHero from './AboutUsHero';
import Footer from '../../components/Footer';
import AiOverview from './AiOverview';
import AboutUsMetrics from './AboutUsMetrics';
import OurCoreValues from './OurCoreValues';
import WhyChooseUs from './WhyChooseUs';
import AboutUsFAQ from './AboutUsFAQ';
import TestimonialCarousel from './TestimonialCarousel';
import VisionMissionSection from './VisionMissionSection';

const AboutUS = () => {
  return (
    <div>
      <section id="About-section1">
        <AboutUsHero />
      </section>
      <section id="About-section2">
        <AboutUsMetrics />
      </section>
      <section id="About-section3">
        <VisionMissionSection />
      </section>
      <section id="About-section4">
        <WhyChooseUs />
      </section>
      <section id="About-section5">
        <OurCoreValues />
      </section>
      <section id="About-section6">
        <AboutUsFAQ />
      </section>
      <section id="About-section7">
        <AiOverview />
      </section>
      <section id="About-section8">
        <TestimonialCarousel />
      </section>
      <section id="About-section9">
        <Footer />
      </section>
    </div>
  )
}
export default AboutUS
