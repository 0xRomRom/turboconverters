import stl from "./ConverterComponents.module.css";
import Configuration from "./configuration/Configuration";
import UploadBox from "./uploadbox/UploadBox";

const ConverterComponents = () => {
  return (
    <div className={stl.converterbox}>
      <Configuration />
      <UploadBox />
    </div>
  );
};

export default ConverterComponents;
