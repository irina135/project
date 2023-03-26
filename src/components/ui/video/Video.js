import video from '../../../mocks/video/data.base.video'
function Video(props) {
 
    return (
       <div className="desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%]  h-[auto] tablet:flex justify-between mx-auto desktop:mb-40 tablet:mb-[120px] mb-[60px]">
          <div className="tablet:w-[33.3%] text-left desktop:pt-[50px] laptop:pt-[10px]">
            <h3 className="desktop:max-w-[65%] desktop:text-[54px] laptop:text-5xl text-4xl desktop:leading-[54px]  laptop:leading-[48px] leading-9 font-bold leading-[54px] mb-5 uppercase">{video[0].title}</h3>
            <p className="desktop:max-w-[90%] desktop:mb-[42px] laptop:mb-[20px] mb-[30px] desktop:text-2xl tablet:text-lg text-base font-normal text-[#2D2A26] desktop:leading-[38px] tablet:leading-7 leading-[25px]">
                {video[0].text1}  
            </p>
            <p className="desktop:max-w-[90%] desktop:mb-[42px] laptop:mb-10 mb-[30px] desktop:text-2xl tablet:text-lg text-base font-normal text-[#2D2A26] desktop:leading-[38px] tablet:leading-7 leading-[25px]">
                {video[0].text2}
            </p>
            <button className="flex items-center tablet:mb-[0px] mb-10 tablet:px-10 tablet:py-[15px] py-[13px] px-[24px] bg-[#2D2A26] rounded-lg tablet:text-lg text-base text-white">
                <img className="mr-3 tablet:w-[21px] tablet:w-[21px] w-[18px] h-[18px]"  src={video[0].videoBtnImg} alt='img'/>
                {video[0].btnText}</button>
          </div>
          <div className="tablet:w-[63%]">
            <img className="w-[100%] h-[auto]" src={video[0].videoImg} alt='img'/>
          </div>
       </div>
       )
  }
export default Video