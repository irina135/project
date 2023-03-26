import React, { useState } from 'react';
import {header} from '../../../mocks/header/data.base.heder'


function Header() {
    const [isShow, setIsShow] = useState(false)
     return (
     <header className='tablet:flex hidden desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] justify-between items-center h-20 laptop:pl-2.5 laptop:pr-1 mx-auto text-lime-700'>
       <img src={header[0].headerLogo} alt='img'/>
       <div className='flex'>
         <button className="w-16 mr-10 flex items-center" onClick={() => setIsShow(!isShow)}>
            <img className="mr-2.5" src={header[0].global} alt='img'/>
            <p className="text-sm font-normal text-cyan-900">{isShow ? 'EN' : 'RUS'}</p>
            <p className="text-sm font-normal text-cyan-900">&bull;</p>
            <p className="text-sm font-normal text-cyan-900">{isShow ? '$' : '℞'}</p>
         </button>
         <button href="#" className="relative">
            <img className="h-8" src={header[0].avatar} alt='img'/>
            <div className="absolute left-[22px] top-[-5px] h-4 w-4 bg-emerald-400 rounded-full pl-[1px]">
            <p className="text-white text-[10px]">2</p>
           </div>
         </button>
       </div>
     </header>
     )
   }
 export default Header