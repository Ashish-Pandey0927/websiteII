import React from 'react';
import "../TechCards.css";
import kotlinlogo from '../../../assets/logo/kotlinlogo.png';
import dartlogo from '../../../assets/logo/dartlogo.png';
import swiftlogo from '../../../assets/logo/Swiftlogo.png';
import netlogo from '../../../assets/logo/.netlogo.png';
import objectiveClogo from '../../../assets/logo/objectiveClogo.png';
import exlogo from '../../../assets/logo/exlogo.png';
import javalogo from '../../../assets/logo/javalogo.png';
import cSharplogo from '../../../assets/logo/cSharplogo.png';
import firebaselogo from '../../../assets/logo/firebaselogo.png';

const techIcons = [
    {
        title: 'Kotlin',
        description: 'We use Kotlin, a modern and efficient programming language, to build secure, high-performance mobile and backend applications. Its concise syntax and reliability help us deliver robust software solutions faster.',
        image: kotlinlogo,
    },
    {
        title: 'Dart',
        description: 'Dart is a fast, modern language by Google, used with Flutter to build high-quality apps for mobile, web, and desktop from a single codebase.',
        image: dartlogo,
    },
    {
        title: 'Swift',
        description: 'Swift is a modern, high-performance programming language developed by Apple. Designed for safety and speed, it’s ideal for building robust apps across iOS, macOS, watchOS, and tvOS.',
        image: swiftlogo,
    },
    {
        title: 'MAUI/.NET Standard',
        description: 'We use Kotlin, a modern and efficient programming language, to build secure, high-performance mobile and backend applications. Its concise syntax and reliability help us deliver robust software solutions faster.',
        image: netlogo,
    },
    {
        title: 'Java',
        description: 'Java is a powerful, versatile language widely used for building secure and scalable applications. Its cross-platform capabilities make it ideal for web, mobile, and enterprise solutions.4.1-mini.',
        image: javalogo,
    },
    {
        title: 'Objective-C',
        description: 'Objective-C is a dynamic, object-oriented language primarily used for developing apps on Apple’s iOS and macOS platforms. It combines C’s performance with powerful runtime features, enabling flexible and efficient app development.',
        image: objectiveClogo,
    },
    {
        title: 'C#',
        description: 'C# is a versatile language by Microsoft used to build powerful apps for Windows, web, and cloud. It offers simplicity and performance for scalable solutions.',
        image: cSharplogo,
    },
    {
        title: 'Firebase',
        description: 'Firebase is a Google platform that simplifies app development with real-time databases, authentication, and cloud services.',
        image: firebaselogo,
    }
];

// Main TechCards component
export default function MobileDevTechCards() {
    return (
        <section id="mobiletechcards" className="tech-cards-section">
            <div className="tech-cards-header">
                <h2>Build Mobile Apps with EstonSoft</h2>
                <p>A powerful language for building modern applications.</p>
            </div>

            <div className="tech-cards-grid">
                {techIcons.map((techicon, index) => (
                    <div key={index} className="tech-card">
                        <div className="icon-title-wrapper">
                        <div className="tech-cards-icon-wrapper">
                            <img src={techicon.image} alt={techicon.title} className="tech-cards-icon-img" />
                        </div>
                        <h3>{techicon.title}</h3>
                        </div>
                        <p>{techicon.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
