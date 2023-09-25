import stl from "./ConverterComponents.module.css";
import Configuration from "./configuration/Configuration";
import UploadBox from "./uploadbox/UploadBox";
import ResultBox from "./resultbox/ResultBox";
import { useState } from "react";

const ConverterComponents = (props) => {
  const [uploaded, setUploaded] = useState([]);
  const [fileType, setFileType] = useState("image/png");

  const updateFileType = (newType) => {
    setFileType(newType);
  };

  return (
    <div className={stl.converterbox}>
      <Configuration
        setFileType={updateFileType}
        fileType={fileType}
        setUploaded={setUploaded}
      />
      <UploadBox
        dragging={props.dragging}
        isDragging={props.isDragging}
        setUploaded={setUploaded}
        uploaded={uploaded}
        fileType={fileType}
      />
      <ResultBox
        uploaded={uploaded}
        setUploaded={setUploaded}
        fileType={fileType}
      />
    </div>
  );
};

export default ConverterComponents;
