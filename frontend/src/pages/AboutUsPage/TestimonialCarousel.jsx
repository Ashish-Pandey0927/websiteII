import React, { useState , useEffect } from 'react';
import './TestimonialCarousel.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function TestimonialCarousel() {
  const [pageIndex, setPageIndex] = useState(0);
  /*Commented out API integration for future reference*/
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://estonsoft.com/new.php/testimonials", {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJhZTdhMzBlMzJjODMyOTQ4IiwiZW1haWwiOiJhZG1pbkBlc3RvbnNvZnQuY29tIiwiaWF0IjoxNzU2ODk3NzgyLCJleHAiOjE3NTc1MDI1ODJ9.tcO1pVIwwTx6C75ekyQx2DylH7VMOMpe6Tw3BV1lwLw",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch testimonials");
      }

      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchTestimonials();
}, []);


  const paginated = testimonials.slice(pageIndex * 2, pageIndex * 2 + 2);
  const totalPages = Math.ceil(testimonials.length / 2);

 /* if (loading) {
    return <div className="testimonial-wrapper"><p>Loading testimonials...</p></div>;
  }*/

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-header">
        <h2>Hear from our happy user</h2>
        <p>Real stories from satisfied customers who've experienced the impact of our service.</p>
      </div>
      <div className="testimonial-grid">
        {paginated.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-user">
              <img 
                src={t.image || 'example.png'} 
                alt={t.name} 
                className="testimonial-img" 
              />
              <div>
                <h4>{t.name}</h4>
                <p>{t.designation}</p>
              </div>
            </div>
            <p className="testimonial-text">{t.content}</p>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        <button
          className="arrow left-arrow"
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 0}
        >
         <IoIosArrowBack />
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPageIndex(idx)}
            className={`dot ${pageIndex === idx ? 'active' : ''}`}
          />
        ))}

        <button
          className="arrow right-arrow"
          onClick={() => setPageIndex((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={pageIndex === totalPages - 1}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
