import stl from "./Converters.module.css";
import { useState } from "react";
import AdBlockLeft from "./ads/AdBlockLeft";
import AdBlockRight from "./ads/AdBlockRight";
import ConverterComponents from "./convertercomponents/ConverterComponents";

const Converters = () => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragOver = () => {
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setTimeout(() => {
      setIsDraggingOver(false);
    }, 100);
  };

  return (
    <div className={stl.convertcontainer} onDragOver={handleDragOver}>
      <AdBlockLeft />
      <ConverterComponents
        dragging={isDraggingOver}
        isDragging={setIsDraggingOver}
      />
      <AdBlockRight />
    </div>
  );
};

export default Converters;
