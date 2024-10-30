import { Swiper, SwiperSlide } from "swiper/react";
import GameBox from "../Box/GameBox";
import {Autoplay, Pagination} from 'swiper/modules'
import SectionHeader from "../sectionHeader/SectionHeader";
import "swiper/css";
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

export default function PlayStationGamesSlider() {
  return (
    <>
      <div className="playstation-Games mt-40">
        <SectionHeader title={"اکانت قانونی پلی استیشن"} />
        <Swiper
          className="playstation-Games__wrapper"
          modules={[Autoplay,Pagination]}
          
          slidesPerView={4.5}
          spaceBetween={35}
          grabCursor
          autoplay={
            {
                delay:2000,
                disableOnInteraction:false
            }
          }
          pagination={
            {
                enabled: true,
                clickable:true,
                
            }
          }
          loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="w-[25%]">
            <GameBox title={'اسپایدرمن'} price={50000} discount={70000}/>
          </SwiperSlide>
          <SwiperSlide className="w-[25%]">
            <GameBox title={'اسپایدرمن'} price={50000} discount={70000}/>
          </SwiperSlide>
          <SwiperSlide className="w-[25%]">
            <GameBox title={'اسپایدرمن'} price={50000} discount={70000}/>
          </SwiperSlide>
          <SwiperSlide className="w-[25%]">
            <GameBox title={'اسپایدرمن'} price={50000} discount={70000}/>
          </SwiperSlide>
          <SwiperSlide className="w-[25%]">
            <GameBox title={'اسپایدرمن'} price={50000} discount={70000}/>
          </SwiperSlide>
          <SwiperSlide className="w-[25%]">
            <GameBox title={'اسپایدرمن'} price={50000} discount={70000}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
