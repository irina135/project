import React, { Component } from "react";
import Slider from "react-slick";

import {sliderList} from '../../../mocks/slider/data.base.slider'

import SliderItem from "./SliderItem";
export default class SliderList extends Component {
  
  render() {
    const map1 = sliderList
    const newMap1 = map1.map((number, index) =>
      <SliderItem key={index}
      sliderImg={number.sliderImg}     
      title={number.title}
      count={number.count}
      text={number.text}
      />
    )
    var settings = {
      loop: true,
      dots: false,
      infinite: true,
      slidesToShow: 6.77,
      slidesToScroll: 1,
      //adaptiveHeight: true,
      /*afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        )
        index = 0
    }*/
}
    return (
      <div>
        <Slider {...settings} className='mb-[160px]'>
          {newMap1}
        </Slider>   
     </div>
    );
  }
}


