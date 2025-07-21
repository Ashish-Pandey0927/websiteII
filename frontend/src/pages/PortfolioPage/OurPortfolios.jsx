import React from 'react';
import './OurPortfolios.css';
// import portfolioData from '../../data/portfolioData.json';

// Import portfolio images
import Portfolio1 from '../../assets/FitTheorem.png';
import Portfolio2 from '../../assets/FitTheoremAndroidApp.png';
import Portfolio3 from '../../assets/FitTheoremiOSApp.jpg';
import Portfolio4 from '../../assets/MunichTravelAndroidApp.png';
import Portfolio5 from '../../assets/MunichTraveliOSApp.png';
import Portfolio6 from '../../assets/news1 1.png';
import Portfolio7 from '../../assets/NewsPaperWebsite.png';
import Portfolio8 from '../../assets/SrilankanMatrimonyWebsite.png';
import Portfolio9 from '../../assets/matremonyWhatsApp.png';

// Create an image map
const portfolioImages = {
  'FitTheorem.png': Portfolio1,
  'FitTheoremAndroidApp.png': Portfolio2,
  'FitTheoremiOSApp.png': Portfolio3,
  'MunichTravelAndroidApp.png': Portfolio4,
  'MunichTraveliOSApp.png': Portfolio5,
  'news1 1.png': Portfolio6,
  'NewsPaperWebsite.png': Portfolio7,
  'SrilankanMatrimonyWebsite.png': Portfolio8,
  'matremonyWhatsApp.png': Portfolio9,

};

function OurPortfolios() {
  // Using local JSON data instead of API
  const portfolios = [
  {
    "title": "Fit Theorem",
    "description": "Fit theorem - Results by Design.Training for real people with real goals - whether you’re looking to lose weight, gain strength, tone your body or build muscles, FITTHEOREM has a program for you.",
    "image": "FitTheorem.png",
    "link": "https://fittheorem.com/",
    "id": "684a891c30989323369f64a4"
  },
  {
    "title": "Fit Theorem Android App",
    "description": "A sleek and user-friendly Android application.",
    "image": "FitTheoremAndroidApp.png",
    "link": "https://play.google.com/store/apps/details?id=com.fittheorem&hl=en",
    "id": "684a8964c4d36befc556bafe"
  },
  {
    "title": "Fit Theorem iOS App",
    "description": "A sleek and user-friendly iOS application.",
    "image": "FitTheoremiOSApp.png",
    "link": "https://apps.apple.com/us/app/fittheorem/id1525112049",
    "id": "684a89c7d141691af3541c37"
  },
  {
    "title": "News Paper Website",
    "description": "Prothom Alo is the largest Bangla newspaper from Dhaka (Bangladesh). This is the official app of Prothom Alo English for Android users to provide its readers with news in english on the go.",
    "image": "NewsPaperWebsite.png",
    "link": "https://en.prothomalo.com/",
    "id": "684a8a2430989323369f64a5"
  },
  {
    "title": "News Paper Android App",
    "description": "A sleek and user-friendly Android application.",
    "image": "news1 1.png",
    "link": "https://play.google.com/store/apps/details?id=com.prothomalo.english&hl=en_IN",
    "id": "684a8ac8d141691af3541c38"
  },
  {
    "title": "SrilankanMatrimony Website Android App",
    "description": "A sleek and user-friendly iOS application.",
    "image": "matremonyWhatsApp.png",
    "link": "https://play.google.com/store/apps/details?id=com.srilankanmatrimony",
    "id": "684a982230989323369f64a6"
  },
  {
    "title": "SrilankanMatrimony Website",
    "description": "SrilankanMatrimony is the exclusive and most trusted matrimony service for Sri Lankans across the world to receive Marriage Proposals or Mangala Yojana. You can choose Srilankan bride and groom profiles from major cities in Sri Lanka like Colombo, Gampaha, Kandy, and many others. Thousands of Sri Lankans have successfully founded their life partner here, and you too can find a Perfect Match. 100% Safe and Secure app.",
    "image": "SrilankanMatrimonyWebsite.png",
    "link": "https://www.srilankanmatrimony.com/",
    "id": "684a985ed141691af3541c39"
  },
  {
    "title": "Munich Travel Android App",
    "description": "This Munich guide is our reliable and easy-to-use travel companion. Find directions with detailed offline maps, in-depth travel content, popular attractions and insider tips with this Munich city guide",
    "image": "MunichTravelAndroidApp.png",
    "link": "https://play.google.com/store/apps/details?id=com.ulmon.android.playmunich&hl=en_IN",
    "id": "684a989630989323369f64a7"
  },
  {
    "title": "Munich Travel iOS App",
    "description": "A sleek and user-friendly iOS application.",
    "image": "MunichTraveliOSApp.png",
    "link": "https://apps.apple.com/us/app/munich-travel-guide/id386136029",
    "id": "684a996430989323369f64a8"
  },
  {
    "title": "News Paper Website",
    "description": "Fit theorem - Results by Design.Training for real people with real goals - whether you’re looking to lose weight, gain strength, tone your body or build muscles, FITTHEOREM has a program for you.",
    "image": "NewsPaperWebsite.png",
    "link": "https://en.prothomalo.com/",
    "id": "684aa347d141691af3541c3b"
  }
];

  /* Commented out API integration for future reference
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch("https://admin.estonsoft.com/portfolios/", {
          method: "GET",
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYnNpdGVAZW1haWwuY29tIn0.0V7rd-KcWrX1_Ax1LetjLIXXXQ-ClNzN9Fgddzc9qGs",
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
  */

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
        {portfolios.length > 0 ? (
          portfolios.map((item, index) => (
            <div className="ourportfolios-card" key={item.id || index}>
              <img
                src={portfolioImages[item.image] || portfolioImages['example.png']}
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
