import info from "../../../mocks/info/data.base.info"

function Info(props) {
 
    return (
     <div>
          <div className="relative desktop:w-[91.6%] desktop:max-w-[1760px]  laptop:max-w-[94%] max-w-[89%] mx-auto tablet:block hidden">
               <div className="flex justify-center items-center desktop:h-[720px] laptop:h-[600px] tablet:h-[460px] rounded-3xl desktop:mb-[115px] tablet:mb-[86px]">
                    <img className="min-w-full min-h-full" src={info[0].infoBg} alt='img'/>
               </div>
               <div className="absolute top-0 left-0 tablet:pl-[50%] laptop:pl-[55%] desktop:pl-[58%] pr-[8%] desktop:pt-[162px] tablet:pt-[145px]">
                    <h3 className="mb-5 desktop:text-[80px] laptop:text-6xl medium:text-5xl text-4xl font-bold leading-[100%] text-white uppercase tracking-wider">{info[0].title}</h3>
                    <p className="w-[100%] desktop:mb-[42px] laptop:mb-[42px] mb-[30px] desktop:text-2xl medium:text-lg text-base font-normal text-white tracking-wider textHeightInfo">{info[0].text}</p>
                    <button className="laptop:px-10 px-[24px] laptop:py-5 py-[13px] bg-white rounded-lg laptop:text-lg text-base font-semibold text-[#2D2A26] uppercase">{info[0].btnText}</button>
               </div>
          </div>
          <div className="relative max-w-[89%] mx-auto h-[460px] rounded-3xl mb-[30px] tablet:hidden block">
               <div className="flex justify-center items-center h-[460px] rounded-3xl overflow-hidden">
                    <img className="min-w-full min-h-full" src={info[0].infoBgMobile} alt='img'/>
               </div>
               <div className="absolute top-0 left-0 pl-[30px] pt-[145px] pr-[8%]">
                    <h3 className="mb-5 text-4xl font-bold leading-[100%] text-white uppercase tracking-wider">{info[0].title}</h3>
                    <p className="w-[100%] mb-[30px] text-base font-normal text-white tracking-wider textHeightInfo">{info[0].text}</p>
                    <button className="px-[24px] py-[13px] bg-white rounded-lg text-base font-semibold text-[#2D2A26] uppercase">{info[0].btnText}</button>
               </div>
          </div>
     </div>  
     )
  }
export default Info