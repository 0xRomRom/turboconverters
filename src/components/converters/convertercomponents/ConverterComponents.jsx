import stl from "./ConverterComponents.module.css";
import Configuration from "./configuration/Configuration";
import UploadBox from "./uploadbox/UploadBox";
import ResultBox from "./resultbox/ResultBox";

const ConverterComponents = () => {
  return (
    <div className={stl.converterbox}>
      <Configuration />
      <UploadBox />
      <ResultBox />
    </div>
  );
};

export default ConverterComponents;
