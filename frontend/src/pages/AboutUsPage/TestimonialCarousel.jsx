import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';
import testuser1 from '../../assets/testuser1.png';
import testuser2 from '../../assets/testuser1.png';

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://admin.estonsoft.com/testimonials/", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYnNpdGVAZW1haWwuY29tIn0.0V7rd-KcWrX1_Ax1LetjLIXXXQ-ClNzN9Fgddzc9qGs",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        const data = await response.json();
        console.log("testimonialData",data);

        // Optional: assign default image if missing
        const withImages = data.map((item, idx) => ({
          ...item,
          image: item.image || (idx % 2 === 0 ? testuser1 : testuser2),
        }));

        setTestimonials(withImages);
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

  if (loading) {
    return <div className="testimonial-wrapper"><p>Loading testimonials...</p></div>;
  }

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-header">
        <h2>Hear from our happy user</h2>
        <p>Real stories from satisfied customer who’ve experienced the impact of our service.</p>
      </div>
      <div className="testimonial-grid">
        {paginated.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-user">
              <img src={t.image} alt={t.name} className="testimonial-img" />
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
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPageIndex(idx)}
            className={`dot ${pageIndex === idx ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
