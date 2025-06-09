import React from 'react';
import ServicesSubPageFooter from '../ServicesSubPagesFooter';
import CI_CD_DevOpsHero from './CI_CD_DevOpsHero';
import CI_CD_DevOpsServices from './CI_CD_DevOpsServices';
import CI_CD_DevOpsTechCards from './CI_CD_DevOpsTechCards';

function CI_CD_DevOpsPage() {
  return (
    <div>
          <section id="mobile-development-section1"><CI_CD_DevOpsHero /></section>
          <section id="mobile-development-section2"><CI_CD_DevOpsServices /></section>
          <section id="mobile-development-section3"><CI_CD_DevOpsTechCards /></section>
          <section id="mobile-development-section4"><ServicesSubPageFooter /></section>
    </div>
  )
}

export default CI_CD_DevOpsPage

