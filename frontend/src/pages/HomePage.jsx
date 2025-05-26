
import AboutUs from './AboutUs';
import Alert from './Alert';
import Dashboard from './Dashboard';
import WhatWeDo from './WhatWeDo';
import OurWork from './OurWork';
import CTAForm from './CTAForm';
import Footer from './Footer';
const HomePage = () => {
  return (
    <div>
      <section id="section1">
    <Dashboard />
      </section>
      <section id="section2">
      <Alert />
      </section>

      <section id="section3" >
      <AboutUs />
      </section>

      <section id="section4" >
      <WhatWeDo />
      </section>

      <section id="section5" >
      <OurWork />
      </section>

      <section id="section6" >
      <CTAForm />
      </section>

      <section id="section7" >
      <Footer />
      </section>
    

    </div>
  );
};

export default HomePage;
