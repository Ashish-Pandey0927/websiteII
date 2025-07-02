import React, { useState } from "react";
import "./AboutUsFAQ.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "Is the AI available 24/7 ?",
        answer:
            "Yes, our AI is available 24/7 to assist you with your queries and support needs.",
    },
    {
        question: "How does the AI chatbot work?",
        answer:
            "Our AI chatbot uses advanced natural language processing to understand and respond to your questions.",
    },
    {
        question: "How accurate is the AI’s understanding of my questions?",
        answer:
            "The AI is highly accurate for common queries. It continuously learns and improves with usage.",
    },
    {
        question: "Can the AI integrate with other platforms or tools?",
        answer:
            "Yes, the AI can integrate with a variety of third-party platforms via APIs.",
    },
    {
        question: "What happens if the AI doesn’t understand my query?",
        answer:
            "If the AI can't understand your question, it will suggest contacting support or rephrasing the query.",
    },
];

const AboutUsFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="aboutusfaq-wrapper">
            <div className="faq-left">
                <h2 className="faq-heading">Get the answer you need</h2>
                <p className="faq-subtext">
                    Our FAQs cover everything from setup to troubleshooting. Find the
                    information you need here.
                </p>
                <div className="faq-card">
                    <h3>Have more question?</h3>
                    <p>
                        We’re here to help! Find answers or reach out to our team for
                        assistance.
                    </p>
                    <Link to="/contact#form">
                    <button className="faq-contact-button">Contact us</button>
                    </Link>
                </div>
            </div>

            <div className="faq-right">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-icon">
                                {openIndex === index ? (
                                    <CiSquareMinus size={22} />
                                ) : (
                                    <CiSquarePlus size={22} />
                                )}
                            </span>
                        </div>
                        <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                            {faq.answer}
                        </div>
                        <hr className="faq-divider" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUsFAQ;
