import React, { useState } from 'react';
import Banner from "../../ui/banner/Banner";
import AdaptiveHeight from "../../ui/slider/Slider";
import TitleLink from "../../ui/titleLink/TitleLink";
import CardsWrap from "../../ui/cards/CardsWrap";
import Video from "../../ui/video/Video";
import Info from "../../ui/info/Info";
import Search from "../../ui/search/Search";
import Item from "../../ui/item/Item";
import Footer from "../../ui/footer/Footer";
import {titleLink} from "../../../mocks/titleLink/data.base.titleLink";

// такие константы лучше выносить за компонент или в отдельный файл,
// что бы они не создавались каждый раз при отрисовке компонента
const cartVertical = true
const displayFlex = true

const HomePage = () => {
  const [itemNumber, setIsShow] = useState(true)

  return (
    <>
      <Banner/>
      <AdaptiveHeight />
      <TitleLink
        title={titleLink[0].title}
        linkText={titleLink[0].linkText}
        img1= {titleLink[0].img1}
      />

      <CardsWrap
        cartVertical={cartVertical}
        displayFlex = {displayFlex}
        itemNumber= {itemNumber}
      />

      <Video />
      <CardsWrap />
      <Info />
      <Search />

      {itemNumber &&
        <Item itemNumber= {itemNumber}/>
      }

      <Footer />
    </>
  );
}

export default HomePage;
