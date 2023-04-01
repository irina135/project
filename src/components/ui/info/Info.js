import info from "../../../mocks/info/data.base.info"

function Info(props) {
 
    return (
     
       <div className="desktop:w-[91.6%] desktop:max-w-[1760px]  laptop:max-w-[94%] max-w-[89%] mx-auto desktop:h-[720px] laptop:h-[600px] h-[460px] rounded-3xl pl-[30px] tablet:pl-[40%] laptop:pl-[55%] desktop:pl-[47%] pr-[8%] desktop:pt-[162px] laptop:pt-[145px] pt-[145px]  text-left info-bg desktop:mb-[115px] tablet:mb-[86px] mb-[30px]">
          
            <h3 className="mb-5 desktop:text-[80px] laptop:text-6xl medium:text-5xl text-4xl font-bold leading-[100%] text-white uppercase tracking-wider">{info[0].title}</h3>
            <p className="w-[100%] desktop:mb-[42px] laptop:mb-[42px] mb-[30px] desktop:text-2xl medium:text-lg text-base font-normal text-white tracking-wider textHeightInfo">{info[0].text}</p>
            <button className="laptop:px-10 px-[24px] laptop:py-5 py-[13px] bg-white rounded-lg laptop:text-lg text-base font-semibold text-[#2D2A26] uppercase">{info[0].btnText}</button>
         
       </div>
    
       )
  }
export default Info