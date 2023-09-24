import stl from "./ConverterComponents.module.css";
import Configuration from "./configuration/Configuration";
import UploadBox from "./uploadbox/UploadBox";
import ResultBox from "./resultbox/ResultBox";

const ConverterComponents = (props) => {
  return (
    <div className={stl.converterbox}>
      <Configuration />
      <UploadBox dragging={props.dragging} isDragging={props.isDragging} />
      <ResultBox />
    </div>
  );
};

export default ConverterComponents;
