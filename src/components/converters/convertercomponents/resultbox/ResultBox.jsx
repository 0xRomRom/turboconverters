import stl from "./ResultBox.module.css";
import download from "../../../../assets/Download.svg";
import trashcan from "../../../../assets/Trashcan.svg";

const ResultBox = () => {
  return (
    <div className={stl.resultbox}>
      <div className={stl.resultitems}>
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
        <div className={stl.resultitem}>
          <span className={stl.itemname}>Doge.jpg</span>
          <span className={stl.itemsize}>774 kb</span>
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
