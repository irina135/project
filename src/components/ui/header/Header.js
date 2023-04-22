import React, { useState } from "react";
import { header } from "../../../mocks/header/data.base.heder";

function Header() {
  const [isShow, setIsShow] = useState(false);
  return (
    <header className="flex desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] justify-between items-center tablet:h-20 h-[60px] laptop:pl-2.5 laptop:pr-1 mx-auto text-lime-700">
      <img src={header[0].headerLogo} alt="img" />

      <div className="flex justify-center header__links-wrap tablet:w-[132px] w-[116px] tablet:h-[48px] h-[40px] border border-[#2d2a26]/16 rounded-[32px] pb-1 pt-1 absolute header__links--position">
        <a
          className="rounded-[32px] py-2 tablet:px-4 px-3.5 tablet:text-sm text-xs text-{45, 42, 38, 0.16} hover:bg-black hover:text-white"
          href="#"
        >
          Sale
        </a>
        <a
          className="rounded-[32px] py-2 tablet:px-4 px-3.5 tablet:text-sm text-xs text-{45, 42, 38, 0.16} hover:bg-black hover:text-white"
          href="#"
        >
          Rent
        </a>
      </div>

      <div className="flex">
        <button
          className="tablet:w-16 tablet:mr-10 flex items-center"
          onClick={() => setIsShow(!isShow)}
        >
          <img className="mr-2.5" src={header[0].global} alt="img" />
          <div className="tablet:flex hidden">
            <p className="text-sm font-normal text-cyan-900">
              {isShow ? "EN" : "RUS"}
            </p>
            <p className="text-sm font-normal text-cyan-900">&bull;</p>
            <p className="text-sm font-normal text-cyan-900">
              {isShow ? "$" : "℞"}
            </p>
          </div>
        </button>
        <button href="#" className="relative ml-[10px]">
          <img className="h-8" src={header[0].avatar} alt="img" />
          <div className="absolute left-[22px] top-[-5px] h-4 w-4 bg-emerald-400 rounded-full pl-[1px]">
            <p className="text-white text-[10px]">2</p>
          </div>
        </button>
      </div>
    </header>
  );
}
export default Header;
