import CardsWrap from "../../ui/cards/CardsWrap";
import Filter from "../../ui/banner/Filter";
import BannerBtn from "../../ui/banner/BannerBtn";
import MapCard from "../../ui/mapCard/MapCard";
import { banner } from "../../../mocks/banner/data.base.banner";
import { pageCardAllHorizontal } from "../../../mocks/pageAllCardHorizontal/data.base.pageAllCardHorizontal";
import { mapCard } from "../../../mocks/mapCard/data.base.mapCard";

const pageAllCardHorizontal = "pageAllCardHorizontal";
const pageAllCardHorizontalWrap = "pageAllCardHorizontalWrap";
const PageAllCardHorizontal = () => {
  return (
    <>
      <hr className="medium:block hidden" />
      <div className="pageAllCardHorizontalHightFull pageAllCardHorizontalMl">
        <div className="flex justify-between items-center max-w-[88%] h-[50px] rounded-[40px] mx-auto mb-[10px] pl-[21px] pr-[4px] tablet:hidden bg-white shadow-[0_20px_45px_rgba(46,58,70,0.26)]">
          <Filter
            filterImg={banner[0].filterImg}
            filterTitle={banner[0].filterTitle}
            filterPlaceholder={banner[0].filterPlaceholder}
          />
          <BannerBtn />
        </div>
        <div className="medium:flex justify-between">
          <div className="medium:order-2 medium:w-[50%] relative overflow-hidden medium:h-auto h-[612px]">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38481.40719605254!2d19.680850096708934!3d44.75830437438703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2srs!4v1675459903242!5m2!1sru!2srs"
            ></iframe>
            <div className="absolute z-10 overflow-hidden medium:w-[239px] w-[345px] h-[213px] bg-white pl-2 pt-2 rounded-3xl medium:top-[80px] bottom-[30px] medium:left-[46%] left-1/2 pageAllCardHorizontalMobileMapPosition">
              <div className="flex w-[900px]">
                <div className="mr-2 relative">
                  <img
                    className="medium:hidden absolute left-[6px] top-[6px]"
                    src={pageCardAllHorizontal[0].imgCloseBtn}
                  />
                  <img
                    className="w-[222px] mb-2"
                    src={pageCardAllHorizontal[0].imgMap1}
                    alt="img"
                  />
                  <p className="text-xs font-normal text-[#2D2A26]">
                    {pageCardAllHorizontal[0].name}&thinsp;
                    {pageCardAllHorizontal[0].distance}&thinsp;
                    {pageCardAllHorizontal[0].textMap}
                  </p>
                  <p className="text-xs font-bold text-[#2D2A26]">
                    &#36;{pageCardAllHorizontal[0].price}
                  </p>
                </div>
                <div className="block medium:hidden">
                  <img
                    className="w-[222px] mb-2"
                    src={pageCardAllHorizontal[0].imgMap1}
                    alt="img"
                  />
                  <p className="text-xs font-normal text-[#2D2A26]">
                    {pageCardAllHorizontal[0].name}&thinsp;
                    {pageCardAllHorizontal[0].distance}&thinsp;
                    {pageCardAllHorizontal[0].textMap}
                  </p>
                  <p className="text-xs font-bold text-[#2D2A26]">
                    &#36;{pageCardAllHorizontal[0].price}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[15%] left-[90%]">
              <MapCard mapCard={mapCard[0].mapPrice} />
            </div>
            <div className="absolute top-[10%] left-[25%]">
              <MapCard mapCard={mapCard[1].mapPrice} />
            </div>
            <div className="absolute top-[15%] left-[30%]">
              <MapCard mapCard={mapCard[2].mapPrice} />
            </div>
            <div className="absolute top-[20%] left-[20%]">
              <MapCard mapCard={mapCard[3].mapPrice} />
            </div>
            <div className="absolute top-[40%] left-[30%]">
              <MapCard mapCard={mapCard[4].mapPrice} />
            </div>
            <div className="absolute top-[70%] left-[30%]">
              <MapCard mapCard={mapCard[5].mapPrice} />
            </div>
            <div className="absolute top-[80%] left-[20%]">
              <MapCard mapCard={mapCard[6].mapPrice} />
            </div>
            <div className="absolute top-[35%] left-[50%]">
              <MapCard mapCard={mapCard[7].mapPrice} />
            </div>
          </div>
          <div className="relative z-20 medium:rounded-none rounded-t-3xl bg-white medium:pl-0 medium:pr-0 pl-3 pr-3 medium:order-1 medium:mt-5 mt-[-20px] medium:w-[47.8%] pageAllCardHorizontalScroll">
            <div className="w-full medium:text-left text-center">
              <div className="inline-block medium:hidden w-12 h-[3px] bg-slate-300"></div>
              <div>
                <button className="mb-5 desktop:text-base laptop:text-sm text-xs laptop:font-normal font-medium leading-normal laptop:text-[#2D2A26]/60 text-[#2D2A26]">
                  {pageCardAllHorizontal[0].textBtn}
                </button>
              </div>
            </div>
            <CardsWrap
              constSwitchCardWrap={pageAllCardHorizontalWrap}
              constSwitchCard={pageAllCardHorizontal}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PageAllCardHorizontal;
