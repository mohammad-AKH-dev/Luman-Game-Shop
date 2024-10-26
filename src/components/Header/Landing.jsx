import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LandingBox from "../Box/LandingBox";

export default function Landing() {
  return (
    <div className="Landing bg-primary">
      <div className="flex justify-between container flex-col lg:flex-row pt-4">
        <div className="w-full lg:w-[50%] font-secondary flex flex-col justify-center items-center xs:block Landing-right__section pt-[3rem] lg:pt-[7rem] xl:pt-[3rem] relative">
          <h3 className="Landing-subtitle text-[20px] lg:text-4xl text-[#FFFFFFED]">
            با لومان گیم خاص‌ترین
          </h3>
          <h1 className="Landing-title text-[42px] lg:text-[74px] font-secondaryBold">
            فروشگاه بازی باش
          </h1>
          <div className="Landing-sub text-[#FFFFFF94] font-primary flex flex-col gap-4">
            <p className='text-[14px] tracking-tighter	 lg:text-[1rem]'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید</p>
            <p className='text-[14px] tracking-tighter	 lg:text-[1rem]'>نامفهوم از صنعت چاپ و با استفاده طراحان گرافیک است</p>
          </div>
          <div className="Landing-shop__buttons flex justify-center flex-col xs:flex-row xs:justify-start items-center font-primary font-bold gap-5 mt-14">
            <div className="buy-button bg-purple p-3 lg:p-4 px-11 rounded-full 
            shadow-box group 
            hover:bg-[#9546ed]
            transition-all 
            duration-100 
            delay-100 
            cursor-pointer
            hover:shadow-boxHover
            ">
              <Link to={"/"}>خرید آیتم های بازی</Link>
              <KeyboardBackspaceIcon className="pr-2 group-hover:translate-x-[-7px] delay-100 transition-all text-3xl" />
            </div>
            <div className="shop-button group">
              <Link to={"/"}> آیتم های بازی</Link>
              <KeyboardBackspaceIcon className="pr-2 group-hover:translate-x-[-7px] delay-100 transition-all text-3xl" />
            </div>
          </div>
          <div className="Landing-boxes font-primary flex flex-wrap sm:flex-nowrap items-center lg:justify-start flex-col xs:flex-row gap-[2rem] md:gap-44 mt-[3rem] sm:mt-[5rem]  md:mt-8 xl:mt-[13rem] lg:gap-4 xl:gap-8">
            <LandingBox
              src={
                "https://theme.fullwp.ir/luman/game/wp-content/uploads/elementor/thumbs/1-1-qa8mzvpool0pltocd12ck38gzz1eklzgkzfn1lei2c.png"
              }
              title={"تحویل فوری"}
            />
            <LandingBox
              src={
                "https://theme.fullwp.ir/luman/game/wp-content/uploads/elementor/thumbs/Group-1-1-qa8n9swd0n7eqo70u67knf6kfr22lqddxtlbo3bnqs.png"
              }
              title={"پشتیبانی"}
            />
            <LandingBox
              src={
                "https://theme.fullwp.ir/luman/game/wp-content/uploads/elementor/thumbs/Group-2-qa8nf4nfm0tyi62gbrgeoov2y664t52xiddkilzp6c.png"
              }
              title={"نظر مشتریان"}
            />
          </div>
          <div className="arrow-img__wrapper hidden lg:block max-w-[133px] max-h-[136px] absolute md:left-[-1rem] xl:left-[5rem] md:top-[25rem] xl:top-[23rem]">
            <img
              src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/arrow-slider.svg"
              className="w-full"
            />
          </div>
          <div className='arrow-img__wrapper w-[194px] h-[193px] lg:hidden hidden sm:block sm:absolute top-[15rem] left-[-5rem] sm:left-[1rem] sm:top-[8rem] rotate-[264deg]'>
             <img src="images/arrow-slider2.svg" alt="" />
          </div>
        </div>
        <div className="w-full mx-auto lg:w-[50%] Landing-left__section flex items-center justify-center">
          <div className="Landing-img__wrapper relative">
            <img
              className="max-w-[460px] lg:max-w-[500px] relative z-10 top-8 xl:right-[1.5rem] w-full"
              src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/luman-game-slider-1.webp"
            />
            <img
              className="absolute md:max-w-[460px]  lg:max-w-[567px] inset-0 w-full "
              src="images/Landing-img-bg.png"
            />
            <div className="Landing-img__title">
              <p className="Landing-img__sub text-[42px] lg:text-6xl font-secondaryBold text-center xs:mr-16">
                خرید CP کالاف
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
