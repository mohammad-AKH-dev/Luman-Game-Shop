import { Swiper, SwiperSlide } from "swiper/react";
import GameBox from "../Box/GameBox";
import { Autoplay, Pagination } from "swiper/modules";
import SectionHeader from "../sectionHeader/SectionHeader";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function PlayStationGamesSlider() {
  return (
    <section className="playstation-games-section">
       <div className="container">
      <div className="playstation-Games mt-40 relative">
        <div className="playstation-Games__bg-circle max-w-[400px] max-h-[400px] top-[-8rem] right-[5rem] md:max-w-[450px] md:max-h-[450px] lg:max-w-[500px] lg:max-h-[500px] xl:max-w-[669px] xl:max-h-[669px] absolute md:top-[-13rem] md:right-[2rem] lg:top-[-10rem] lg:right-0 xl:top-[-16rem] xl:right-[-4rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1000"
            height="1000"
            fill="none"
            className="mdl-js w-full h-full"
            viewBox="0 0 1000 1000"
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
        <SectionHeader title={"اکانت قانونی پلی استیشن"} />
        <Swiper
          className="playstation-Games__wrapper mt-12"
          modules={[Autoplay, Pagination]}
          grabCursor
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          loop
        >
          <SwiperSlide className="lg:w-[25%]">
            <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide className="lg:w-[25%]">
            <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide className="lg:w-[25%]">
            <GameBox title={"اسپایدرمن"} price={70000}/>
          </SwiperSlide>
          <SwiperSlide className="lg:w-[25%]">
            <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide className="lg:w-[25%]">
            <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
          </SwiperSlide>
          <SwiperSlide className="lg:w-[25%]">
            <GameBox title={"اسپایدرمن"} price={70000} discount={50000} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </section>
  );
}
