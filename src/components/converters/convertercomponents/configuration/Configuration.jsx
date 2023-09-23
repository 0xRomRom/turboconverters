import stl from "./Configuration.module.css";

const Configuration = () => {
  return (
    <div className={stl.configurebox}>
      <span className={stl.type}>Image</span>
      <div className={stl.inputs}>
        <span className={stl.convert}>Convert</span>
        <span className={stl.input1}>JPG</span>
        <span className={stl.to}>To</span>
        <span className={stl.input2}>PNG</span>
      </div>
    </div>
  );
};
export default Configuration;
