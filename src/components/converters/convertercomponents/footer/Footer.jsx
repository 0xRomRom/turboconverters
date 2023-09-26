import stl from "./Footer.module.css";
import PrivacyPolicy from "../../../footercomponents/PrivacyPolicy";

const Footer = () => {
  return (
    <div className={stl.footer}>
      <span className={stl.footspan}>Contact Us</span>
      <span className={stl.footspan}>About Us</span>
      <span className={stl.footspan}>Privacy Policy</span>
      <span className={stl.footspan}>Terms and Conditions</span>
      <span className={stl.footspan}>Remove Ads</span>
      <PrivacyPolicy />
    </div>
  );
};

export default Footer;
