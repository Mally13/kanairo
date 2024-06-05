import React from 'react';
import "../assets/styles/slideshow.css"
import Slider from "react-slick";

const slides = [
  {
    title: 'Beautiful Italy Let’s Travel',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.',
    image: require('../assets/images/blog1.png'), // Replace with the image URL
  },
  {
    title: 'Beautiful Italy Let’s Travel',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.',
    image: require('../assets/images/blog1.png'), // Replace with the image URL
  },
  {
    title: 'Beautiful Italy Let’s Travel',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.',
    image: require('../assets/images/blog1.png'), // Replace with the image URL
  },
  {
    title: 'Beautiful Italy Let’s Travel',
    content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.',
    image: require('../assets/images/blog1.png'), // Replace with the image URL
  },
];

const Slide = ({ title, content, image }) => {
    console.log(content)

  return (
    <div className="blog">
      <img src={image} alt={title}/>
      <div className='post'>
        <h2>{title}</h2>
        <p>{content}</p>
        <p className='read-more'>Read More <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></p>
      </div>
    </div>
  );
};

const Blog = ({name, text, content}) => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
                  Our Blog
              </h2>
              <div className='text-inner'>
                <p>
                An insight the incredible experience in the world
               </p>
                <div className='slides-nav'>
                  
                </div>
              </div>
          </div>
        </div>      
        <Slider {...settings} className='blog-d'>
          {slides.map((slide, index) => (
            <Slide style={{ marginRight: index !== slides.length - 3 ? '32px' : 0 }} key={slide.title} title={slide.title} content={slide.content} image={slide.image} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;