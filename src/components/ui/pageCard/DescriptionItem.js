import { pageCard } from "../../../mocks/pageCard/data.base.pageCard";

function DescriptionItem(props) {
  return (
    <div className="laptop:w-[100%] tablet:w-[100%] laptop:h-[31%] tablet:h-[31%] border-{#2D2A26} border rounded-3xl laptop:pt-[27px] tablet:pt-[5%] pt-[27px] laptop:pl-[23px] tablet:pl-[4%] pl-[23px]">
      <img
        className="laptop:w-6 w-[18px] desktop:mb-[45px] laptop:mb-[34px] tablet:mb-[10%] mb-[44px]"
        src={props.descriptionImg}
        alt="img"
      />
      <p className="desktop:text-lg text-base">
        {props.count}&ensp;{props.descriptionText}
      </p>
    </div>
  );
}
export default DescriptionItem;
