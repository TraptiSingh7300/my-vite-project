import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Don’t miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>
          <ProductsSlider items={5} />
        </div>
        <div></div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto p-4 border border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[25px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over ₹2000
              </p>
            </div>
            <p className="font-bold text-[25px]">- Only 2000*</p>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={5} />

          <AdsBannerSlider items={2} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={5} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem
                img={
                  "https://res.cloudinary.com/dmynyjsmt/image/upload/v1774681767/falcon/image/vendor/xsx798dvr0nsn4pwnkn8.jpg"
                }
                date={"5 APRIL, 2026"}
                text={
                  "5 Living Room Updates That Make a Small Space Feel Premium"
                }
                para={
                  "From softer textures to smarter furniture placement, these practical living room updates can instantly make a compact home look brighter, calmer and more expensive without a full redesign."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem
                img={
                  "https://res.cloudinary.com/dmynyjsmt/image/upload/v1774681778/falcon/image/vendor/kj0pslgtr0vgaby2uqwm.jpg"
                }
                date={"4 MARCH, 2026"}
                text={
                  "How Immersive Tech Is Changing At-Home Entertainment"
                }
                para={
                  "VR headsets and smart wearables are no longer niche gadgets. Here is what to look for in comfort, display quality, audio, and everyday usability before bringing immersive tech home."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem
                img={
                  "https://res.cloudinary.com/dmynyjsmt/image/upload/v1774681789/falcon/image/vendor/d64yovtbuda4nngisjyt.jpg"
                }
                date={"18 MARCH, 2026"}
                text={
                  "Wireless Earbuds Buying Guide for Work, Travel, and Daily Use"
                }
                para={
                  "The best earbuds are not only about sound quality. Fit, battery life, call clarity, and case design matter just as much when you want one pair that works through meetings, commutes, and workouts."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem
                img={
                  "https://res.cloudinary.com/dmynyjsmt/image/upload/v1774681861/falcon/image/vendor/pc20r0zrfvnzayyyjz1c.jpg"
                }
                date={"12 FEBRUARY, 2026"}
                text={
                  "5 Living Room Updates That Make a Small Space Feel Premium"
                }
                para={
                  "From softer textures to smarter furniture placement, these practical living room updates can instantly make a compact home look brighter, calmer, and more expensive without a full redesign."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem
                img={
                  "https://res.cloudinary.com/dmynyjsmt/image/upload/v1774681897/falcon/image/vendor/m1u2d4vdno24bapqpvwl.jpg"
                }
                date={"4 MARCH, 2026"}
                text={
                  "How Immersive Tech Is Changing At-Home Entertainment"
                }
                para={
                  "VR headsets and smart wearables are no longer niche gadgets. Here is what to look for in comfort, display quality, audio, and everyday usability before bringing immersive tech home."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      
      <Footer/>

    </>
  );
};

export default Home;
