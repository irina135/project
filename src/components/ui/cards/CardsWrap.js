import cardListVertical from '../../../mocks/cardVertical/data.base.cardVertical'
import cardListHorizontal from '../../../mocks/cardHorizontal/data.base.cardHorizontal'
import CardItem from './Cards'


function CardsWrap(props) {
    let cardList1 = 0
    //let itemNumber1 = props.itemNumber
    if (props.cartVertical) {
        cardList1 = cardListVertical
    } else {
        cardList1 = cardListHorizontal
    }
    
    const newCard = cardList1.map((number,index) =>
    <CardItem key={index}
    typeOfProperty={number.typeOfProperty}
    city={number.city}
    name={number.name}
    square={number.square}
    cardImg={number.cardImg}
    area={number.area}
    bedrooms={number.bedrooms}
    bathrooms={number.bathrooms}
    plot={number.plot}
    furnished={number.furnished}
    CCTV={number.CCTV}
    terrace={number.terrace}
    price={number.price}
    cartVertical={props.cartVertical}
    index={index}
    />
    
    )
    if (props.displayFlex) {

        return (
           <div className="flex truncate tablet:justify-between tablet:flex-wrap desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] mx-auto laptop:mb-40 tablet:mb-[120px] mb-[60px]">
              {newCard}
           </div>
           )
        }
        return (
          <div className="laptop:flex laptop:justify-between truncate laptop:flex-wrap desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] mx-auto laptop:mb-40 tablet:mb-[140px] mb-[75px]">
              {newCard}
           </div>
        )
}
export default CardsWrap