import video from '../../../mocks/video/data.base.video'
function Video(props) {
 
    return (
       <div className="desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%]  h-[auto] medium:flex justify-between mx-auto desktop:mb-40 tablet:mb-[120px] mb-[60px]">
          <div className="medium:w-[33.3%] text-left desktop:pt-[35px] laptop:pt-[10px]">
            <h3 className="desktop:max-w-[65%] laptop:mt-[18px] desktop:text-[54px] laptop:text-5xl text-4xl desktop:leading-[54px]  laptop:leading-[48px] leading-9 font-bold tablet:leading-[54px] mb-5 uppercase tracking-wide">{video[0].title}</h3>
            <p className="desktop:max-w-[90%] desktop:mb-[42px] laptop:mb-8 mb-[30px] desktop:text-2xl tablet:text-lg text-base font-normal text-[#2D2A26] desktop:leading-[38px] tablet:leading-7 leading-[25px]">
                {video[0].text1}  
            </p>
            <p className="desktop:max-w-[90%] desktop:mb-[42px] laptop:mb-12 mb-[30px] desktop:text-2xl tablet:text-lg text-base font-normal text-[#2D2A26] desktop:leading-[38px] tablet:leading-7 leading-[25px]">
                {video[0].text2}
            </p>
            <button className="flex items-center medium:mb-[0px] mb-10 tablet:px-10 tablet:py-[15px] py-[11px] px-[24px] bg-[#2D2A26] rounded-lg tablet:text-lg text-base text-white uppercase tracking-wide">
                <img className="mr-3 tablet:w-[21px] tablet:w-[21px] w-[18px] h-[18px]"  src={video[0].videoBtnImg} alt='img'/>
                {video[0].btnText}</button>
          </div>
          <div className="desktop:w-[63%] laptop:w-[60%]">
            <img className="w-[100%] desktop:h-[auto] laptop:h-[481px] tablet:h-auto h-[209px]" src={video[0].videoImg} alt='img'/>
          </div>
       </div>
       )
  }
export default Video