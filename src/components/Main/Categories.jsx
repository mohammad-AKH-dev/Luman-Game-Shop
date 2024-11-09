import SectionHeader from "../sectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CategoryBox from "../Box/CategoryBox";
import "swiper/css";
import "swiper/css/autoplay";

export default function Categories() {
  return (
    <div className="mt-[10rem] bg-category min-h-[48rem] bg-no-repeat bg-center bg-cover flex items-center">
      <div className="container">
        <SectionHeader title={"دسته بندی ها"} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          loop
          autoplay
          slidesPerView={2}
          breakpoints={{
            768:{
              slidesPerView: 6,
              spaceBetween: 120
            },
            950: {
              spaceBetween: 0
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 120
            }
          }}
          grabCursor
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
          <SwiperSlide className="max-w-[173px]">
            <CategoryBox title={"ویندوز"} subtitle={"Windows"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
