import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Layout from './components/ layout/Layout';
import Banner from './components/ui/banner/Banner';
import TitleLink from './components/ui/titleLink/TitleLink';
import CardsWrap from './components/ui/cards/CardsWrap'
import {titleLink} from '../src/mocks/titleLink/data.base.titleLink'
import Video from './components/ui/video/Video';
import Info from './components/ui/info/Info';
import Search from './components/ui/search/Search';
import Footer from './components/ui/footer/Footer';
import Item from './components/ui/item/Item';
import AdaptiveHeight from '../src/components/ui/slider/Slider'





//import React, { useState } from 'react';

function App() {
  const cartVertical = true
  const displayFlex = true


  const [itemNumber, setIsShow] = useState(true)
  
  return (
   <Layout>
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
    <CardsWrap
    />
    <Info />
    <Search />
    
    {itemNumber && <Item
    itemNumber= {itemNumber}
    />}

    <Footer />
    <div className="App">
    </div>
  </Layout>
  );
}

export default App;
