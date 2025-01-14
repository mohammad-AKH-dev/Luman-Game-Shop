import { Link } from "react-router-dom";
import FooterInfoBox from "../Box/FooterInfoBox";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import FooterLinks from "./FooterLinks";
import FooterBox from "../Box/FooterBox";

import headphone from "/images/Icons/location.png"
 export default function Footer() {
  return (
    <footer className="Footer container rounded-xl mt-32 py-12 px-8 bg-secondary">
      {/* Display Flex before 576px */}
      <div className="Footer-items__wrapper w-full flex flex-wrap gap-3 sm1:hidden text-center sm1:text-right">
        <div className="Footer-contacts flex flex-col gap-5 mx-auto sm1:mx-0">
          <img
            src="/images/logo.png"
            className="Footer-logo max-w-[190px] mx-auto sm1:mx-0 sm1:max-w-[137px]"
            alt="Footer"
          />
          <p className="Footer-paragraph max-w-[300px] text-[#a39f9f] text-[15px] leading-[2.3] tracking-wider">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطراست.
          </p>

          <div className="Footer-boxes__wrapper flex flex-col mt-4 gap-4 items-center sm1:items-start">
            <FooterInfoBox
              title={`${digitsEnToFa(9119876543)} - ${digitsEnToFa(
                9119876543
              )}`}
              img={headphone}
            />
            <FooterInfoBox
              title={"ایران - تهران - منطقه 1 - تجریش"}
              img={"/images/Icons/location.png"}
            />
            <FooterInfoBox
              title={"info@example.com"}
              img={"/images/Icons/email-2.png"}
            />
          </div>
        </div>
        <div className="FooterLinks-wrapper w-full mt-[1rem] flex flex-wrap justify-center sm1:justify-start gap-x-28 sm1:gap-x-20 gap-y-[2rem] sm1:grid sm1:grid-cols-2 sm1:min-w-[260px] sm:grid-cols-3">
        <FooterLinks title={"لینک های کاربردی"}>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>وبلاگ</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>درباره ما</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>فروشگاه</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>تماس با ما</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>راهنمای خرید</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>حریم خصوصی و امنیت</Link>
          </li>
        </FooterLinks>
        <FooterLinks title={"خدمات مشتریان"}>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>حریم خصوصی</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>لینک های مفید</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>نحوه ثبت سفارش</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>رویه ثبت سفارش</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>رویه های بازگرداندن کالا</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>پاسخ به پرسش های متداول</Link>
          </li>
        </FooterLinks>
        <FooterLinks title={"ما را دنبال کنید!"}>
          <FooterBox title={"اینستاگرام"} img={"/images/Icons/INSTAGRAM.png"} />
          <FooterBox title={"واتساپ"} img={"/images/Icons/WHATSAPP.png"} />
          <FooterBox title={"توییتر"} img={"/images/Icons/TWITTER.png"} />
          <FooterBox title={"یوتیوب"} img={"/images/Icons/YOUTUBE.png"} />
        </FooterLinks>
        </div>
      </div>
      {/* Display grid after 576 px */}
       <div className="Footer-items__wrapper w-full hidden sm1:grid sm1:grid-cols-2 gap-8 xs2:grid-cols-3 lg:grid-cols-4 text-center sm1:text-right">
        <div className="Footer-contacts flex flex-col gap-5 mx-auto sm1:mx-0">
          <img
            src="/images/logo.png"
            className="Footer-logo max-w-[190px] mx-auto sm1:mx-0 sm1:max-w-[137px]"
            alt="Footer"
          />
          <p className="Footer-paragraph max-w-[300px] text-[#a39f9f] text-[15px] leading-[2.3] tracking-wider">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطراست.
          </p>

          <div className="Footer-boxes__wrapper flex flex-col mt-4 gap-4 items-center sm1:items-start">
            <FooterInfoBox
              title={`${digitsEnToFa(9119876543)} - ${digitsEnToFa(
                9119876543
              )}`}
              img={"/images/Icons/headphone.png"}
            />
            <FooterInfoBox
              title={"ایران - تهران - منطقه 1 - تجریش"}
              img={"/images/Icons/location.png"}
            />
            <FooterInfoBox
              title={"info@example.com"}
              img={"/images/Icons/email-2.png"}
            />
          </div>
        </div>
        
        <FooterLinks title={"لینک های کاربردی"}>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>وبلاگ</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>درباره ما</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>فروشگاه</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>تماس با ما</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>راهنمای خرید</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>حریم خصوصی و امنیت</Link>
          </li>
        </FooterLinks>
        <FooterLinks title={"خدمات مشتریان"}>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>حریم خصوصی</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>لینک های مفید</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>نحوه ثبت سفارش</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>رویه ثبت سفارش</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>رویه های بازگرداندن کالا</Link>
          </li>
          <li className="Footer-links-item text-[#a39f9f]">
            <Link>پاسخ به پرسش های متداول</Link>
          </li>
        </FooterLinks>
        <FooterLinks title={"ما را دنبال کنید!"} width={true} >
          <FooterBox title={"اینستاگرام"} img={"/images/Icons/INSTAGRAM.png"} />
          <FooterBox title={"واتساپ"} img={"/images/Icons/WHATSAPP.png"} />
          <FooterBox title={"توییتر"} img={"/images/Icons/TWITTER.png"} />
          <FooterBox title={"یوتیوب"} img={"/images/Icons/YOUTUBE.png"} />
        </FooterLinks>
        
      </div>
      <div className="Footer-bar bg-footer flex flex-col text-center gap-4 justify-center sm1:flex-row items-center sm1:justify-between px-8 py-6 rounded-2xl mt-12">
        <div className="Footer-copy__item text-[14px]">
          کپی رایت© 2022 برند شما. تمامی حقوق محفوظ است.
        </div>
        <div className="Footer-img__wrapper w-[150px]">
          <img
            className="Footer-logo w-[38px] mx-auto sm1:mx-0 h-[32px]"
            src="/images/Icons/logo2.png"
          />
        </div>
        <div className="Footer-copy__item text-[14px]">Copyright © 2023 fullwp.ir</div>
      </div>
    </footer>
  );

}
