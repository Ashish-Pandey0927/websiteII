import AboutUs from './AboutUs';
import Alert from './Alert';
import Dashboard from './Dashboard';
import WhatWeDo from './WhatWeDo';
import OurWork from './OurWork';
import CTAForm from './CTAForm';
import Footer from '../../components/Footer';
const HomePage = () => {
  return (
    <div>
      <section id="home-section1">
        <Dashboard />
      </section>
      <section id="home-section2">
        <Alert />
      </section>

      <section id="home-section3" >
        <AboutUs />
      </section>

      <section id="home-section4" >
        <WhatWeDo />
      </section>

      <section id="home-section5" >
        <OurWork />
      </section>

      <section id="home-section6" >
        <CTAForm />
      </section>

      <section id="home-section7">
        <Footer className="home-footer" />
      </section>

    </div>
  );
};

export default HomePage;
