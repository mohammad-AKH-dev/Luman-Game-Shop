import { KeyboardBackspace } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Advertising() {
  return (
    <section className="bg-advertising w-full h-[45rem] bg-cover bg-center lg:bg-right-center mt-36 justify-center items-center">
      <div className="container h-full flex justify-center flex-col items-center text-center xs2:text-start xs2:items-start">
        <h2 className="advertising-title font-secondaryBold text-[48px] font-bold">
          خرید CP پابجی موبایل
        </h2>
        <p className="advertising-paragraph text-[#FFFFFF94] max-w-[640px] leading-10">
          برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است.
        </p>
        <div className="bg-purple max-w-[186px] p-3 lg:p-2 rounded-full flex items-center justify-center mt-8
            shadow-box group 
            hover:bg-[#9546ed]
            transition-all 
            duration-100 
            delay-100 
            cursor-pointer
            hover:shadow-boxHover">
          <Link to={'/'} className="text-[12px] text-[#ffffff]">
            مشاهده محصولات بیشتر
          </Link>
          <KeyboardBackspace className="pr-2 group-hover:translate-x-[-2px] delay-100 transition-all text-[24px]"/>
        </div>
      </div>
    </section>
  );
}
