export default function LandingBox({src,title}) {
  return (
    <div className="Landing-box flex flex-col items-center justify-center text-center xs:block xs:text-right">
      <img src={src} />
      <h4 className="Landing-box__title text-[16px] lg:text-[22px] font-normal text-[#fff] mt-2">
        {title}
      </h4>
      <p className="Landing-box__subtitle text-[13px] lg:text-[16px] text-[#FFFFFF94] mt-2 whitespace-nowrap">
        لورم ایپسوم متن ساختگی
      </p>
    </div>
  );
}
