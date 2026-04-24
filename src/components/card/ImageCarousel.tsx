import React, { useState, useEffect } from 'react';
import './ImageCarousel.scss';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const isSpecialVerticalImage = (altText: string, index: number, totalLength: number) => {
    const isYerbateo = altText.toLowerCase().includes('yerba');
    return isYerbateo && index === totalLength - 1;
  };

  return (
    <div className={`image-carousel ${className}`}>
      <div
        className="image-carousel__track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.startsWith('http') ? img : `https://www.imghippo.com/i/${img}`}
            alt={`${alt} - ${index + 1}`}
            className={`image-carousel__image ${isSpecialVerticalImage(alt, index, images.length) ? 'image-carousel__image--contain' : ''}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="image-carousel__dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`image-carousel__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
