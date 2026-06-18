import React from "react";
import "../ServicesSubPagesServices.css";
import androiedDevelopment from '../../../assets/androiedDevelopment.svg';
import iosDevelopment from '../../../assets/iosDevelopment.svg';
import FlutterDevelopment from '../../../assets/FlutterDevelopment.svg';
import ReactNativeDevelopment from '../../../assets/ReactNativeDevelopment.svg';
import XamarinMAUIDevelopment from '../../../assets/XamarinMAUIDevelopment.svg';
import mobileAppMigration from '../../../assets/mobileAppMigration.svg';

const services = [
  {
    title: "Android Development",
    description: "Android Native Development allows developers to create powerful, performance-intensive applications using the Android NDK. With access to platform-specific APIs, developers can build optimized apps for gaming, multimedia, and other demanding use cases.",
    icon: androiedDevelopment,
    isSvg: false,
  },
  {
    title: "iOS Development",
    description: "iOS native development uses Swift or Objective-C to deliver seamless, optimized apps for Apple's ecosystem. Developers can leverage advanced APIs and hardware capabilities to create immersive user experiences.",
    icon: iosDevelopment,
    isSvg: false,
  },
  {
    title: "Flutter Development",
    description: "Flutter enables cross-platform development with a single codebase. Its rich widgets, hot-reload feature, and native-like performance make it ideal for building visually appealing, responsive mobile apps.",
   icon: FlutterDevelopment,
    isSvg: false,
  },
  {
    title: "React Native Development",
    description: "React Native streamlines mobile development by enabling code reuse across iOS and Android platforms. With hot-reloading and pre-built components, it ensures efficient and high-quality app development.",
    icon: ReactNativeDevelopment,
    isSvg: false,
  },
  {
    title: "Xamarin/MAUI Development",
    description: "Xamarin/Maui simplifies cross-platform app development with native UI support and access to platform-specific APIs. Build apps for iOS, Android, and Windows with a single codebase.",
    icon: XamarinMAUIDevelopment,
    isSvg: false,
  },
  {
    title: "Mobile Apps Migration",
    description: "Hybrid apps combine the best of native and web technologies, enabling efficient cross-platform development. They provide cost-effective solutions for businesses aiming to reach wider audiences.",
    icon: mobileAppMigration,
    isSvg: false,}
];

export default function MobileDevServices() {
  return (
    <section id="mobileservices" className="webservices-section">
      <div className="webservices-header">
        <h2>Mobile Services We Offer</h2>
        <p>Custom mobile app development for Android and iOS.</p>
      </div>

      <div className="webservices-grid">
        {services.map((service, index) => (
          <div key={index} className="webservice-card">
            <div className="webservice-icon-wrapper">
              <div className="webservice-icon-bg" />
              <img src={service.icon} alt={service.title} className="webservice-icon-img" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
