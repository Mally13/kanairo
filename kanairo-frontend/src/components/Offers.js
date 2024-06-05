import React from 'react';
import "../assets/styles/slideshow.css"
import Slider from "react-slick";

const slides = [
  {
    title: 'Monument of Berlin',
    city: 'Berlin, Germany',
    image: require('../assets/images/dest1.png'), // Replace with the image URL
  },
  {
    title: 'Millennium Bridge',
    city: 'London, United Kingdom',
    image: require('../assets/images/dest1.png'), // Replace with the image URL
  },
  {
    title: 'Rialto Bridge',
    city: 'Venice, Italy',
    image: require('../assets/images/dest1.png'), // Replace with the image URL
  },
  {
    title: 'Rialto Bridge',
    city: 'Venice, Italy',
    image: require('../assets/images/dest1.png'), // Replace with the image URL
  },
];

const Slide = ({ title, city, image }) => {
  return (
    <div className="slide">
      <img src={image} alt={title} />
      <div className='caption'>
        <h3>{title}</h3>
        <p>{city}</p>
      </div>
    </div>
  );
};

const Offers = ({name, text, content}) => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container'>
      <div className="slideshow-wrapper">
        <div className='slideshow-header'>
          <div className='slideshow-text offers'>
              <h2>
                  Special Offers
              </h2>
              <div className='text-inner'>
                <p>
                Check out our special offers and discounts                </p>
                <div className='slides-nav'>
                  
                </div>
              </div>
          </div>
        </div>      
        <Slider {...settings} className='destinations'>
          {slides.map((slide, index) => (
            <Slide style={{ marginRight: index !== slides.length - 3 ? '32px' : 0 }} key={slide.title} title={slide.title} city={slide.city} image={slide.image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offers;