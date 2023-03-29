//import {banner} from '../../mocks/banner/data.base.banner'
function Filter(props) {
 
    return (
       <div className="tablet:flex w-[25%] first:flex hidden tablet:flex line">
           <img className="desktop:mr-[16px] medium:mr-[26px] mr-[16px]" src={props.filterImg} alt='img'/>
           <div className="text-left desktop:text-sm text-xs text-black font-semibold line leading-2">
                <p>{props.filterTitle}</p>
                <input className="font-normal text-{45, 42, 38, 0.6} leading-8" placeholder={props.filterPlaceholder}></input>
           </div>
       </div>
       )
  }
export default Filter