import stl from "./ResultBox.module.css";
import download from "../../../../assets/Download.svg";
import trashcan from "../../../../assets/Trashcan.svg";
import { useEffect } from "react";

const ResultBox = (props) => {
  useEffect(() => {}, [props.uploaded]);
  console.log(props.uploaded);

  return (
    <div className={stl.resultbox}>
      <div className={stl.resultitems}>
        {props.uploaded.map((item) => (
          <div className={stl.resultitem} key={Math.random()}>
            <span className={stl.itemname}>{item.name}</span>
            <span className={stl.itemsize}>
              {(item.size / 1000).toFixed(0)} KB
            </span>
            <div className={stl.itemctas}>
              <button className={`${stl.ctabtn} ${stl.trashbtn}`}>
                <img
                  src={trashcan}
                  alt="Trashcan"
                  className={stl.trashcanico}
                ></img>
              </button>
              <button className={`${stl.ctabtn} ${stl.dlbtn}`}>
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
        <button className={stl.download}>
          <img src={trashcan} alt="Trashcan" className={stl.trashcanico}></img>
          Clear All
        </button>
        <button className={stl.download}>
          <img src={download} alt="Download" className={stl.downloadico}></img>{" "}
          Download All
        </button>
      </div>
    </div>
  );
};

export default ResultBox;
