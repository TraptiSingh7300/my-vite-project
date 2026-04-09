import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";

const ProductItem = ({ image, hoverImage, brand, title, oldPrice, price, discount, rating }) => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="imgWrapper w-[100%] rounded-md relative">
        <Link to="/">
          <div className="group img h-[250px] overflow-hidden relative">
            <img src={image} className="w-full" alt={title} />
            <img
              src={hoverImage}
              className="w-full opacity-0 transition-opacity duration-300 ease-in-out absolute top-0 left-0 group-hover:opacity-100"
              alt={title}
            />
            <div className="actions absolute top-[15px] right-[-25px] z-50 flex items-center gap-2 flex-col w-[18px] transition-all duration-400 group-hover:right-[15px] opacity-0 group-hover:opacity-100">
              <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary hover:text-white group">
                <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white" />
              </Button>
              <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary hover:text-white group">
                <LuGitCompareArrows className="text-[18px] !text-black group-hover:text-white" />
              </Button>
              <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary hover:text-white group">
                <FaRegHeart className="text-[18px] !text-black group-hover:text-white" />
              </Button>
            </div>
          </div>
        </Link>
        {discount && (
          <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md p-1 text-[12px] font-[500]">
            {discount}%
          </span>
        )}
      </div>
      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            {brand}
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            {title}
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={rating} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            {oldPrice}
          </span>
          <span className="price text-primary text-[15px] font-[600]">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
