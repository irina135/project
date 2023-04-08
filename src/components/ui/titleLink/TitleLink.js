//import linkArrow from '../assets/imgs/title-link/title-arrow.png'

import { Link } from 'react-router-dom';

let pagePath = ''
function TitleLink(props) {
   
   if (props.pagePathHorizontalCard){
      pagePath = '/PageAllCardHorizontal'
   } 

   else {
      if (props.pageAllAreas) {
         pagePath = '/PageAllAreas'
      }
      else {
         pagePath = '/PageAllCardVertical'
      }
   }

  
   

  
    return (
      <Link to={pagePath} className="relative tablet:min-w-[48.8%] w-[300px]  tablet:mr-[0px] mr-[20px] text-left pb-10">
            <div className="desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] flex justify-between items-center mx-auto tablet:mb-[44px] mb-5">
          <h2 className="desktop:text-[42px] tablet:text-4xl text-2xl font-bold text-[#2D2A26] tracking-[0.025em]">{props.title}</h2>
          <div className="flex ">
               <a className="desktop:text-lg tablet:text-base text-xs text-gray-400  font-medium underline underline-offset-4 decoration-gray-400 tracking-widest" href="#">{props.linkText}</a>
               <img className="ml-2.5" src={props.img1} alt='img'/> 
          </div>
       </div>
      </Link>
       
       )
  }
export default TitleLink