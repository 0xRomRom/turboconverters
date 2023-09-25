import stl from "./ResultBox.module.css";
import download from "../../../../assets/Download.svg";
import trashcan from "../../../../assets/Trashcan.svg";
import arrowright from "../../../../assets/Arrowright.svg";
import { useEffect } from "react";

const ResultBox = (props) => {
  useEffect(() => {}, [props.uploaded]);

  const handleClearResults = () => {
    props.setUploaded([]);
  };

  const handleDelete = (e) => {
    const target = +e.target.parentNode.dataset.upload;
    const filteredItems = props.uploaded.filter(
      (item) => item.randomNum !== target
    );
    props.setUploaded(filteredItems);
  };

  const handleDownload = (e) => {
    const target = e.target.parentNode.dataset.upload;

    props.uploaded.forEach((upload) => {
      if (+upload.randomNum === +target) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.toBlob(
            (blob) => {
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download =
                upload.file.name.split(".")[0] + "." + props.fileType.slice(6);
              a.click();
              URL.revokeObjectURL(url);
            },
            props.fileType,
            0.8
          );
        };

        img.src = URL.createObjectURL(upload.file);
      }
    });
  };

  const handleDownloadAll = () => {
    props.uploaded.forEach((upload) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(
          (blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download =
              upload.file.name.split(".")[0] + "." + props.fileType.slice(6);
            a.click();
            URL.revokeObjectURL(url);
          },
          props.fileType,
          0.8
        );
      };

      img.src = URL.createObjectURL(upload.file);
    });
  };

  return (
    <div className={stl.resultbox}>
      <div className={stl.resultitems}>
        {props.uploaded.map((item) => (
          <div className={stl.resultitem} key={Math.random()}>
            <span className={stl.itemsize}>{item.file.name}</span>
            <img
              src={arrowright}
              alt="Arrow right"
              className={stl.arrowright}
            />
            <span className={stl.itemname}>{item.newname}</span>
            <div className={stl.itemctas}>
              <button
                className={`${stl.ctabtn} ${stl.trashbtn}`}
                onClick={handleDelete}
                data-upload={item.randomNum}
              >
                <img
                  src={trashcan}
                  alt="Trashcan"
                  className={stl.trashcanico}
                ></img>
              </button>
              <button
                className={`${stl.ctabtn} ${stl.dlbtn}`}
                onClick={handleDownload}
                data-upload={item.randomNum}
              >
                <img
                  src={download}
                  alt="Download"
                  className={stl.downloadico}
                ></img>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={stl.ctabtns}>
        <button className={stl.download} onClick={handleClearResults}>
          <img src={trashcan} alt="Trashcan" className={stl.trashcanico}></img>
          Clear All
        </button>
        <button className={stl.download} onClick={handleDownloadAll}>
          <img src={download} alt="Download" className={stl.downloadico}></img>{" "}
          Download {props.uploaded?.length > 1 ? "All" : ""}
        </button>
      </div>
    </div>
  );
};

export default ResultBox;
