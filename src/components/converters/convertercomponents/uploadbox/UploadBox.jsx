import stl from "./UploadBox.module.css";
import logo from "../../../../assets/Fileplus.svg";

const UploadBox = () => {
  return (
    <div className={stl.uploadbox}>
      <button className={stl.uploadbtn}>
        <img src={logo} alt="Plus logo" className={stl.plus} /> Choose Files
      </button>
      <span className={stl.dragdrop}>Drag & Drop</span>
    </div>
  );
};

export default UploadBox;
