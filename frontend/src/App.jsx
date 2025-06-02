import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/ServicesPage/Services';
import ContactUs from './pages/ContactUsPage/ContactUs';
import Blogs from './pages/BlogPage/Blog';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services/> }/>
          <Route path="/blogs" element={<Blogs/> }/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
