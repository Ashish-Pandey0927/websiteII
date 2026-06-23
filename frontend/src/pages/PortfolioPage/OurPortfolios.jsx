import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import localPortfolioData from '../../data/portfolioData.json';
import FitTheorem from '../../assets/FitTheorem.png';
import FitTheoremAndroidApp from '../../assets/FitTheoremAndroidApp.png';
import FitTheoremiOSApp from '../../assets/FitTheoremiOSApp.jpg';
import NewsPaperWebsite from '../../assets/NewsPaperWebsite.png';
import NewsPaperAndroidApp from '../../assets/NewsPaperAndroidApp.png';
import SrilankanMatrimonyWebsite from '../../assets/SrilankanMatrimonyWebsite.png';
import SrilankanMatrimonyWebsiteAndroidApp from '../../assets/SrilankanMatrimonyWebsiteAndroidApp.png';
import MunichTravelAndroidApp from '../../assets/MunichTravelAndroidApp.png';
import MunichTraveliOSApp from '../../assets/MunichTraveliOSApp.png';
import './OurPortfolios.css';

const localImageMap = {
  "FitTheorem.png": FitTheorem,
  "FitTheoremAndroidApp.png": FitTheoremAndroidApp,
  "FitTheoremiOSApp.jpg": FitTheoremiOSApp,
  "NewsPaperWebsite.png": NewsPaperWebsite,
  "NewsPaperAndroidApp.png": NewsPaperAndroidApp,
  "SrilankanMatrimonyWebsite.png": SrilankanMatrimonyWebsite,
  "SrilankanMatrimonyWebsiteAndroidApp.png": SrilankanMatrimonyWebsiteAndroidApp,
  "MunichTravelAndroidApp.png": MunichTravelAndroidApp,
  "MunichTraveliOSApp.png": MunichTraveliOSApp,
};

const getPortfolioImage = (image) => {
  if (!image) return "https://via.placeholder.com/600x400";
  if (image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
    return image;
  }
  const filename = image.split('/').pop();
  return localImageMap[filename] || `https://estonsoft.com/uploads/${filename}` || "https://via.placeholder.com/600x400";
};

function OurPortfolios() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

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
        if (data && data.length > 0) {
          // Normalize API data to match category fields if not present
          const normalized = data.map(item => ({
            ...item,
            category: item.category || (item.title.toLowerCase().includes('app') ? 'Mobile App' : 'Web App')
          }));
          setPortfolioData(normalized);
        } else {
          setPortfolioData(localPortfolioData);
        }
      } catch (error) {
        console.error("Error fetching portfolio data, loading local fallback:", error);
        setPortfolioData(localPortfolioData);
      }
    };

    fetchPortfolioData();
  }, []);

  // Filter logic
  const filteredItems = selectedFilter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedFilter);

  const filters = ['All', 'Web App', 'Mobile App'];

  return (
    <section id="ourportfolios" className="ourportfolios-container">
      {/* Title Section */}
      <div className="ourportfolios-title-container">
        <span className="ourportfolios-tagline">
          <span className="tagline-dot"></span> Dynamic Showcase
        </span>
        <h2 className="ourportfolios-heading">Explore Our Projects</h2>
        <p className="ourportfolios-subtext">
          Explore a curated selection of our digital innovations. We design and build secure, fast, and high-performance solutions tailored to client success.
        </p>
      </div>

      {/* Filter Menu Bar */}
      <div className="ourportfolios-filters-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`ourportfolios-filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter === 'All' ? 'All Work' : filter === 'Web App' ? 'Web Applications' : 'Mobile Applications'}
            {selectedFilter === filter && (
              <motion.div
                layoutId="activeFilterBg"
                className="filter-btn-bg-highlight"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Dynamic Grid using Framer Motion */}
      <motion.div layout className="ourportfolios-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="ourportfolios-card"
                key={item.id}
              >
                {/* Image Section */}
                <div className="ourportfolios-image-wrapper">
                  <motion.img
                    src={getPortfolioImage(item.image)}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="ourportfolios-image"
                  />
                  <div className="ourportfolios-card-category-tag">{item.category}</div>
                  <div className="ourportfolios-image-overlay-glow"></div>
                </div>

                {/* Text Content Section */}
                <div className="ourportfolios-content">
                  <h3 className="ourportfolios-card-title">{item.title}</h3>
                  <p className="ourportfolios-card-description">{item.description}</p>
                  
                  <div className="ourportfolios-card-footer">
                    <button
                      className="ourportfolios-details-btn"
                      onClick={() => {
                        if (item.link) {
                          window.open(item.link, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      <span>Launch Project</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ourportfolios-arrow"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="no-portfolio-items">
              <p>No project portfolio records found matching this category.</p>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default OurPortfolios;
