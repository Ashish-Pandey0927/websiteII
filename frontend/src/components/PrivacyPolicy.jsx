import React from "react";
import "./PrivacyPolicy.css";
import SocialIcons from "./SocialIcons";

const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

const Paragraph = ({ children }) => (
  <p className="paragraph">{children}</p>
);

const List = ({ items }) => (
  <ul className="list">
    {items.map((item, idx) => (
      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1 className="main-title">Privacy Policy</h1>

        <Paragraph>
          <strong>EstonSoft&apos;s Policy:</strong> Your privacy is important to us.
          EstonSoft is committed to respecting your privacy while using our website and
          mobile application. This Privacy Policy defines the requirements to ensure
          compliance with applicable data privacy laws and regulations.
        </Paragraph>

        <SectionTitle>1. Definitions</SectionTitle>
        <Paragraph>Below are key terms used in this policy:</Paragraph>
        <List
          items={[
            "<strong>Services:</strong> Refers to the www.EstonSoft.com website and mobile application operated by EstonSoft.",
            "<strong>Personal Data:</strong> Information about a living individual that can identify them, such as name or email.",
            "<strong>Usage Data:</strong> Data collected automatically, like page visit duration.",
            "<strong>Cookies:</strong> Small files stored on your device to track preferences and usage.",
            "<strong>Data Controller:</strong> Entity that determines how personal information is processed. For this Privacy Policy, EstonSoft is the Data Controller.",
            "<strong>Data Processor (or Service Provider):</strong> Third parties processing data on behalf of EstonSoft.",
            "<strong>Data Subject (or User):</strong> Any individual using our Service and subject to data processing.",
          ]}
        />

        <SectionTitle>2. Information Collection and Use</SectionTitle>
        <Paragraph>We collect various types of data to improve our Service, including:</Paragraph>
        <List
          items={[
            "<strong>Personal Data:</strong> Email address, name, phone number, cookies, and usage data.",
            "<strong>Usage Data:</strong> Includes IP address, browser type, pages visited, and diagnostic data.",
            "<strong>Cookies:</strong> Files stored on devices to enhance user experience.",
          ]}
        />

        <SectionTitle>3. Use of Data</SectionTitle>
        <Paragraph>EstonSoft uses collected data for purposes such as:</Paragraph>
        <List
          items={[
            "Providing and maintaining our Service.",
            "Notifying you about changes to our Service.",
            "Monitoring and analyzing Service usage.",
            "Providing personalized features and customer support.",
            "Sending newsletters or marketing content (opt-out available).",
          ]}
        />

        <SectionTitle>4. Legal Basis (GDPR)</SectionTitle>
        <Paragraph>For EEA residents, we process your data based on:</Paragraph>
        <List
          items={[
            "Performance of a contract.",
            "Your explicit consent.",
            "Compliance with legal obligations.",
            "Legitimate business interests.",
          ]}
        />

        <SectionTitle>5. Data Security</SectionTitle>
        <Paragraph>
          We implement reasonable measures to protect your data. However, no method of
          transmission over the Internet is entirely secure.
        </Paragraph>

        <SectionTitle>6. Children&apos;s Privacy</SectionTitle>
        <Paragraph>
          Our services are not intended for children under 18. If you believe your child
          has provided personal information, contact us to remove it.
        </Paragraph>

        <SectionTitle>7. Contact Us</SectionTitle>
        <Paragraph>
          For any legal concerns or questions, email us at:{" "}
          <a href="mailto:support@EstonSoft.com" className="contact-link">
            hr@estonSoft.com
          </a>
        </Paragraph>
      </div>

      <SocialIcons />
    </div>
  );
};

export default PrivacyPolicy;
