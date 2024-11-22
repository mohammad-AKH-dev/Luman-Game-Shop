import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SectionHeader from "../sectionHeader/SectionHeader";
import GameBox from "../Box/GameBox";

export default function PremiuemAccounts() {
  return (
    <section className="premium-accounts-section mt-[10rem] relative">
      <div className="bg-premuim__mask max-w-[670px] max-h-[670px] absolute left-0 top-[0] xs:top-[-10rem] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="1000"
          fill="none"
          viewBox="0 0 1000 1000"
          className="w-full h-full"
        >
          <g clipPath="url(#clip0_43544_7499)">
            <mask
              id="mask0_43544_7499"
              width="1000"
              height="1000"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
            >
              <path fill="#fff" d="M1000 0H0v1000h1000z"></path>
            </mask>
            <g mask="url(#mask0_43544_7499)">
              <path
                fill="url(#paint0_radial_43544_7499)"
                d="M1000 0H0v1000h1000z"
              ></path>
            </g>
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_43544_7499"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(90 0 500)scale(500)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6BBB" stopOpacity="0.25"></stop>
              <stop offset="0" stopColor="#FF6BBB" stopOpacity="0.2"></stop>
              <stop offset="1" stopColor="#FF6BBB" stopOpacity="0"></stop>
            </radialGradient>
            <clipPath id="clip0_43544_7499">
              <path fill="#fff" d="M0 0h1000v1000H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="container">
        <SectionHeader title={"خرید اکانت پرمیوم"} />
        <Swiper
          spaceBetween={30}
          modules={[Autoplay, Pagination]}
          autoplay
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination
          loop
        >
          <SwiperSlide>
            <GameBox price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide>
            <GameBox price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide>
            <GameBox price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide>
            <GameBox price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide>
            <GameBox price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide>
            <GameBox price={70000} discount={50000} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
