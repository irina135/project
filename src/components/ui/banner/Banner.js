import React from 'react';
import {banner} from '../../../mocks/banner/data.base.banner'
import Filter from './Filter'
import BannerBtn from './BannerBtn';





function Banner() {
  const listFilter = banner
  const newListFilter = listFilter.map((number) => 
    <Filter key={number}
    filterImg={number.filterImg}
    filterTitle={number.filterTitle}
    filterPlaceholder={number.filterPlaceholder}
    />
  )
    
     return (
        <div className="desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] desktop:h-[600px] laptop:h-[480px] h-[380px] mx-auto medium:pt-20 pt-[60px] desktop:mb-20 tablet:mb-[60px]  mb-[30px] rounded-3xl text-white banner-bg">
          <h1 className="desktop:w-[600px] medium:w-[460px] w-[245px] mx-auto mb-10 desktop:text-4xl medium:text-[28px] text-xl medium:leading-[120%] leading-6 font-bold text-center">{banner[0].title}</h1>
          <div className="flex justify-between items-center desktop:max-w-[44.8%] medium:max-w-[72%] max-w-[88%] desktop:h-[72px] tablet:h-[64px] h-[50px] rounded-[40px] mx-auto tablet:pl-[35px] pl-[21px] medium:pr-[10px] tablet:pr-[6px] pr-[4px] bg-white">
           {newListFilter}
           <BannerBtn/>
        </div>
    </div>
     )
   }
 export default Banner