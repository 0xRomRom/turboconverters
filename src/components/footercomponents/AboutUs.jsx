import stl from "./AboutUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Logo.jpg";

const AboutUs = (props) => {
  return (
    <div className={stl.wrapper}>
      <div className={stl.modal}>
        <div className={stl.closewrapper}>
          <FontAwesomeIcon
            icon={faXmark}
            className={stl.close}
            onClick={props.closeAboutUs}
          />
        </div>
        <img src={logo} className={stl.sitelogo} alt="Turbo Converters" />
        <p className={stl.aboutusTxt}>
          We're a group of software developers aiming to improve the file
          conversion experience.
          <br />
          <br />
          Difficult to navigate user interfaces along with conversion limits
          typically provide a bad user experience.
          <br />
          <br />
          Turbo Converters provides an intuitive application to waste no further
          time converting your files!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
