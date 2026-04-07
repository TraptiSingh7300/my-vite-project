import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white transition-all text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px]">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754022985/falcon/image/vendor/upakt1j4nvpzzg3ocivk.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018306/falcon/image/vendor/wz31tb7kajnullkfja6q.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018386/falcon/image/vendor/pmjxofixtkgfbonyycqh.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018427/falcon/image/vendor/bx8ibtvj1v0ooybmimik.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018494/falcon/image/vendor/n8e7qzdgsped9dj5exs2.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018505/falcon/image/vendor/io1kap5ghjmryj5wvfb9.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018517/falcon/image/vendor/caqp2gt3n3vtw6ueyyuw.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <Link>
              <div className="item p-3 bg-white text-center flex items-center justify-center flex-col h-[150px] rounded-xl border-[2px] transition-all">
                <img
                  src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1754018542/falcon/image/vendor/vkqqplz3f3w9cdasicx5.png"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] font-[500] p-4">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
