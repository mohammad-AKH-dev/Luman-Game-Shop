import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import GameBox from "../Box/GameBox";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { digitsEnToFa } from "@persian-tools/persian-tools";
export default function Discount() {
  return (
    <div className="discount-section w-full container bg-secondary py-9 px-6 flex flex-col lg:flex-row items-center justify-center rounded-2xl">
      <div className="w-[240px] discount-time__box">
        <img
          src="https://theme.fullwp.ir/luman/game/wp-content/uploads/2023/06/offer2.png"
          alt=""
        />
        <div className="discount-caption__wrapper text-center mt-4">
          <h3 className="discount-title text-[36px] font-secondary font-bold">
            تخفیفات لحظه ای
          </h3>
          <p className="discount-subtitle text-[18px] text-[#979797]">
            زمان باقی مانده تا پایان تخفیف
          </p>
          <div className="discount-timer grid grid-cols-3 items-center xl:grid-cols-4 justify-center gap-1 xl:gap-2 mt-4">
            <div className="discount-box__days flex flex-col order-3 xl:order-4 text-xl rounded-md  bg-purple h-[55px] max-w-[60px]">
              {digitsEnToFa(102)}
              <span className="text-[10px] text-[#fffcfc99] pb-1">DAYS</span>
            </div>
            <div className="discount-box__hour flex flex-col order-2 xl:order-3 text-xl rounded-md  bg-purple h-[55px] max-w-[60px]">
              {digitsEnToFa(12)}
              <span className="text-[10px] text-[#fffcfc99] pb-1">HR</span>
            </div>
            <div className="discount-box__min flex flex-col order-1 xl:order-2 text-xl rounded-md  bg-purple h-[55px] max-w-[60px]">
              {digitsEnToFa(3)}
              <span className="text-[10px] text-[#fffcfc99] pb-1">MIN</span>
            </div>
            <div className="discount-box__sec flex flex-col order-4 xl:order-1 text-xl rounded-md relative -left-[5.1rem] top-4 xl:static bg-purple h-[55px] max-w-[60px]">
              {digitsEnToFa(20)}
              <span className="text-[10px] text-[#fffcfc99] pb-1">SC</span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="swiper w-full lg:max-w-[690px] xl:max-w-[850px]"
        modules={[Autoplay, Pagination]}
        grabCursor
        autoplay
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        loop
      >
        <SwiperSlide>
          <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
        </SwiperSlide>
        <SwiperSlide>
          <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
        </SwiperSlide>
        <SwiperSlide>
          <GameBox title={"اسپایدرمن"} price={70000} />
        </SwiperSlide>
        <SwiperSlide>
          <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
        </SwiperSlide>
        <SwiperSlide>
          <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
        </SwiperSlide>
        <SwiperSlide>
          <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
