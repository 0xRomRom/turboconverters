import stl from "./Footer.module.css";
import PrivacyPolicy from "../../../footercomponents/PrivacyPolicy";
import Terms from "../../../footercomponents/Terms";
import AboutUs from "../../../footercomponents/AboutUs";
import ContactUs from "../../../footercomponents/ContactUs";
import { useState } from "react";

const Footer = () => {
  const [privacy, openPrivacy] = useState(false);
  const [terms, openTerms] = useState(false);
  const [aboutUs, openAboutus] = useState(false);
  const [contactUs, openContactUs] = useState(false);

  const handleOpenPrivacy = () => {
    openPrivacy(!privacy);
  };

  const handleOpenTerms = () => {
    openTerms(!terms);
  };

  const handleOpenAboutUs = () => {
    openAboutus(!aboutUs);
  };

  const handleOpenContactUs = () => {
    openContactUs(!contactUs);
  };

  return (
    <div className={stl.footer}>
      <span className={stl.footspan} onClick={handleOpenContactUs}>
        Contact Us
      </span>
      <span className={stl.footspan} onClick={handleOpenAboutUs}>
        About Us
      </span>
      <span className={stl.footspan} onClick={handleOpenPrivacy}>
        Privacy Policy
      </span>
      <span className={stl.footspan} onClick={handleOpenTerms}>
        Terms and Conditions
      </span>
      {/* <span className={stl.footspan}>Remove Ads</span> */}
      {privacy && <PrivacyPolicy closePrivacy={openPrivacy} />}
      {terms && <Terms closeTerms={openTerms} />}
      {aboutUs && <AboutUs closeAboutUs={handleOpenAboutUs} />}
      {contactUs && <ContactUs closeContactUs={handleOpenContactUs} />}
    </div>
  );
};

export default Footer;
