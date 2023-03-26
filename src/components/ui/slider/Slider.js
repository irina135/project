import React, { Component } from "react";
import Slider from "react-slick";
import sliderImg1 from "../../../assets/imgs/slider/slider-img1.png"
import sliderImg2 from "../../../assets/imgs/slider/slider-img2.png"
import sliderImg3 from "../../../assets/imgs/slider/slider-img3.png"
import sliderImg4 from "../../../assets/imgs/slider/slider-img4.png"
import sliderImg5 from "../../../assets/imgs/slider/slider-img5.png"
import sliderImg6 from "../../../assets/imgs/slider/slider-img6.png"

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
        loop: true,
      dots: true,
      infinite: true,
      slidesToShow: 6.77,
      slidesToScroll: 1,
      adaptiveHeight: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        )
    }
}
    return (
      
        <Slider {...settings}>
          <div className="widthSliderItem">
            <img src={sliderImg1} alt="img"/>
            <p>1</p>
          </div>
          <div className="widthSliderItem">
            
            <img src={sliderImg2} alt="img"/>
            <p>2</p>
          </div>
          <div className="widthSliderItem]">
           
          <img src={sliderImg3} alt="img"/>
          <p>3</p>
          </div>
          <div className="widthSliderItem">
          <img src={sliderImg4} alt="img"/>
          <p>4</p>
          </div>
          <div className="widthSliderItem">
          <img src={sliderImg1} alt="img"/>
          <p>5</p>
          </div>
          <div className="widthSliderItem">
          <img src={sliderImg2} alt="img"/>
          <p>6</p>
          </div>
          <div className="widthSliderItem">
          <img src={sliderImg2} alt="img"/>
          <p>7</p>
          </div>
        </Slider>
     
    );
  }
}
