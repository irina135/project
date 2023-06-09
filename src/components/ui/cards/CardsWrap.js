import cardListVertical from "../../../mocks/cardVertical/data.base.cardVertical";
import cardListHorizontal from "../../../mocks/cardHorizontal/data.base.cardHorizontal";
import CardItem from "./Cards";

function CardsWrap(props) {
  let cardList = 0;
  let a = props.constSwitchCardWrap;

  if (props.pageHomeCardVertical || props.pageAllCardVertical) {
    cardList = cardListVertical;
  } else {
    cardList = cardListHorizontal;
  }
  const cardListHomeVertical = [cardListVertical[0], cardListVertical[1]];

  const newCard = cardList.map((number, index) => (
    <CardItem
      key={index}
      typeOfProperty={number.typeOfProperty}
      city={number.city}
      name={number.name}
      square={number.square}
      cardImg={number.cardImg}
      cardImgMobile={number.cardImgMobile}
      area={number.area}
      bedrooms={number.bedrooms}
      bathrooms={number.bathrooms}
      plot={number.plot}
      furnished={number.furnished}
      CCTV={number.CCTV}
      terrace={number.terrace}
      price={number.price}
      pageHomeCardVertical={props.pageHomeCardVertical}
      index={index}
      pageAllCardVertical={props.pageAllCardVertical}
      constSwitchCard={props.constSwitchCard}
    />
  ));

  const newCardHomeVertical = cardListHomeVertical.map((number, index) => (
    <CardItem
      key={index}
      typeOfProperty={number.typeOfProperty}
      city={number.city}
      name={number.name}
      square={number.square}
      cardImg={number.cardImg}
      cardImgMobile={number.cardImgMobile}
      area={number.area}
      bedrooms={number.bedrooms}
      bathrooms={number.bathrooms}
      plot={number.plot}
      furnished={number.furnished}
      CCTV={number.CCTV}
      terrace={number.terrace}
      price={number.price}
      pageHomeCardVertical={props.pageHomeCardVertical}
      index={index}
      pageAllCardVertical={props.pageAllCardVertical}
      constSwitchCard={props.constSwitchCard}
    />
  ));

  switch (a) {
    case "pageAllCardVerticalWrap":
      return (
        <div className="tablet:flex tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto">
          {newCard}
        </div>
      );
    case "pageHomeCardVerticalWrap":
      return (
        <div className="flex tablet:justify-between tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] overflow-hidden mx-auto desktop:mb-[142px] laptop:mb-[100px] tablet:mb-[120px] mb-vvv5">
          {newCardHomeVertical}
        </div>
      );
    case "pageHomeCardHorizontalWrap":
      return (
        <div className=" laptop:flex laptop:justify-between truncate laptop:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto desktop:mb-[118px] laptop:mb-[98px] tablet:mb-[140px] mb-[65px]">
          {newCard}
        </div>
      );
    case "pageAllCardHorizontalWrap":
      return <div>{newCard}</div>;
  }
}
export default CardsWrap;
