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
    "Next.js",
    "Supabase",
    "Firebase",
    "Google Cloud",
    "API Rest",
    "Figma",
    "SaSS",
    "Flutter",
    "Kotlin",
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          variableWidth: true
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
