import { useEffect } from "react";
import "./CalendlyModal.css"; // import the CSS file

const CalendlyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const scriptId = "calendly-widget-script";

    if (isOpen && !document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="calendly-backdrop">
      <div className="calendly-modal">
        <button className="calendly-close" onClick={onClose}>✖</button>
        <iframe
          src="https://calendly.com/estonsoft-support/first-step-discussion?hide_gdpr_banner=1"
          title="Schedule a Meeting - Calendly"
          className="calendly-iframe"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
          referrerPolicy="no-referrer-when-downgrade"
          allow="fullscreen; autoplay; clipboard-write"
        ></iframe>
      </div>
    </div>
  );
};

export default CalendlyModal;
