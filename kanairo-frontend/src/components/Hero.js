import React from 'react'
import '../assets/styles/hero.css'
import HeroCampaign from './HeroCampaign';
import Slider from "react-slick";


function Hero() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    lazyload:"progressive",
  };
  const popping = {
    "title": "BRAND NEW",
    "subtitle": "ART & CULTURE",
    "description": "Jhool Henrique's Grace is at the Heart of Nairobi",
    "image":"img/portfolio/02-large.jpg",
    "cta": {
      "text": "Discover the Summer Concert Lineup",
      "link": "#"
    },
    "sideContent": [
      {
        "title": "THINGS TO DO",
        "subtitle": "ART & CULTURE",
        "description": "Jhool Henrique's Grace is at the Heart of Nairobi",
        "cta": {
          "text": "Discover the Summer Concert Lineup",
          "link": "#"
        }
      },
      {
        "title": "THINGS TO DO",
        "subtitle": "ART & CULTURE",
        "description": "Jhool Henrique's Grace is at the Heart of Nairobi",
        "cta": {
          "text": "Discover the Summer Concert Lineup",
          "link": "#"
        }
      },
      {
        "title": "THINGS TO DO",
        "subtitle": "ART & CULTURE",
        "description": "Jhool Henrique's Grace is at the Heart of Nairobi",
        "cta": {
          "text": "Discover the Summer Concert Lineup",
          "link": "#"
        }
      }
    ]
  }
  return (
    <div>
      <div className='hero-wrapper'>
        <Slider {...settings} autoplay={true}>
          <HeroCampaign events={popping}/>
        </Slider>

      </div>
    </div>
  )
}

// const styles = {
//   heroMsg:{
//     display:'flex',
//     flexDirection:'column',
//     justifyContent:'center'
//   },
//   title:{
//     color:'#FFDC01',
//     marginTop:'40px',
//     fontSize:'32px'
//   },
//   msgP: {
//     color: '#FFFFFF',
//     marginTop:'24px',
//     fontSize:'56px'
//   }
// }

export default Hero