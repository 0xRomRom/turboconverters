import stl from "./AboutUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
        hi
      </div>
    </div>
  );
};

export default AboutUs;
