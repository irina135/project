//import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
//import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/ layout/Layout';
import Banner from './components/ui/banner/Banner';
import TitleLink from './components/ui/titleLink/TitleLink';
import CardsWrap from './components/ui/cards/CardsWrap'
import {titleLink} from '../src/mocks/titleLink/data.base.titleLink'
import Video from './components/ui/video/Video';
import Info from './components/ui/info/Info';
import Search from './components/ui/search/Search';
import Footer from './components/ui/footer/Footer';
//import Item from './components/ui/item/Item';
//import AdaptiveHeight from '../src/components/ui/slider/Slider'
import SliderList from '../src/components/ui/slider/Slider'





//import React, { useState } from 'react';

function App() {
  const cartVertical = true
  const displayFlex = true


  //const [itemNumber, setIsShow] = useState(true)
  
  return (

   <Layout>



    <Banner/>
    <TitleLink
      title={titleLink[1].title}
      linkText={titleLink[0].linkText}
      img1= {titleLink[0].img1}
    />
    <SliderList />
    <TitleLink
      title={titleLink[0].title}
      linkText={titleLink[0].linkText}
      img1= {titleLink[0].img1}
    />
    <CardsWrap
    cartVertical={cartVertical}
    displayFlex = {displayFlex}
    //itemNumber= {itemNumber}
    />
    <Video />
    <TitleLink
      title={titleLink[2].title}
      linkText={titleLink[0].linkText}
      img1= {titleLink[0].img1}
    />
    <CardsWrap
    />
    <Info />
    <Search />
    
   

    <Footer />
    <div className="App">
    </div>
  </Layout>
  );
}

export default App;
