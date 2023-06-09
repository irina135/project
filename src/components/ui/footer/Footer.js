import { footer } from "../../../mocks/footer/data.base.footer";
import FooterLinkItem from "./FooterLinkItem";

function Footer(props) {
  const footerItemList1 = footer;

  const newFooterItemList1 = footerItemList1.map((number) => (
    <ul>
      <FooterLinkItem key={number} footerLink={number.footerLink1} />
    </ul>
  ));

  const newFooterItemList2 = footerItemList1.map((number) => (
    <ul>
      <FooterLinkItem key={number} footerLink={number.footerLink2} />
    </ul>
  ));

  return (
    <div className="tablet:flex desktop:pl-[10%] desktop:pb-[120px] pb-[100px] bg-[#2D2A26] medium:pl-[6.3%] pl-[10.6%] desktop:pt-[120px] tablet:pt-[100px] pt-[60px] text-white">
      <div className="desktop:w-[53%] laptop:w-[46.6%] tablet: w-[43.4%] tablet-mb-[0px] mb-[50px]">
        <img className="mb-[19px]" src={footer[0].footerLogo} alt="img" />
        <p className="tablet:w-[188px] w-[188px] text-left text-white/60 desktop:leading-relaxed desktop:text-lg tablet:text-base tracking-wide">
          {footer[0].footerText}
        </p>
      </div>
      <div className="tablet:flex justify-start medium:w-[46%] tablet:w-[55%]">
        <div className="desktop:w-[44%] medium:w-[60%] tablet:mb-[0px] mb-[51px] text-left">
          <h4 className="mb-3 desktop:text-lg text-base font-normal text-white/60">
            {footer[0].footerTitle}
          </h4>
          {newFooterItemList1}
        </div>
        <div className="text-left">
          <h4 className="mb-3 desktop:text-lg text-base font-normal text-white/60">
            {footer[1].footerTitle}
          </h4>
          {newFooterItemList2}
        </div>
      </div>
    </div>
  );
}
export default Footer;
