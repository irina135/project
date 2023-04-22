import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
//import Layout from "../../ layout/Layout"
import DescriptionItem from "../../ui/pageCard/DescriptionItem";
import ShowMore from "../../ui/pageCard/ShowMore";
import Profile from "../../ui/pageCard/Profile";
import DetailItem from "../../ui/pageCard/DetailsItem";
import Footer from "../../ui/footer/Footer";
import ShowPhotos from "../../ui/pageCard/ShowPhotos";
import { pageCard } from "../../../mocks/pageCard/data.base.pageCard";
import { description } from "../../../mocks/pageCard/data.base.pageCard";
import { details } from "../../../mocks/pageCard/data.base.pageCard";

const PageCard = () => {
  const params = useParams();
  const prodId = params.id;
  const navigate = useNavigate();
  const descriptionList1 = description[prodId - 1];
  const newDescriptionList = descriptionList1.map((number) => (
    <DescriptionItem
      key={number}
      name={number.name}
      descriptionImg={number.descriptionImg}
      descriptionText={number.descriptionText}
      count={number.count}
    />
  ));
  const details1 = details[prodId - 1];
  const newDetails = details1.map((number) => (
    <DetailItem
      key={number}
      detailsImg={number.detailsImg}
      detailsText={number.detailsText}
    />
  ));

  return (
    <>
      <hr className="desktop:mb-9 tablet:mb-7 mb-5" />
      <div className="desktop:w-[91.6%] desktop:max-w-[1760px]  laptop:max-w-[94%] max-w-[89%] mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-wrap tablet:flex-nowrap tablet:justify-between tablet:items-center w-[100%] tablet:mb-[45px]">
            <div className="desktop:w-[63%] laptop:w-[64.5%] tablet:w-[50%] mb-4">
              <h1 className="laptop:w-[auto] w-[83%] desktop:mb-2 desktop:text-[42px] medium:text-4xl text-2xl font-bold tracking-wide text-[#2D2A26]">
                {pageCard[prodId - 1].title}
              </h1>
              <p className="desktop:text-lg laptop:text-base text-sm text-{45, 42, 38, 0.6} underline">
                {pageCard[prodId - 1].city}
              </p>
            </div>
            <div className="tablet:flex-col tablet:items-end flex items-center laptop:mb-[0] mb-5">
              <p className="desktop:text-4xl laptop:text-[28px] text-xl font-bold text-[#2D2A26]">
                &#36; {pageCard[prodId - 1].price}&ensp;
              </p>
              <p className="desktop:text-lg laptop:text-base text-xs font-medium text-[#2D2A26]">
                {pageCard[prodId - 1].commissionText}{" "}
                {pageCard[prodId - 1].commission}&#37;
              </p>
            </div>
            <div className="flex w-[100%] tablet:w-[10%] tablet:justify-end justify-between tablet:order-none order-first tablet:mt-[0] mt-[-15px] laptop:-mb-[0] mb-[23px]">
              <img
                className="tablet:hidden ml-[5px]"
                src={pageCard[prodId - 1].pageCardArrow}
                alt="img"
              />
              <div className="flex">
                <div className="desktop:w-[88px] laptop:w-[60px] desktop:h-[88px] laptop:h-[60px] w-12 h-12 laptop:mr-5 mr-2.5 desktop:pl-[30px] laptop:pl-5 pl-[15px] pt-[15px] desktop:pt-[30px] laptop:pt-5 bg-[#EFEFEF] rounded-[18px]">
                  <img
                    className="desktop:w-[26px] laptop:w-5 w-4 desktop:h-[26px] laptop:h-5 h-4"
                    src={pageCard[prodId - 1].reviewImg}
                    alt="img"
                  />
                </div>
                <div className="desktop:w-[88px] laptop:w-[60px] desktop:h-[88px] laptop:h-[60px] w-12 h-12 desktop:pl-[30px] laptop:pl-5 pl-[15px] desktop:pt-[30px] laptop:pt-5 pt-[15px] bg-[#EFEFEF] rounded-[18px]">
                  <img
                    className="desktop:w-[26px] laptop:w-5 w-4 desktop:h-[26px] laptop:h-5 h-4"
                    src={pageCard[prodId - 1].socialImg}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-wrap flex tablet:justify-between">
          <div className="relative laptop:w-[61.4%] tablet:w-[60%]">
            <img src={pageCard[prodId - 1].pageCardImgMain} alt="img" />
            <div className="absolute tablet:right-[24px] right-[12px] tablet:bottom-[24px] bottom-[12px]">
              <ShowPhotos
                showPhotosImg={pageCard[0].showPhotosImg}
                showPhotosText={pageCard[0].showPhotosText}
              />
            </div>
          </div>

          <div className="tablet:flex-col flex justify-between tablet:order-none order-first laptop:w-[18.3%] tablet:w-[17.9%] tablet:mb-0 mb-2.5 w-full">
            <img
              className="w-[48.3%] tablet:w-[100%] laptop:h-[auto] medium:h-[48%] h-[auto]"
              src={pageCard[prodId - 1].pageCardImg1}
              alt="img"
            />
            <img
              className="w-[48.3%] tablet:w-[100%] laptop:h-[auto] medium:h-[48%] h-[auto]"
              src={pageCard[prodId - 1].pageCardImg2}
              alt="img"
            />
          </div>
          <div className="tablet:flex tablet:flex-col justify-between tablet:w-[17.9%] hidden">
            {newDescriptionList}
          </div>
        </div>

        <div className="tablet:flex tablet:justify-between desktop:mt-[68px] tablet:mt-[60px] mt-10 tablet:mb-3">
          <div className="laptop:w-[48%] tablet:w-[58%] tablet:pr-3">
            <div className="desktop:mb-3 tablet:mb-3.5 desktop:h-[199px] h-[104px] overflow-clip desktop:mb-0 mb-1">
              <p className="w-full desktop:leading-[160%] leading-relaxed color-[#2D2A26] desktop:text-2xl tablet:text-lg text-base">
                {pageCard[prodId - 1].text}
              </p>
            </div>
            <ShowMore
              textBtn={pageCard[prodId - 1].textBtn1}
              arrow={pageCard[prodId - 1].arrow}
            />
            <p className="mt-[60px] mb-[30px] desktop:text-3xl text-2xl font-semibold">
              {pageCard[prodId - 1].detailsTitle}
            </p>
            <div className="flex flex-col desktop:flex desktop:w-[600px] medium:flex-wrap w-full medium:h-[310px] tablet:h-auto h-[230px] overflow-hidden tablet:mb-0 mb-[22px]">
              {newDetails}
            </div>
            <div className="tablet:hidden">
              <ShowMore
                textBtn={pageCard[prodId - 1].textBtn2}
                arrow={pageCard[prodId - 1].arrow}
              />
            </div>
          </div>
          <div className="tablet:w-[47.5%] medium:w-[37.5%] tablet:mt-0 mt-[60px]">
            <Profile />
          </div>
        </div>
        <div>
          <iframe
            className="w-full tablet:h-[480px] h-[320px] rounded-3xl mb-[60px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38481.40719605254!2d19.680850096708934!3d44.75830437438703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2srs!4v1675459903242!5m2!1sru!2srs"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PageCard;
