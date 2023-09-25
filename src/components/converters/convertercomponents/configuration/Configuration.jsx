import stl from "./Configuration.module.css";

const Configuration = (props) => {
  const handleTypeSwitch = (e) => {
    props.setFileType(e.target.value);
    props.setUploaded([]);
  };

  return (
    <div className={stl.configurebox}>
      <span className={stl.type}>Image</span>
      <div className={stl.inputs}>
        <span className={stl.convert}>Convert</span>
        <span className={stl.to}>To</span>
        <select className={stl.dropselect} onChange={handleTypeSwitch}>
          <option value="image/png">PNG</option>
          <option value="image/jpeg">JPEG</option>
          <option value="image/bmp">BMP</option>
          <option value="image/webp">WEBP</option>
        </select>
      </div>
    </div>
  );
};
export default Configuration;
