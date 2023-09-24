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
    if (isDraggingOver) return;
    setIsDraggingOver(false);
  };

  return (
    <div
      className={stl.convertcontainer}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
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
