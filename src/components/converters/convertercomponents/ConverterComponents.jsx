import stl from "./ConverterComponents.module.css";
import Configuration from "./configuration/Configuration";

const ConverterComponents = () => {
  return (
    <div className={stl.converterbox}>
      <Configuration />
    </div>
  );
};

export default ConverterComponents;
