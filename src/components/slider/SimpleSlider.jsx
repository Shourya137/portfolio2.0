import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// WIP
const SimpleSlider = ({ items, className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    // className,
    // accessibility: true,
    // dots: true,
    // infinite: true,
    // arrows: false,
    // slidesToShow: 7,
    // speed: 500,
    // slidesToScroll: 7,
    // swipeToSlide: true,
    // centerMode: true,
    // centerPadding: '60px',
    // responsive: [
    //  {
    //    breakpoint: 2,
    //    settings: 'unslick',
    //  },
    //  {
    //    breakpoint: 1024,
    //    settings: { slidesToShow: 7, slidesToScroll: 7 },
    //  },
    // ],
  };
  return (
    <Slider {...settings}>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>111</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>222</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>333</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>444</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>555</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>666</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>777</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>888</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>999</h1></div>
      <div style={{ backgroundColor: '#e3e2a1', padding: '10px' }}><h1>000</h1></div>
    </Slider>
  );
};

SimpleSlider.propTypes = {};
SimpleSlider.defaultProps = {};

export default SimpleSlider;
