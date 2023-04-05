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
      <div>
        <div className='relative desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto desktop:mb-20 tablet:mb-[60px] mb-[30px] rounded-3xl tablet:block hidden'>
          <div className='desktop:h-[600px] laptop:h-[480px] tablet:h-[380px]' >
            <img className='w-[100%] h-[100%]' src={banner[0].bannerBg} alt='img'/>
          </div>
          <div className='absolute top-0 w-[100%] desktop:h-[600px] laptop:h-[480px] tablet:h-[380px] medium:pt-20 pt-[60px] text-white'>
            <h1 className="desktop:w-[600px] medium:w-[460px] w-[250px] mx-auto desktop:mb-[40px] laptop:mb-5 mb-5 desktop:text-4xl medium:text-[28px] text-xl medium:leading-[120%] leading-6 font-bold text-center tracking-wide textHeightBanner">{banner[0].title}</h1>
            <div className="flex justify-between items-center desktop:max-w-[44.8%] laptop:max-w-[62%] medium:max-w-[72%] max-w-[88%] desktop:h-[72px] tablet:h-[64px] h-[50px] rounded-[40px] mx-auto tablet:pl-[35px] pl-[21px] medium:pr-[10px] tablet:pr-[6px] pr-[4px] bg-white">
              {newListFilter}
              <BannerBtn/>
            </div>
          </div>
        </div>

        <div className='relative max-w-[89%] mx-auto mb-[30px] rounded-3xl tablet:hidden block'>
          <div>
            <img className='w-[100%] h-auto' src={banner[0].bannerBgMobile} alt='img'/>
          </div>
          <div className='absolute top-0 w-[100%] pt-[60px] text-white'>
            <h1 className="w-[250px] mx-auto mb-5 text-xl leading-6 font-bold text-center tracking-wide textHeightBanner">{banner[0].title}</h1>
            <div className="flex justify-between items-center max-w-[88%] h-[50px] rounded-[40px] mx-auto pl-[21px] pr-[4px] bg-white">
              {newListFilter}
              <BannerBtn/>
            </div>
          </div>
        </div>
      </div>
     )
   }
 export default Banner