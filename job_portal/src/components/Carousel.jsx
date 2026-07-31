import { useState, useRef } from "react";

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPosition = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startPosition.current = position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const distance = e.clientX - startX.current;

    setPosition(startPosition.current + distance);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="overflow-hidden w-full border p-4 select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="flex gap-4"
        onMouseDown={handleMouseDown}
        style={{
          transform: `translateX(${position}px)`,
          cursor: isDragging.current ? "grabbing" : "grab",
        }}
      >
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div
            key={item}
            className="w-72 h-52 shrink-0 bg-purple-500 text-white text-4xl flex items-center justify-center rounded-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;