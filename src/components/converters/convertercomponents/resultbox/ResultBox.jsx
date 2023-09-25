import stl from "./ResultBox.module.css";
import download from "../../../../assets/Download.svg";
import trashcan from "../../../../assets/Trashcan.svg";

const ResultBox = (props) => {
  const handleClearResults = () => {
    props.setUploaded([]);
  };

  const handleDownload = (e) => {
    const target =
      e.target.parentNode.parentNode.parentNode.firstChild.textContent;

    props.uploaded.forEach((upload) => {
      if (upload.path === target) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        console.log(upload.name.split(".")[0]);
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = upload.name.split(".")[0];
            a.click();
            URL.revokeObjectURL(url);
          }, props.fileType);
        };

        img.src = URL.createObjectURL(upload);
      }
      console.log(upload);
    });
  };

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
              <button
                className={`${stl.ctabtn} ${stl.dlbtn}`}
                onClick={handleDownload}
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
        <button className={stl.download} onClick={handleDownload}>
          <img src={download} alt="Download" className={stl.downloadico}></img>{" "}
          Download All
        </button>
      </div>
    </div>
  );
};

export default ResultBox;
