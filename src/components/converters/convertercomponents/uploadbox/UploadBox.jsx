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
      let newFiles = [];
      const filetypes = ["png", "jpg", "jpeg", "webp", "bmp", "tiff", "gif"];
      acceptedFiles.forEach((file) => {
        const newName = file.name.split(".")[0] + "." + props.fileType.slice(6);
        const newFile = {
          file,
          randomNum: Math.random(),
          newname: newName,
        };
        console.log(newFile.file.name.split(".")[1]);
        filetypes.forEach((type) => {
          if (type === newFile.file.name.split(".")[1].toLowerCase()) {
            newFiles.push(newFile);
          }
        });
      });

      props.setUploaded((files) => [...files, ...newFiles]);
      props.isDragging(false);
    },
    [props]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/": [] },
  });

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
        <input {...getInputProps()} name="Fileinput" />
        <span className={stl.dragdrop}>Drag & Drop</span>
      </div>
    </>
  );
};

export default UploadBox;
