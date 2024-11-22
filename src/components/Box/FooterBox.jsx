export default function FooterBox({title,img}) {
  return (
    <div className="Footer-box_item w-full h-[52px] bg-[#070E1C] flex items-center gap-5 p-4 rounded-lg">
      <img
        className="Footer-box__img w-[36px] h-[36px]"
        src={img}
      ></img>
      <a
        href="/"
        className="Footer-box__link text-[#a39f9f] text-[14px] font-bold"
      >
        {title}
      </a>
    </div>
  );
}
