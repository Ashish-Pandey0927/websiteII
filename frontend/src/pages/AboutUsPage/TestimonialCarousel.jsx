import React, { useState } from 'react';
import './TestimonialCarousel.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import testimonialData from '../../data/testimonialData.json';

// Import testimonial images
import Testimonial1 from '../../assets/auth-01.png';
import Testimonial2 from '../../assets/auth-02.png';
import Testimonial3 from '../../assets/auth-03.png';
import Testimonial4 from '../../assets/auth-04.png';
import Testimonial5 from '../../assets/auth-05.png';
import Testimonial6 from '../../assets/auth-06.png';
import DefaultUser from '../../assets/quotation.png';

// Create an image map
const testimonialImages = {
  'auth-01.png': Testimonial1,
  'auth-02.png': Testimonial2,
  'auth-03.png': Testimonial3,
  'auth-04.png': Testimonial4,
  'auth-05.png': Testimonial5,
  'auth-06.png': Testimonial6,
};

export default function TestimonialCarousel() {
  // Using local JSON data instead of API
  const testimonials = [
  {
    "star": 5,
    "name": "Ahmad A",
    "image": "auth-01.png",
    "content": "Great Job, solve the problem well.Very helpfull to solve the problem and does not give up.",
    "designation": "HOD Mobile",
    "id": "684acfded141691af3541c3d"
  },
  {
    "star": 5,
    "name": "Ahmad A",
    "image": "auth-01.png",
    "content": "Very in good in what Eston offers.Great quality on given timing, Will definetly rehire Eston.Did great job.",
    "designation": "HOD Mobile",
    "id": "684acffd30989323369f64af"
  },
  {
    "star": 5,
    "name": "Sanjay G.",
    "image": "auth-03.png",
    "content": "Excellent knowlegde will recomend and rehire them.",
    "designation": "Director Engineering",
    "id": "684ad04230989323369f64b0"
  },
  {
    "star": 5,
    "name": "Nir S",
    "image": "auth-04.png",
    "content": "Great work, great response time with most resonalable price anywhere.",
    "designation": "Director ",
    "id": "684ad07030989323369f64b1"
  },
  {
    "star": 5,
    "name": "Nir S",
    "image": "auth-04.png",
    "content": "“Great work,great cooperation.Went beyond and above expectation",
    "designation": "Director ",
    "id": "684ad09430989323369f64b2"
  },
  {
    "star": 5,
    "name": "Abbas A.",
    "image": "auth-02.png",
    "content": "“Fair price, excellent results, and quick turnaround.... what more can you ask for? I am so thrilled with this project!!! Thank you so much. Would hire again in a heartbeat!",
    "designation": "Engineering Manager",
    "id": "684ad0c730989323369f64b3"
  },
  {
    "star": 5,
    "name": "Emily Carter",
    "image": "auth-05.png",
    "content": "Adopting this AI chatbot has been one of the best decisions we’ve made. I was blow away by how customizable this chatbot is. We’ve tailored it to align perfectly with our brand voice and goals.",
    "designation": "Marketing Specialist",
    "id": "684ad19830989323369f64b4"
  },
  {
    "star": 5,
    "name": "James Rodriguez",
    "image": "auth-06.png",
    "content": "This chatbot has revolutionized the way we interact with our customers. It’s like having a team member that’s always available, providing quick, accurate, and personalized responses.",
    "designation": "Costumer support manager",
    "id": "684ad1c430989323369f64b5"
  }
]
;
  const [pageIndex, setPageIndex] = useState(0);
  /*Commented out API integration for future reference
  const [testimonials, setTestimonials] = useState([]);
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
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchTestimonials();
}, []);

*/
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
                src={testimonialImages[t.image] || testimonialImages['example.png']} 
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
