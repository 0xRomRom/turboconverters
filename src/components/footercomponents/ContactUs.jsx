import stl from "./ContactUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowDown,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Emailbanner.png";
import { useState } from "react";

const ContactUs = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("turboconverters@gmail.com");
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 500);
  };

  return (
    <div className={stl.wrapper}>
      <div className={stl.modal}>
        <div className={stl.closewrapper}>
          <FontAwesomeIcon
            icon={faXmark}
            className={stl.close}
            onClick={props.closeContactUs}
          />
        </div>
        <img src={logo} className={stl.sitelogo} alt="Turbo Converters" />
        <p className={stl.aboutusTxt}>
          Reach out to us by email and we'll get back to you asap!
        </p>
        <FontAwesomeIcon icon={faArrowDown} className={stl.arrow} />
        <span className={stl.email}>
          turboconverters@gmail.com{" "}
          <FontAwesomeIcon
            icon={faCopy}
            className={`${stl.copy} ${clicked ? stl.copied : ""}`}
            onClick={handleCopyEmail}
          />
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
