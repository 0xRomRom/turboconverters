import stl from "./Converters.module.css";
import AdBlockLeft from "./ads/AdBlockLeft";
import AdBlockRight from "./ads/AdBlockRight";
import ConverterComponents from "./convertercomponents/ConverterComponents";

const Converters = () => {
  return (
    <div className={stl.convertcontainer}>
      <AdBlockLeft />
      <ConverterComponents />
      <AdBlockRight />
    </div>
  );
};

export default Converters;
