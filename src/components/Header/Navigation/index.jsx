import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-10">
          <div className="col_1 w-[20%] border-r-[1px] border-gray-250">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <TfiAngleDown className="text-[13px] ml-auto" />
            </Button>
          </div>

          <div className="col_2 w-[80%]">
            <ul className="flex items-center justify-evenly gap-3 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                      <div className="submenu absolute top-[30%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Saree
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Tops
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Jeans
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Kurtas & Suits
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Girl
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Electronics
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Mobiles
                        </Button>
                      </Link>
                      <div className="submenu absolute top-[30%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Apple
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Samsung
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Vivo
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Oppo
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Laptops
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Watch
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Men Bags
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Women Bags
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Men Footwear
                        </Button>
                      </Link>
                      <div className="submenu absolute top-[30%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Sports
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                Casual
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Women Footwear
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Vegetables
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Fruits
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
