import React from 'react'


const slides = [
    {
      image: require('../assets/images/gal1.png'), // Replace with the image URL
    },
    {
      image: require('../assets/images/gal2.png'), // Replace with the image URL
    },
    {
      image: require('../assets/images/gal3.png'), // Replace with the image URL
    },
    {
      image: require('../assets/images/gal4.png'), // Replace with the image URL
    },
  ];
  

const Slide = ({ image }) => {
    return (
      <div className="slide">
        <img src={image} alt=''/>
      </div>
    );
  };

function Gallery() {
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
  )
}

export default Gallery