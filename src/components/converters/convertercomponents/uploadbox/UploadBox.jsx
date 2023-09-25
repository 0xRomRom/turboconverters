import { compress, compressAccurately } from "image-conversion";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import stl from "./UploadBox.module.css";
import logo from "../../../../assets/Fileplus.svg";
import plus from "../../../../assets/Plus.svg";
import { upload } from "@testing-library/user-event/dist/upload";

const UploadBox = (props) => {
  const handleClickDefault = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    props.isDragging(false);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      let newFiles = [];
      acceptedFiles.forEach((file) => {
        const newFile = {
          file,
          randomNum: Math.random(),
        };
        newFiles.push(newFile);
      });

      props.setUploaded((files) => [...files, ...newFiles]);
      props.isDragging(false);
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
