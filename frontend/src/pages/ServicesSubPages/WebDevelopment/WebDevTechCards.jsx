import React from 'react';
import "../TechCards.css";
import reactlogo from '../../../assets/logo/Reactlogo.png';
import vuelogo from '../../../assets/logo/vuelogo.png';
import angularlogo from '../../../assets/logo/angularlogo.png';
import nodelogo from '../../../assets/logo/NodeJslogo.png';
import pythonlogo from '../../../assets/logo/pythonlogo.png';
import exlogo from '../../../assets/logo/exlogo.png';
import javalogo from '../../../assets/logo/javalogo.png';
import phplogo from '../../../assets/logo/PHPlogo.png';
import cSharplogo from '../../../assets/logo/cSharplogo.png';
import nextlogo from '../../../assets/logo/nextjslogo.png';

const techIcons = [
    {
        title: 'React',
        description: `We use React.js to build fast, scalable, and interactive web apps. Its reusable components speed up development. Users enjoy a smooth and modern experience.`,
        image: reactlogo,
    },
    {
        title: 'Vue',
        description: 'We use Vue.js to create lightweight, flexible, and interactive web interfaces. Its reactive framework allows for fast development and seamless updates. This results in a smooth and responsive user experience.',
        image: vuelogo,
    },
    {
        title: 'Angular',
        description: 'We use AngularJS to build robust, dynamic web applications with a structured framework. It supports two-way data binding and modular development. This ensures efficient performance and maintainable code at scale.',
        image: angularlogo,
    },
    {
        title: 'Node.js',
        description: 'We use Node.js to build fast and scalable server-side applications. Its event-driven architecture ensures efficient performance. This powers seamless and real-time web experiences.',
        image: nodelogo,
    },
    {
        title: 'Python',
        description: 'We use Python to develop versatile and powerful applications. Its simplicity and rich libraries speed up development. This ensures efficient and reliable software solutions.',
        image: pythonlogo,
    },
    {
        title: 'Express.js',
        description: 'We use Express.js to create fast, scalable backend APIs. Its lightweight framework simplifies server development. This ensures reliable and efficient performance.',
        image: exlogo,
    },
    {
        title: 'Java',
        description: 'Java is a powerful, versatile language widely used for building secure and scalable applications. Its cross-platform capabilities make it ideal for web, mobile, and enterprise solutions.',
        image: javalogo,
    },
    {
        title: 'PHP',
        description: 'We use PHP to build reliable and dynamic web applications. Its versatility allows easy integration with databases and servers. This ensures smooth and efficient website performance.',
        image: phplogo,
    },
    {
        title: 'C#',
        description: 'C# is a versatile language by Microsoft used to build powerful apps for Windows, web, and cloud. It offers simplicity and performance for scalable solutions.',
        image: cSharplogo,
    },
    {
        title: 'Next.js',
        description: 'We use Next.js to build fast, SEO-friendly, and scalable web applications. It offers server-side rendering and optimized performance out of the box. This ensures a smooth, modern experience for all users.',
        image: nextlogo,
    }
];

// Main TechCards component
export default function WebDevTechCards() {
    return (
        <section id="webtechcards" className="tech-cards-section">
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
