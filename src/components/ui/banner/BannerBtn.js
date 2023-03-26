import {banner} from '../../../mocks/banner/data.base.banner'

function BannerBtn(props) {
 
    return (
       <button className="tablet:h-[52px] tablet:w-[52px] h-[42px] w-[42px] bg-[#39A897] rounded-full">
            <img className="tablet:ml-[19px] ml-[15px]" src={banner[0].filterBtn} alt="img"/>
       </button>
       )
  }
export default BannerBtn