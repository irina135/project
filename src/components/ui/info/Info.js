import info from "../../../mocks/info/data.base.info"

function Info(props) {
 
    return (
     
       <div className="desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] mx-auto laptop:h-[600px] h-[460px] rounded-3xl medium:pl-[53.6%] tablet:pl-[40%] pl-[30px] pr-[8%] desktop:pt-[162px] laptop:pt-[151px] pt-[148px]  text-left info-bg desktop:mb-[120px] tablet:mb-[90px] mb-[30px]">
          <div>
            <h3 className="w-[82%] mb-5 desktop:text-[80px] laptop:text-6xl medium:text-5xl text-4xl font-bold leading-[100%] text-white uppercase">{info[0].title}</h3>
            <p className="w-[100%] desktop:mb-[42px] laptop:mb-[42px] mb-[30px] desktop:text-2xl medium:text-lg text-base font-normal leading-[160%] text-white">{info[0].text}</p>
            <button className="desktop:px-10 px-[24px] desktop:py-5 py-[13px] bg-white rounded-lg desktop:text-lg text-base font-semibold text-[#2D2A26] uppercase">{info[0].btnText}</button>
         </div>  
       </div>
    
       )
  }
export default Info