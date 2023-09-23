import stl from "./Converters.module.css";
import AdBlockLeft from "./ads/AdBlockLeft";
import AdBlockRight from "./ads/AdBlockRight";

const Converters = () => {
  return (
    <div className={stl.convertcontainer}>
      <AdBlockLeft />
      <AdBlockRight />
    </div>
  );
};

export default Converters;
