import stl from "./Footer.module.css";
import PrivacyPolicy from "../../../footercomponents/PrivacyPolicy";
import { useState } from "react";

const Footer = () => {
  const [privacy, openPrivacy] = useState(false);

  const handleOpenPrivacy = () => {
    openPrivacy(!privacy);
  };

  return (
    <div className={stl.footer}>
      <span className={stl.footspan}>Contact Us</span>
      <span className={stl.footspan}>About Us</span>
      <span className={stl.footspan} onClick={handleOpenPrivacy}>
        Privacy Policy
      </span>
      <span className={stl.footspan}>Terms and Conditions</span>
      <span className={stl.footspan}>Remove Ads</span>
      {privacy && <PrivacyPolicy closePrivacy={openPrivacy} />}
    </div>
  );
};

export default Footer;
