import cardListVertical from '../../../mocks/cardVertical/data.base.cardVertical'
import cardListHorizontal from '../../../mocks/cardHorizontal/data.base.cardHorizontal'
import CardItem from './Cards'


function CardsWrap(props) {
    let cardList1 = 0
    let a = props.p
   
    if (props.cartVertical || props.pageAllCardVertical) {
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
    cardImgMobile={number.cardImgMobile}
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
    pageAllCardVertical={props.pageAllCardVertical}
    vvv={props.vvv}
    />
    
    )

    switch(a){
        case 'start':
            return (
                <div>switch vvvvv</div>
            );
            
        
        case 'pageAllCardVertical':
            return (
                <div className='tablet:flex tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto'>
                    
                        {newCard}
                </div>);
            
        case 'displayFlex1':
            return (
                <div className="flex tablet:justify-between tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] overflow-hidden mx-auto desktop:mb-[142px] laptop:mb-[100px] tablet:mb-[120px] mb-5">
                 
                 {newCard}
                
                   
                </div>
                )
        case 'cardHorizontal':
            return (
                <div className=" laptop:flex laptop:justify-between truncate laptop:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto desktop:mb-[118px] laptop:mb-[98px] tablet:mb-[140px] mb-[65px]">
                    {newCard}
                 </div>
              )        

    }



    /*if (props.displayFlex) {

        return (
           <div className="flex tablet:justify-between tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] overflow-hidden mx-auto desktop:mb-[142px] laptop:mb-[100px] tablet:mb-[120px] mb-5">
            
            {newCard}
           
              
           </div>
           )
        }

        else {
            if (props.pageAllCardVertical){
                return (
                    <div className='tablet:flex tablet:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto'>
                        
                            {newCard}  
              
                    </div>
                )

            } else {
                return (
                    <div className=" laptop:flex laptop:justify-between truncate laptop:flex-wrap desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto desktop:mb-[118px] laptop:mb-[98px] tablet:mb-[140px] mb-[65px]">
                        {newCard}
                     </div>
                  )
            }
        }*/

    



        
}
export default CardsWrap