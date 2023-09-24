import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import stl from "./UploadBox.module.css";
import logo from "../../../../assets/Fileplus.svg";
import plus from "../../../../assets/Plus.svg";

const UploadBox = (props) => {
  const handleClickDefault = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    props.isDragging(false);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      props.setUploaded((files) => [...files, ...acceptedFiles]);

      props.isDragging(false);

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
    },
    [props]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      {props.dragging && (
        <div
          className={stl.largedropbox}
          {...getRootProps()}
          onDragLeave={handleDragLeave}
        >
          <span className={stl.filedrop}>
            <img src={plus} alt="Plus Icon" className={stl.plusicon} /> Drop
            Files
          </span>
        </div>
      )}

      <div className={stl.uploadbox} onClick={handleClickDefault}>
        <button className={stl.uploadbtn} {...getRootProps()}>
          <img src={logo} alt="Plus logo" className={stl.plus} /> Choose Files
        </button>
        <input {...getInputProps()} />
        <span className={stl.dragdrop}>Drag & Drop</span>
      </div>
    </>
  );
};

export default UploadBox;
