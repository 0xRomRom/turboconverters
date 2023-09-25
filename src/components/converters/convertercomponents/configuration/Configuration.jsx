import stl from "./Configuration.module.css";
import dropdown from "../../../../assets/Dropdownarrow.svg";

const Configuration = (props) => {
  const handleTypeSwitch = () => {
    props.setFileType(/* Insert logic*/);
  };

  return (
    <div className={stl.configurebox}>
      <span className={stl.type}>Image</span>
      <div className={stl.inputs}>
        <span className={stl.convert}>Convert</span>
        <span className={stl.to}>To</span>
        <span className={stl.input1}>
          PNG{" "}
          <img src={dropdown} alt="Dropdown arrow" className={stl.dropdown} />
        </span>
      </div>
    </div>
  );
};
export default Configuration;
