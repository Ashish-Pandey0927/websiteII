import React, { useState , useEffect } from 'react';
import './OurPortfolios.css';

function OurPortfolios() {

  /* Commented out API integration for future reference*/
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolios`, {
          method: "GET",
          headers: {
            Authorization: import.meta.env.VITE_API_TOKEN,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch portfolio data");

        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchPortfolioData();
  }, []);
  

  return (
    <section id="ourportfolios" className="ourportfolios-container">
      <div className="ourportfolios-title">
        <div className="ourportfolio">Our Portfolio</div>
        <h2 className="ourportfolios-heading">Explore our work</h2>
        <p className="ourportfolios-subtext">
          A showcase of our diverse projects, highlighting innovative solutions tailored to meet each client's unique vision.
        </p>
      </div>

      <div className="ourportfolios-grid">
        {portfolioData.length > 0 ? (
          portfolioData.map((item, index) => (
            <div className="ourportfolios-card" key={item.id || index}>
              <img
                src={item.image|| 'example.png'}
                alt={item.title || "Portfolio Image"}
                className="ourportfolios-image"
              />
              <div className="ourportfolios-content">
                <h3 className="ourportfolios-card-title">{item.title || "Untitled Project"}</h3>
                <button
                  className="ourportfolios-button"
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  View Details <span className="arrow-icon">↗</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No portfolio items available...</p>
        )}
      </div>
    </section>
  );
}

export default OurPortfolios;
