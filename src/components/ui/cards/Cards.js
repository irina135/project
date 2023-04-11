
import { Link } from 'react-router-dom';

function CardItem(props) {
    let x = props.constSwitchCard
    switch(x){
        case 'pageHomeCardVertical':
            return (
                <Link to={`/user/${props.index + 1}`} className="relative tablet:min-w-[48.8%] w-[300px]  tablet:mr-[0px] mr-[20px] text-left pb-10">
                    <img className="min-w-[100%] tablet:h-auto h-[200px] tablet:mb-[23px] mb-[15px] vvv2" src={props.cardImg} alt='img'/>
                    <div>
                        <p className="desktop:text-base tablet:text-sm text-xs font-normal text-[#2D2A26]/60">
                            {props.typeOfProperty}&#44; {props.city}</p>
                        <p className="desktop:text-3xl tablet:text-2xl text-lg font-semibold text-[#2D2A26] tracking-wide">{props.name}</p>    
                        <div className="tablet:text-base text-xs w-[245px] font-normal text-[#2D2A26]">
                            <p>{props.area} м2  &bull; {props.bedrooms} bedrooms &bull; {props.bathrooms} bathrooms
                            &bull; {props.plot} ha plot &bull; {props.furnished} &bull; {props.CCTV} &bull; {props.terrace}
                            </p>
                        </div>
                        <p className="absolute desktop:right-[30px] laptop:right-[50px] tablet:right-[10px] right-[5px] desktop:bottom-[143px] laptop:bottom-[95px] bottom-[88px] desktop:text-[28px] medium:text-[22px] text-base font-bold">${props.price}</p>
                    </div>
                </Link>     
            );
        case 'pageAllCardVertical':
            return(
                <div className='relative laptop:w-[24%] tablet:w-[48%] w-[335px] medium:h-[600px] laptop:h-[421px] desktop:h-[552px] tablet:h-[500px] h-[454px] tablet:mb-[60px] mb-[40px] mx-auto'>
                    <img className='laptop:w-[100%] desktop:h-[425px] laptop:h-[305px] tablet:w-full w-[335px] medium:h-[420px] h-[335px] mb-4' src={props.cardImgMobile} alt='img'/>
                    <div>
                        <p className="tablet:text-sm text-xs font-normal text-[#2D2A26]/60">
                            {props.typeOfProperty}&#44; {props.city}</p>
                        <p className="desktop:text-2xl text-lg font-semibold text-[#2D2A26] tracking-wide">{props.name}</p>    
                        <div className="laptop:h-[20px] laptop:w-[90%] overflow-hidden tablet:text-base text-xs w-[245px] font-normal text-[#2D2A26]">
                            <p>{props.area} м2  &bull; {props.bedrooms} bedrooms &bull; {props.bathrooms} bathrooms
                                &bull; {props.plot} ha plot &bull; {props.furnished} &bull; {props.CCTV} &bull; {props.terrace}
                            </p>
                        </div>
                        <p className="absolute left-0 bottom-0 desktop:text-[22px] medium:text-lg text-base font-bold">${props.price}</p>
                    </div>
                </div>
            )
        case 'pageHomeCardHorizontal':
            return (
                /*<button onClick={() => {navigate('/pageCard/:id')}} className="relative flex justify-between laptop:w-[48.8%] w-[100%] text-left py-5 border-b-[1px] border-y-[#2D2A26/16]">*/
                <Link to={`/user/${props.index + 1}`} className="relative flex justify-between laptop:w-[47%] w-[100%] text-left tablet:pb-5 tablet:pt-0 pt-[14px] pb-[14px] tablet:mb-5 border-b-[1px] border-y-[#2D2A26/16]">    
                    <img className="desktop:w-[340px] tablet:w-[260px] desktop:h-[224px] tablet:h-[171px]  w-[140px] h-[132px] mr-[3.8%] rounded-3xl" src={props.cardImg} alt='img'/>
                    <div className="w-[58%] tablet:pt-[10px] pt-1">
                        <p className="medium:text-base laptop:text-sm text-xs font-normal text-[#2D2A26]/60">
                            {props.typeOfProperty}&#44; {props.city}</p>
                            <p className="desktop:text-2xl laptop:text-lg text-base font-semibold text-[#2D2A26]">{props.name}</p>    
                        <div className=" laptop:text-sm text-xs w-[245px] font-normal text-[#2D2A26]">
                           <p> {props.area} м2  &bull; {props.bedrooms} bedrooms &bull;</p><p> {props.bathrooms} bathrooms
                            &bull;</p> {props.plot} ha plot &bull; {props.furnished} &bull; {props.CCTV} &bull; {props.terrace}
                    
                        </div>
                        <p className="absolute desktop:right-[60px] right-[12px] tablet:bottom-[37px] bottom-[18px] desktop:text-xl medium:text-[22px] text-base font-bold tracking-wide">${props.price}</p>
                    </div>
                </Link>
            )  
        case 'pageAllCardHorizontal':
            return (
                /*<button onClick={() => {navigate('/pageCard/:id')}} className="relative flex justify-between laptop:w-[48.8%] w-[100%] text-left py-5 border-b-[1px] border-y-[#2D2A26/16]">*/
                <Link to={`/user/${props.index + 1}`} className="relative flex justify-between w-[100%] text-left tablet:pb-5 tablet:pt-0 pt-[14px] pb-[14px] tablet:mb-5 border-b-[1px] border-b-[#2D2A26/16]">    
                    <img className="desktop:w-[340px] tablet:w-[260px] desktop:h-[224px] tablet:h-[171px]  w-[140px] h-[132px] mr-[3.8%] rounded-3xl" src={props.cardImg} alt='img'/>
                    <div className="w-[58%] tablet:pt-[10px] pt-1">
                        <p className="medium:text-base laptop:text-sm text-xs font-normal text-[#2D2A26]/60">
                            {props.typeOfProperty}&#44; {props.city}</p>
                            <p className="desktop:text-2xl laptop:text-lg text-base font-semibold text-[#2D2A26]">{props.name}</p>    
                        <div className=" laptop:text-sm text-xs w-[245px] font-normal text-[#2D2A26]">
                           <p> {props.area} м2  &bull; {props.bedrooms} bedrooms &bull;</p><p> {props.bathrooms} bathrooms
                            &bull;</p> {props.plot} ha plot &bull; {props.furnished} &bull; {props.CCTV} &bull; {props.terrace}
                    
                        </div>
                        <p className="absolute desktop:right-[60px] right-[12px] tablet:bottom-[37px] bottom-[18px] desktop:text-xl medium:text-[22px] text-base font-bold tracking-wide">${props.price}</p>
                    </div>
                </Link>
            )  

    }  
}
export default CardItem