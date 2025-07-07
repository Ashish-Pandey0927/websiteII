import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import CalendlyModal from "./CalendlyModal"; // adjust path if needed
import "./ScrollToTop.css"; // import the CSS file

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isCalendlyOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isCalendlyOpen]);

  return (
    <>
      <div className="scroll-to-top-container">
        {!isCalendlyOpen && (
          <div className="button-group">
            <button className="schedule-btn" onClick={() => setIsCalendlyOpen(true)}>
              Schedule a meeting
            </button>
            {isVisible && (
              <button className="scroll-btn" onClick={scrollToTop}>
                <KeyboardDoubleArrowUpIcon />
              </button>
            )}
          </div>
        )}
      </div>
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
}
