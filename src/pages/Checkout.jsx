import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Topbar from "../components/Header/Topbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Sidebar from "../components/Menu/Sidebar";
import FormInput from "../components/Forminput";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import MenusSidebar from "../components/Menu/MenusSidebar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Checkout() {
  const params = useParams();

  useEffect(() => {
    document.title = " تسویه حساب / سبد خرید";
  }, [params]);

  const breadcrumbs = [
    <NavLink
      to={"/cart"}
      key={1}
      className="text-[22px] text-[#ffffff99] font-primary transition-all hover:text-[#ffffff]"
    >
      سبد خرید
    </NavLink>,
    <NavLink
      key={2}
      className="text-[22px] text-[#ffffff] font-primary "
      to={"/checkout"}
    >
      تسویه حساب
    </NavLink>,
    <Typography
      key="3"
      fontFamily={"font-primary"}
      className="text-[22px] font-primary text-[#ffffff99]"
      sx={{ color: "text.primary" }}
    >
      سفارش کامل شد
    </Typography>,
  ];

  return (
    <>
      <Topbar />
      <Navbar />
      <Sidebar />
      <MenusSidebar />
      <div className="chekout__title bg-secondary p-8">
        <div className="chekout__breadcrumb container">
          <Breadcrumbs
            className="flex items-center justify-center"
            separator={
              <NavigateNextIcon
                fontSize="medium"
                className="text-[#ffffff99] rotate-180"
              />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
      <section className="checkout__section mt-12">
        <div className="container">
          <div className="checkout__section-title">
            <p className="text-[#ffffff99] flex gap-x-2 font-bold">
              کد تخفیف دارید؟
              <Link to={"/cart"} className="text-purple font-bold">
                برای نوشتن کد اینجا کلیک کنید
              </Link>
            </p>
          </div>

          <div className="checkout__section-content mt-12 flex flex-col lg:flex-row gap-x-8">
            <form
              action="#"
              className="checkout__section-right-content w-full  lg:w-[60%] flex flex-col"
            >
              <legend className="checkout__right-conent__title text-[26px] font-bold">
                جزئیات صورتحساب
              </legend>
              <div className="checkout-name__inputs-wrapper flex flex-col xs:flex-row mt-12">
                <FormInput
                  title={"نام"}
                  type={"text"}
                  required={true}
                  style={"w-full bg-secondary"}
                  labelMargin={"-mt-6"}
                  inputStyle={"bg-secondary"}
                />
                <FormInput
                  title={"نام خانوادگی"}
                  type={"text"}
                  required={true}
                  style={"w-full bg-secondary"}
                  labelMargin={
                    "xs:-mt-6 xs:translate-x-[-65px] whitespace-nowrap"
                  }
                  inputStyle={"bg-secondary"}
                />
              </div>
              <FormInput
                title={"شرکت(اختیاری)"}
                type={"text"}
                labelMargin={"-mb-2"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <FormInput
                title={"کشور / منطقه"}
                placeholder={"ایران"}
                required={true}
                type={"text"}
                labelMargin={"-mb-2"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <FormInput
                title={"استان"}
                placeholder={"تهران"}
                required={true}
                type={"text"}
                labelMargin={"-mb-2"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <FormInput
                title={"شهر"}
                type={"text"}
                labelMargin={"-mb-2"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <div className="address-inputs__wrapper mt-4 mb-4">
                <FormInput
                  title={"آدرس خیابان"}
                  type={"text"}
                  placeholder={"نام خیابان و پلاک خانه"}
                  required={true}
                  inputStyle={"bg-secondary"}
                  style={"w-full bg-secondary"}
                />
                <FormInput
                  type={"text"}
                  placeholder={"آپارتمان،مجتمع،واحد و ...(اختیاری)"}
                  labelMargin={"w-full"}
                  inputStyle={"bg-secondary"}
                  style={"w-full mt-1 bg-secondary"}
                />
              </div>
              <FormInput
                title={"کدپستی (بدون فاصله و با اعداد انگلیسی) "}
                required={true}
                type={"text"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <FormInput
                title={"تلفن"}
                required={true}
                type={"text"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <FormInput
                title={"ایمیل"}
                required={true}
                type={"email"}
                style={"w-full bg-secondary"}
                inputStyle={"bg-secondary"}
              />
              <div className="additional-information__wrapper">
                <h4 className="additional-information__title mb-6 text-[26px] font-bold">
                  توضیحات تکمیلی
                </h4>
                <span className="additional-information__subtitle text-[#ffffff99]">
                  توضیحات سفارش (اختیاری)
                </span>
                <textarea
                  className="w-full rounded-3xl outline-none py-2 px-4 text-[14px] mt-4 border border-[#7773] focus:border-[#7777774d] bg-secondary min-h-[190px]"
                  placeholder="یادداشت ها درباره سفارش شما،برای مثال نکات مهم درباره نحوه تحویل سفارش"
                ></textarea>
              </div>
            </form>
            <div className="checkout__section-left-content w-full mt-12 lg:mt-0  lg:w-[40%] xs:max-h-[600px] border-2 border-purple rounded-lg flex flex-col gap-y-8 p-8">
              <h2 className="checkout__section-left-content_title text-[26px] font-bold">
                سفارش شما
              </h2>
              <div className="checkout-left-content__subtitle-wrapper flex flex-wrap sm1:flex-nowrap justify-between  border-b border-b-[#7773] pb-4 -mt-4">
                <span className="font-bold">محصول</span>
                <span className="font-bold">جمع جز</span>
              </div>
              <div className="product-checkout__wrapper flex flex-wrap sm1:flex-nowrap justify-between border-b border-b-[#7773] pb-4 -mt-4">
                <span className="product-title text-[#777]">
                  مورتال کمبت 11 آلتیمیت × 1
                </span>
                <span className="product-price text-purple">
                  {digitsEnToFa(150000)}تومان
                </span>
              </div>
              <div className="checkout-left-content__subtitle-wrapper flex flex-wrap sm1:flex-nowrap justify-between  border-b border-b-[#7773] pb-4 -mt-4">
                <span className="font-bold">جمع جز</span>
                <span className="font-bold text-purple">
                  {digitsEnToFa(150000)}تومان
                </span>
              </div>
              <div className="checkout-left-content__subtitle-wrapper flex flex-wrap sm1:flex-nowrap justify-between  border-b border-b-[#7773] pb-4 -mt-4">
                <span className="font-bold">مجموع</span>
                <span className="font-bold text-purple">
                  {digitsEnToFa(150000)}تومان
                </span>
              </div>
              <p className="checkout-section-left-content__paragpraph mt-4 text-[#777] border-t border-t-[#7773] pt-4">
                داده های شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب
                سایت، مدیریت دسترسی به حساب شما، و برای اهداف دیگری که در سیاست
                حفظ حریم خصوصی ما توضیح داده شده است، استفاده خواهد شد.
              </p>
              <button
                type="button"
                className="aplly-orders__btn shadow-box hover:shadow-boxHover text-[14px] bg-purple px-4 py-3 rounded-3xl"
              >
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
