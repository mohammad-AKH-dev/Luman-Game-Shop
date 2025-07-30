import Topbar from "../components/Header/Topbar";
import Navbar from "../components/Header/Navbar";
import Sidebar from "../components/Menu/Sidebar";

import { digitsEnToFa } from "@persian-tools/persian-tools";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { Star } from "@mui/icons-material";
import FormInput from "../components/Forminput";
import { useContext, useState } from "react";
import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer/Footer";
import MenusSidebar from "../components/Menu/MenusSidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MyContext } from "../contexts/context";
export default function MainProduct() {
  const [isChechked, setIsChecked] = useState(false);
  const context = useContext(MyContext);
  const params = useParams();
  const mainProduct = context.products.find(
    (product) => product.id === +params.id
  );


  useEffect(() => {
    document.title = "محصول / اسپایدرمن";
  }, [params]);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconEmpty	": {
      color: "#ffffff99",
    },
  });
  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar />
      <MenusSidebar />
      <section className="main-product__section mt-24">
        <div className="container">
          <div
            className="product-wrapper flex items-center justify-center text-center 
          xs2:items-start xs2:justify-normal xs2:text-right  flex-wrap xs2:flex-nowrap gap-x-8"
          >
            <div className="product-img__wrapper">
              <img
                src={mainProduct.path}
                className="w-full h-full object-fill m-auto rounded-xl max-w-[420px] min-h-[370px] max-h-[370px] min-w-[420px]"
              />
            </div>
            <div className="product-details mt-8 xs2:mt-0">
              <h3 className="product-title font-bold text-[28px]">
                {mainProduct.name}
              </h3>
              <div className="price-wrapper">
                {mainProduct.discount ? (
                  <>
                    <span className="product__price line-through text-[#bbbbbb] text-[20px]">
                      {digitsEnToFa(mainProduct.price?.toLocaleString())}تومان
                    </span>
                    <span className="product__discount text-purple text-[20px] mr-4">
                      {digitsEnToFa(
                        (
                          mainProduct.price -
                          (mainProduct.price * mainProduct.discount) / 100
                        ).toLocaleString()
                      )}
                      تومان
                    </span>
                  </>
                ) : (
                  <span className="product__price text-purple text-[20px]">
                    {digitsEnToFa(mainProduct.price?.toLocaleString())}تومان
                  </span>
                )}
              </div>
              <div className="product-add-delete__count-wrapper flex justify-center flex-wrap xs2:flex-nowrap items-center gap-4 mt-6">
                <div className="cart-counter__controller flex items-center gap-2 text-center">
                  <span
                    className="outline w-[25px] h-[40px] flex items-center justify-center
                   outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer"
                  >
                    -
                  </span>
                  <span
                    className="outline w-[35px] h-[40px] flex items-center justify-center
                   outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer"
                  >
                    {digitsEnToFa(1)}
                  </span>
                  <span
                    className="outline w-[25px] h-[40px] flex items-center justify-center
                   outline-[#77777733] rounded-lg hover:bg-purple transition-all delay-100 cursor-pointer"
                  >
                    +
                  </span>
                </div>
                <button
                  type="button"
                  className="outline-none border-none pb-3 pt-2 px-4 bg-purple shadow-box 
                hover:shadow-boxHover rounded-3xl"
                >
                  افزودن به سبد خرید
                </button>
              </div>
              <div className="add-to-favourites__wrapper flex flex-wrap xs2:flex-nowrap justify-center items-center gap-x-4 mt-4">
                <div className="flex items-center gap-x-1 group">
                  <FavoriteBorderIcon
                    className="w-[18px] text-[#ffffff99] transition-all cursor-pointer
                         group-hover:text-[#fff]"
                  />
                  <span
                    className="text-[16px] text-[#ffffff99] transition-all cursor-pointer
                         group-hover:text-[#fff]"
                  >
                    افزودن به علاقه مندی
                  </span>
                </div>
                <div className="flex items-center gap-x-1 group">
                  <CompareArrowsIcon
                    className="w-[18px] text-[#ffffff99] transition-all cursor-pointer
                          group-hover:text-[#fff]"
                  />
                  <span
                    className="text-[16px] text-[#ffffff99] transition-all cursor-pointer
                          group-hover:text-[#fff]"
                  >
                    مقایسه
                  </span>
                </div>
              </div>
              <span className=" w-full lg:w-[170%] xl:w-[250%] block h-[1px] bg-[#7773] mt-4 "></span>
              <div className="product-category mt-4">
                <span className="text-[#ffffff99] font-bold">دسته:</span>
                <span className="text-[#777777]"> {mainProduct.category}</span>
              </div>
              <div className="socials-share mt-6 flex items-center gap-x-2">
                <span className="font-bold text-[#ffffff99]">
                  اشتراک گذاری:
                </span>
                <div className="social-icons__wrapper flex items-center gap-x-3">
                  <EmailIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
                  <FacebookOutlinedIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
                  <TelegramIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
                  <XIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
                  <WhatsAppIcon className="text-[18px] text-[#ff6bbb] cursor-pointer hover:opacity-70 transition-all" />
                </div>
              </div>
            </div>
          </div>
          <div className="comments-title__section mt-12">
            <span
              className="font-bold border-b relative block after:absolute after:top-[2.5rem] 
             after:h-[1px] after:w-16 after:z-10 after:bg-purple after:block border-b-[#7773] pb-4"
            >
              نظرات {`(${digitsEnToFa(0)})`}
            </span>
          </div>
          <div className="commnets-section flex flex-wrap gap-y-24 md:gap-y-0 md:flex-nowrap justify-between">
            <div className="comments-right__section mt-4">
              <h3 className="comments-right__section-title text-[18px] mb-8 font-bold">
                نقد و بررسی ها
              </h3>
              <span className="no-comments__alert text-[#ffffff99]">
                هنوز نقد و بررسی ثبت نشده است.
              </span>
            </div>
            <div className="comments-left__section mt-4">
              <h3 className="comments-left__section-title text-[18px] mb-4 font-bold">
                اولین کسی باشید که دیدگاهی می نویسد “اسپایدرمن”
              </h3>
              <span className="comments-left-section__subtitle text-[#777]">
                نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
                شده‌اند<span className="text-red-600"> *</span>
              </span>
              <div className="comment-score__wrapper mt-6 flex items-center gap-x-3">
                <span className="score-title text-[#ffffff99]">
                  امتیاز شما<span className="text-red-600">*</span>:
                </span>
                <StyledRating
                  icon={<Star fontSize="inherit" />}
                  name="size-large"
                  className="flex flex-row-reverse"
                  size="large"
                />
              </div>
              <div className="comments-textarea__wrapper mt-3">
                <h3 className="text-[#ffffff99]">
                  دیدگاه شما<span className="text-red-600">*</span>:
                </h3>
                <textarea className="min-h-[190px] w-full mt-4 rounded-xl bg-secondary text-white p-2"></textarea>
              </div>
              <form action="#" className="user-comment__informations mt-2">
                <FormInput
                  title={"نام"}
                  type={"text"}
                  required={true}
                  style={"bg-secondary"}
                  inputStyle={"bg-secondary"}
                />
                <FormInput
                  title={"ایمیل"}
                  type={"email"}
                  required={true}
                  style={"bg-secondary"}
                  inputStyle={"bg-secondary"}
                />
                <div>
                  <input
                    type="checkbox"
                    checked={isChechked}
                    onChange={(event) => setIsChecked(event.target.checked)}
                  />
                  <span className="text-[#ffffff99] pr-2">
                    {" "}
                    ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره
                    دیدگاهی می‌نویسم.
                  </span>
                </div>
                <p className="mt-2 text-[#777]">
                  برای اینکه بتوانید عکس ها را به بررسی خود اضافه کنید باید وارد
                  سیستم شوید.
                </p>
                <button
                  type="submit"
                  className="mt-6 shadow-box hover:shadow-boxHover
                 outline-none rounded-3xl border-none bg-purple px-6 pb-3 pt-2"
                >
                  ثبت
                </button>
              </form>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </section>
      <Footer />
    </>
  );
}
