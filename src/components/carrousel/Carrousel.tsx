import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carrousel.scss';

function AutoPlay() {
  const sliderRef = useRef<Slider | null>(null);

  const sliderItems = [
    "JavaScript",
    "TypeScript",
    "Vue.JS",
    "React",
    "Angular",
    "API Rest",
    "Figma",
    "SaSS",
    "Flutter",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "Vue.JS",
    "React",
    "Angular",
    "API Rest",
    "Figma",
    "SaSS",
    "Flutter",
    "Kotlin"
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    beforeChange: (next: number) => {
      if (next === sliderItems.length - 1) {
        setTimeout(() => sliderRef.current?.slickGoTo(0), 1000)
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          variableWidth: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className="slider-container__item">
            <h3>{item}</h3>
            <p>✦</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
