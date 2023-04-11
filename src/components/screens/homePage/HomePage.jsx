import React, { useState } from 'react';

import Banner from "../../ui/banner/Banner";
import AdaptiveHeight from "../../ui/slider/Slider";
import TitleLink from "../../ui/titleLink/TitleLink";
import CardsWrap from "../../ui/cards/CardsWrap";
import Video from "../../ui/video/Video";
import Info from "../../ui/info/Info";
import Search from "../../ui/search/Search";
import Footer from "../../ui/footer/Footer";
import {titleLink} from "../../../mocks/titleLink/data.base.titleLink";

/* такие константы лучше выносить за компонент или в отдельный файл,
 что бы они не создавались каждый раз при отрисовке компонента*/
//const cartVertical = true

const pagePathHorizontalCard = true
const pageAllCardVertical = true
const pageAllAreas = true

const pageHomeCardVertical = 'pageHomeCardVertical'
const pageHomeCardHorizontal = 'pageHomeCardHorizontal'
const pageHomeCardVerticalWrap = 'pageHomeCardVerticalWrap'
const pageHomeCardHorizontalWrap = 'pageHomeCardHorizontalWrap'

const HomePage = () => {
  const [itemNumber, setIsShow] = useState(true)

  return (
    <>
      <Banner/>
      <TitleLink
        pageAllAreas={pageAllAreas}
        title={titleLink[0].title}
        linkText={titleLink[0].linkText}
        img1= {titleLink[0].img1}
      />
      <AdaptiveHeight />
      <TitleLink
        pageAllCardVertical={pageAllCardVertical}
        title={titleLink[1].title}
        linkText={titleLink[0].linkText}
        img1= {titleLink[0].img1}
      />
      <CardsWrap
        pageHomeCardVertical={pageHomeCardVertical}
        constSwitchCard={pageHomeCardVertical}
        constSwitchCardWrap={pageHomeCardVerticalWrap}
      />
      <Video />
      <TitleLink
        pagePathHorizontalCard={pagePathHorizontalCard}
        title={titleLink[2].title}
        linkText={titleLink[0].linkText}
        img1= {titleLink[0].img1}
      />
      <CardsWrap 
      constSwitchCardWrap={pageHomeCardHorizontalWrap}
      constSwitchCard={pageHomeCardHorizontal}
      />
      <Info />
      <Search />

      <Footer />
    </>
  );
}

export default HomePage;
