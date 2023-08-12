import Image from "next/image";
import React, { useState, useEffect } from "react";

interface HeaderCarouselProps {
  images: string[];
  interval?: number;
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full flex flex-row gap-16  items-center justify-center">
      {images.map((image, index) => (
        <img
          width={400}
          height={1000}
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={` ${
            index === currentIndex ? "opacity-90" : "opacity-30"
          } transition-opacity duration-500`}
        />
      ))}
    </div>
  );
};

export default HeaderCarousel;
