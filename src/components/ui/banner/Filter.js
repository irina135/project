//import {banner} from '../../mocks/banner/data.base.banner'
function Filter(props) {
  return (
    <div className="tablet:flex w-[25%] first:flex hidden tablet:flex pl-2 border-l border-[#2d2a26]/16 first-of-type:border-0 first-of-type:pl-0 ">
      <img
        className="desktop:mr-[16px] medium:mr-[26px] mr-[16px] laptop:w-[14px]"
        src={props.filterImg}
        alt="img"
      />
      <div className="text-left desktop:text-sm text-xs text-black font-semibold leading-3">
        <p>{props.filterTitle}</p>
        <input
          className="font-normal text-{45, 42, 38, 0.6} laptop:leading-none tablet:leading-8"
          placeholder={props.filterPlaceholder}
        ></input>
      </div>
    </div>
  );
}
export default Filter;
