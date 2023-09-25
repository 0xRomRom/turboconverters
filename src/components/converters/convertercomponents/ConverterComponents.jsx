import stl from "./ConverterComponents.module.css";
import Configuration from "./configuration/Configuration";
import UploadBox from "./uploadbox/UploadBox";
import ResultBox from "./resultbox/ResultBox";
import { useState } from "react";

const ConverterComponents = (props) => {
  const [uploaded, setUploaded] = useState([]);
  const [fileType, setFileType] = useState("image/webp");

  return (
    <div className={stl.converterbox}>
      <Configuration setFileType={setFileType} />
      <UploadBox
        dragging={props.dragging}
        isDragging={props.isDragging}
        setUploaded={setUploaded}
      />
      <ResultBox uploaded={uploaded} setUploaded={setUploaded} />
    </div>
  );
};

export default ConverterComponents;
