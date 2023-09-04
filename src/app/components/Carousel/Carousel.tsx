import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay]);

export default function Carousel() {
  return (
    <div className="mt-24">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 8000, // Delay in milliseconds between each slide
          disableOnInteraction: false, // Autoplay will not stop when user interacts with Swiper
        }}
      >
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover  bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bgmatatag.jpg')",
              height: "450px",
              backgroundPosition: "50%",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center h-80  "></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover  bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bgmatatag.jpg')",
              height: "450px",
              backgroundPosition: "50%",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center h-80  "></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover  bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bgmatatag.jpg')",
              height: "450px",
              backgroundPosition: "50%",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center h-80  "></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover  bg-no-repeat"
            style={{
              backgroundImage: "url('/images/bgmatatag.jpg')",
              height: "450px",
              backgroundPosition: "50%",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center h-80  "></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
