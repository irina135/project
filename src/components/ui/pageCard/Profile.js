import ShowMore from "./ShowMore";
import { pageCard } from "../../../mocks/pageCard/data.base.pageCard";

function Profile(props) {
  return (
    <div className="w-full tablet:h-[auto] h-[364px] border-[1px] border-[#2D2A26]-160 rounded-3xl mb-[30px] tablet:pt-10 pt-5 desktop:pl-[55px] tablet:pl-10 pl-5 pr-5 tablet:pb-11 pb-6">
      <div className="flex tablet:justify-start items-center tablet:mb-[28px] mb-[30px]">
        <img
          className="desktop:W-[84px] desktop:h-[84px] desktop:mr-8 mr-5"
          src={pageCard[0].avatarImg}
          alt="img"
        />
        <div>
          <p className="mb-2 desktop:text-2xl text-lg font-medium leading-[120%] color-[#2D2A26] tracking-wide">
            {pageCard[0].profileName}
          </p>
          <p className="desktop:text-lg text-base leading-[120%] text-gray-400 tracking-wide">
            {pageCard[0].profileJob}
          </p>
        </div>
      </div>
      <div className="tablet:flex justify-between desktop:mb-0 tablet:mb-1">
        <div className="tablet:mb-0 mb-1 mr-[20px]">
          <p className="desktop:text-lg text-base tracking-wide leading-[120%] text-[#2D2A26]">
            {pageCard[0].profileMember}&ensp;{pageCard[0].profileMemberDate}
            &ensp;
          </p>
        </div>
        <div className="tablet:pb-0 mb-3">
          <p className="desktop:text-lg text-base tracking-wide leading-[120%] text-[#2D2A26] opacity-60">
            {pageCard[0].profileMemberTerm}
          </p>
        </div>
      </div>
      <p className="desktop:mb-5 mb-[28px] desktop:text-lg leading-[120%] text-[#2D2A26]">
        {pageCard[0].profileLanguage}&ensp;{pageCard[0].profileLanguageName}
      </p>
      <button className="tablet:mb-[60px] mb-[35px] border-[1px] border-[#2D2A26] rounded tablet:py-[20px] py-[13px] tablet:px-[30px] px-[20px] text-base font-semibold leading-[120%] text-[#2D2A26]">
        {pageCard[0].profileBtnText}
      </button>
      <div className="flex justify-between w-full tablet:pt-4 pt-[20px] border-t-[1px] border-[#2D2A26] border-opacity-20">
        <div className="flex items-center ">
          <img
            className="desktop:w-[22px] w-[14px] mr-[11px]"
            src={pageCard[0].profileImg}
            alt="img"
          />
          <p className="desktop:text-lg tablet:text-base text-sm leading-[120%] text-[#2D2A26]">
            {pageCard[0].profileNumber}&ensp;{pageCard[0].profileObjects}
          </p>
        </div>
        <ShowMore textBtn={pageCard[0].seeAll} arrow={pageCard[0].arrow} />
      </div>
    </div>
  );
}
export default Profile;
