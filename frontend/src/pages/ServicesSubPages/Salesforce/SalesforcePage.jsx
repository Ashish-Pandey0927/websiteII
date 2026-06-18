import React from 'react';
import SalesforceHero from './SalesforceHero';
import SalesforceServices from './SalesforceServices';
import SalesforceTechCards from './SalesforceTechCards';
import Footer from '../../../components/Footer';

function SalesforcePage() {
  return (
    <div>
          <section id="salesforce-section1"><SalesforceHero /></section>
          <section id="salesforce-section2"><SalesforceServices /></section>
          <section id="salesforce-section3"><SalesforceTechCards /></section>
          <section id="salesforce-section4"><Footer /></section>
    </div>
  )
}

export default SalesforcePage
