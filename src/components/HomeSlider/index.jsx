import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation,Autoplay]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1774679510/falcon/image/vendor/btu3jzxgg4tlc77eww9a.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1774679505/falcon/image/vendor/kv34xhjzworrwvd6xsiq.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1774679521/falcon/image/vendor/ipxjmgxrllnbs0tjd8dl.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1774679526/falcon/image/vendor/fsiioydhumcsytxezkw8.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-3xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/dmynyjsmt/image/upload/v1774679516/falcon/image/vendor/pkbevvdiy8tlmgohiv2g.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
