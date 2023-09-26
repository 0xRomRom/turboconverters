import stl from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={stl.footer}>
      <span>Privacy</span>
      <span>Terms</span>
      <span>Donate</span>
    </div>
  );
};

export default Footer;
