import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function FooterInfoBox({img,title}) {
  return (
    <div className="footer-info-box flex items-center gap-2">
      <img src={img} className="max-w-[24px] max-h-[28px]"/>
      <a href="tel:+9809119876543" className="footer-phone text-[14px] text-[#a39f9f]">{title}</a>
    </div>
  );
}
