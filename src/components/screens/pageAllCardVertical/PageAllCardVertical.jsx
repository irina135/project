import CardsWrap from "../../ui/cards/CardsWrap";
import Filter from "../../ui/banner/Filter";
import { banner } from "../../../mocks/banner/data.base.banner";
import BannerBtn from "../../ui/banner/BannerBtn";

const pageAllCardVertical = "pageAllCardVertical";
const pageAllCardVerticalWrap = "pageAllCardVerticalWrap";

const PageAllCardVertical = () => {
  return (
    <div>
      <div className="flex justify-between items-center max-w-[88%] h-[50px] rounded-[40px] mx-auto pl-[21px] pr-[4px] tablet:hidden bg-white mb-[30px] shadow-[0_20px_45px_rgba(46,58,70,0.26)]">
        <Filter
          filterImg={banner[0].filterImg}
          filterTitle={banner[0].filterTitle}
          filterPlaceholder={banner[0].filterPlaceholder}
        />
        <BannerBtn />
      </div>
      <CardsWrap
        constSwitchCard={pageAllCardVertical}
        pageAllCardVertical={pageAllCardVertical}
        constSwitchCardWrap={pageAllCardVerticalWrap}
      />
    </div>
  );
};
export default PageAllCardVertical;
