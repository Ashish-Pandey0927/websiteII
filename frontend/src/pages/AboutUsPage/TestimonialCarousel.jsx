import React, { useState , useEffect } from 'react';
import './TestimonialCarousel.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function TestimonialCarousel() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsAnimating, setCardsAnimating] = useState(false);
  /*Commented out API integration for future reference*/
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

 // Entry animation
 useEffect(() => {
   const timer = setTimeout(() => {
     setIsVisible(true);
   }, 300);
   return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/testimonials`, {
        headers: {
          Authorization: import.meta.env.VITE_API_TOKEN,
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

  const handlePageChange = (newIndex) => {
    if (newIndex !== pageIndex && !cardsAnimating) {
      setCardsAnimating(true);
      setPageIndex(newIndex);
      setTimeout(() => setCardsAnimating(false), 600);
    }
  };

 /* if (loading) {
    return <div className="testimonial-wrapper"><p>Loading testimonials...</p></div>;
  }*/

  return (
    <div
      className={`testimonial-wrapper ${isVisible ? 'visible' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(40px)',
        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="testimonial-header">
        <h2 className="testimonial-title">Hear from our happy user</h2>
        <p className="testimonial-subtitle">Real stories from satisfied customers who've experienced the impact of our service.</p>
      </div>
      <div className={`testimonial-grid ${cardsAnimating ? 'animating' : ''}`}>
        {paginated.map((t, i) => (
          <div
            className="testimonial-card"
            key={`${pageIndex}-${i}`}
            style={{
              animationDelay: `${i * 200}ms`
            }}
          >
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
          onClick={() => handlePageChange(Math.max(pageIndex - 1, 0))}
          disabled={pageIndex === 0 || cardsAnimating}
        >
         <IoIosArrowBack />
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx)}
            className={`dot ${pageIndex === idx ? 'active' : ''} ${cardsAnimating ? 'animating' : ''}`}
            disabled={cardsAnimating}
          />
        ))}

        <button
          className="arrow right-arrow"
          onClick={() => handlePageChange(Math.min(pageIndex + 1, totalPages - 1))}
          disabled={pageIndex === totalPages - 1 || cardsAnimating}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
