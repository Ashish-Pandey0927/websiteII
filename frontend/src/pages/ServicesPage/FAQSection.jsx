import React, { useState } from "react";
import "./FAQSection.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Is the AI available 24/7?",
    answer:
      "Yes, our AI platform is accessible 24/7, ensuring consistent support, guidance, and interaction at any time—no matter where you are in the world.",
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "The chatbot leverages advanced natural language processing and machine learning models to understand your queries, interpret context, and generate relevant responses in real time.",
  },
  {
    question: "How accurate is the AI’s understanding of my questions?",
    answer:
      "Our AI is trained on a vast dataset and fine-tuned for accuracy, context awareness, and intent recognition. While not perfect, it consistently delivers over 90% accuracy in general queries and continues to improve through feedback and updates.",
  },
  {
    question: "Can the AI integrate with other platforms or tools?",
    answer:
      "Yes, the AI can be integrated with various platforms such as Slack, Microsoft Teams, CRMs, help desks, and custom APIs to seamlessly fit into your existing workflows.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      {/* Left Side */}
      <div className="faq-left">
        <span className="faq-tag">FAQ</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Have a question about our AI? Explore answers to the most common topics below, or reach out to our team directly for anything more specific.
        </p>
        <Link to="/contact#form">
        <button className="faq-button">Contact Us</button>
        </Link>
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
