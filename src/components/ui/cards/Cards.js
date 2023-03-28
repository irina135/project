
import { Link } from 'react-router-dom';

function CardItem(props) {
    //const navigate = useNavigate()
    
    if (props.cartVertical){
        return (
           /* <button onClick={() => {navigate('/pageCard') }} className="relative tablet:w-[48.8%] w-[300px] tablet:mr-[0px] mr-[20px] text-left pb-10">*/
                <div className='mb-10'>
                    <Link to={`/user/${props.index + 1}`} className="relative tablet:w-[48.8%] w-[300px] tablet:mr-[0px] mr-[20px] text-left pb-10">
                        <img className="w-[100%] tablet:mb-[23px] mb-[15px]" src={props.cardImg} alt='img'/>
                        <div className="max-w-[350px]">
                            <p className="medium:text-base tablet:text-sm text-xs font-normal text-[#2D2A26]/60">
                                {props.typeOfProperty}&#44; {props.city}</p>
                            <p className="medium:text-3xl tablet:text-2xl text-lg font-semibold text-[#2D2A26]">{props.name}</p>    
                            <div className="tablet:text-base text-xs w-[245px] font-normal text-[#2D2A26]">
                                {props.area} м2  &bull; {props.bedrooms} bedrooms &bull; {props.bathrooms} bathrooms
                                &bull; {props.plot} ha plot &bull; {props.furnished} &bull; {props.CCTV} &bull; {props.terrace}
                            </div>
                            <p className="absolute medium:right-[30px] tablet:right-[10px] right-[5px] bottom-[75px] desktop:text-[28px] medium:text-[22px] text-base font-bold">${props.price}</p>
                        </div>
                    </Link>
                </div>
                /*</button>*/    
        )
    }
    return (
        /*<button onClick={() => {navigate('/pageCard/:id')}} className="relative flex justify-between laptop:w-[48.8%] w-[100%] text-left py-5 border-b-[1px] border-y-[#2D2A26/16]">*/
        <Link to={`/user/${props.index + 1}`} className="relative flex justify-between laptop:w-[48.8%] w-[100%] text-left py-5 border-b-[1px] border-y-[#2D2A26/16]">    
            <img className="tablet:w-[260px] tablet:h-[171px]  w-[140px] h-[132px] mr-[3.8%] rounded-3xl" src={props.cardImg} alt='img'/>
            <div className="w-[58%] pt-[10px]">
                <p className="medium:text-base laptop:text-sm text-xs font-normal text-[#2D2A26]/60">
                    {props.typeOfProperty}&#44; {props.city}</p>
                    <p className="desktop:text-2xl laptop:text-lg text-base font-semibold text-[#2D2A26]">{props.name}</p>    
                <p className="laptop:text-sm text-xs w-[245px] font-normal text-[#2D2A26]">
                    {props.area} м2  &bull; {props.bedrooms} bedrooms &bull; {props.bathrooms} bathrooms
                    &bull; {props.plot} ha plot &bull; {props.furnished} &bull; {props.CCTV} &bull; {props.terrace}
                </p>
                <p className="absolute medium:right-[30px] right-[5px] bottom-[20px] desktop:text-[28px] medium:text-[22px] text-base font-bold">${props.price}</p>
            </div>
        </Link>
        
       )  
}
export default CardItem