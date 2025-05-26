import React, { useState } from "react";
import "./FAQSection.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

const faqs = [
  {
    question: "Is the AI available 24/7 ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How accurate is the AI’s understanding of my questions?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Can the AI integrate with other platforms or tools?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <span className="faq-tag">FAQ</span>
        <h2 className="faq-title">Frequently Asked Question</h2>
        <p className="faq-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injec.
        </p>
        <button className="faq-button">Contact Us</button>
      </div>

      <div className="faq-right">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-toggle">
                {openIndex === index ? (
                  <CiSquareMinus size={22} />
                ) : (
                  <CiSquarePlus size={22} />
                )}
              </span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {item.answer}
            </div>
            <hr className="faq-divider" />
          </div>   
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
