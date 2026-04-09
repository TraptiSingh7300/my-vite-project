import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  const products = [
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711498/falcon/image/vendor/jfmfj1gddptpc0vasbve.jpg",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711498/falcon/image/vendor/vikk46nj6kwkbi2mehra.webp",
      brand: "Gespo",
      title: "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeve Casual T-Shirts",
      oldPrice: "₹1999",
      price: "₹699",
      discount: 65,
      rating: 2,
    },
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711359/falcon/image/vendor/vftd4usdticglxp15zx4.jpg",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711359/falcon/image/vendor/vrxenwfn187sdxytok0f.jpg",
      brand: "Gant",
      title: "Solid Polo Neck Regular Fit T-Shirt",
      oldPrice: "₹1599",
      price: "₹500",
      discount: 69,
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711162/falcon/image/vendor/wfiaj4tzcfo5v5llmspd.jpg",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711162/falcon/image/vendor/jsypfuqucspzvxijwnwk.jpg",
      brand: "Polo",
      title: "Polo Collar Pure Cotton T-shirt",
      oldPrice: "₹999",
      price: "₹299",
      discount: 70,
      rating: 5,
    },
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711597/falcon/image/vendor/zicuxrxlbhchuupadry5.webp",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754711597/falcon/image/vendor/sgoh8kij9e9nal6zc1kf.jpg",
      brand: "Rare Rabbit",
      title: "Men Layerr Regular Fit Spread Collar Cotton Shirt",
      oldPrice: "₹1499",
      price: "₹599",
      discount: 60,
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754627469/falcon/image/vendor/i0sw0jewad8vsgdfajn9.jpg",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754627469/falcon/image/vendor/ymnimvvbhm0pwprfe0ki.jpg",
      brand: "kasee",
      title: "Floral Embroidered Saree",
      oldPrice: "₹3248",
      price: "₹1899",
      discount: 42,
      rating: 4,
    },
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754578527/falcon/image/vendor/czeh65zsbvbvndujksff.avif",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754578527/falcon/image/vendor/ltrv1ageflxjbbbcizt7.avif",
      brand: "FtDiva",
      title: "mandarin collar printed anarkali kurta",
      oldPrice: "₹899",
      price: "₹785",
      discount: 13,
      rating: 3,
    },
    {
      image: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754576898/falcon/image/vendor/ivcolzyw9t8q4plokwvj.jpg",
      hoverImage: "https://res.cloudinary.com/dmynyjsmt/image/upload/v1754576898/falcon/image/vendor/vkgxt1lyzxyldmifadht.jpg",
      brand: "Denim",
      title: "Women Wide Leg High-Rise Light Fade Stretchable Jeans",
      oldPrice: "₹1200",
      price: "₹999",
      discount: 65,
      rating: 2,
    }
  ];

  return (
    <div className="productsSlider py-3">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
