import { compress, compressAccurately } from "image-conversion";
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

  const handleImageConversion = (input) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    console.log(input.name.split(".")[0]);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = input.name.split(".")[0];
        a.click();
        URL.revokeObjectURL(url);
      }, props.fileType);
    };

    img.src = URL.createObjectURL(input);
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      props.setUploaded((files) => [...files, ...acceptedFiles]);

      props.isDragging(false);

      console.log(acceptedFiles);
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = (event) => {
          // Do whatever you want with the file contents
          const binaryStr = event.target.result;
          // console.log(binaryStr);
          // handleImageConversion(file);
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
