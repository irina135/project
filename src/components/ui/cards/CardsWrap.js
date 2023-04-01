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
           <div className="flex tablet:justify-between tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] overflow-hidden slick-list mx-auto desktop:mb-[142px] laptop:mb-[100px] tablet:mb-[120px] mb-5">
            <div className='flex tablet:justify-between'>
            {newCard}
            </div>
              
           </div>
           )
        }
        return (
          <div className="laptop:flex laptop:justify-between truncate laptop:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto desktop:mb-[118px] laptop:mb-[98px] tablet:mb-[140px] mb-[65px]">
              {newCard}
           </div>
        )
}
export default CardsWrap