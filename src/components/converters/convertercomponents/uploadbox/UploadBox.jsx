import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import stl from "./UploadBox.module.css";
import logo from "../../../../assets/Fileplus.svg";

const UploadBox = () => {
  const handleClickDefault = (e) => {
    e.preventDefault();
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className={stl.uploadbox}
      {...getRootProps()}
      onClick={handleClickDefault}
    >
      <button className={stl.uploadbtn} {...getRootProps()}>
        <img src={logo} alt="Plus logo" className={stl.plus} /> Choose Files
      </button>
      <input {...getInputProps()} />
      <span className={stl.dragdrop}>Drag & Drop</span>
    </div>
  );
};

export default UploadBox;
