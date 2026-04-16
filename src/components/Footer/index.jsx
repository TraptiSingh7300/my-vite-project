import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { PiKeyReturnBold } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-6  bg-white">
        <div className="container">
          <div className="flex items-center justify-center gap-2 pb-5 py-5 bg-[#e2e1e1]">
            <div className="col flex items-center justify-center flex-col group w-[18%]">
              <FaShippingFast className="text-[40px] transition-all duration-300 text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">
                For all Orders Over ₹1000
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[18%]">
              <PiKeyReturnBold className="text-[40px] transition-all duration-300 text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[18%]">
              <MdOutlinePayment className="text-[40px] transition-all duration-300 text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[18%]">
              <FaGift className="text-[40px] transition-all duration-300 text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[18%]">
              <BiSupport className="text-[40px] transition-all duration-300 text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div className="footer flex py-4">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[20px] font-[600] mb-4">Contact Us</h2>
              <p className="text-[13px] font-[400] pb-4">
                507-Union Trade Centre
                <br /> India
              </p>
              <Link
                to="mailto:someone@example.com"
                className="link text-[13px]"
              >
                support@classyshop.site
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                (+91) 9112345678
              </span>
              <div className="flex items-center gap-2">
                <HiOutlineChatBubbleLeftRight className="text-[30px]" />
                <span className="text-[16px] font-[600] pl-5">
                  Online Chat
                  <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[20px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Prices Drop
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Support
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[20px] font-[600] mb-4">Our Company</h2>
                <ul className="list">
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Terms And Conditions Of Use
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part3 w-[35%] flex pl-8 flex-col pr-8">
              <h2 className="text-[20px] font-[600] mb-4">
                Subscribe To Newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get
                <br /> news about special discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[#000]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions and the privacy policy"
                  className="mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)]">
        <div className="container flex items-center justify-between flex-col pb-4">
          <ul className="flex items-center gap-2 p-4">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaXTwitter className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaYoutube className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            </ul>
            <p className="text-[13px] text-center">© 2026 - Ecommerce Platform</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
