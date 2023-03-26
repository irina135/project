//import linkArrow from '../assets/imgs/title-link/title-arrow.png'
function TitleLink(props) {
 
    return (
       <div className="desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] flex justify-between items-center mx-auto tablet:mb-10 mb-5">
          <h2 className="desktop:text-[42px] tablet:text-4xl text-2xl font-bold text-[#2D2A26]">{props.title}</h2>
          <div className="flex ">
               <a className="desktop:text-lg tablet:text-base text-xs text-gray-400  font-medium underline underline-offset-4 decoration-gray-400" href="#">{props.linkText}</a>
               <img className="ml-2.5" src={props.img1} alt='img'/> 
          </div>
       </div>
       )
  }
export default TitleLink