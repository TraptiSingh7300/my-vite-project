import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[18px] font-[500] border-b-[1px] border-gray-250 flex items-center justify-between">
        Shop By Categories{" "}
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="text-[24px] cursor-pointer"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Men
                    </Button>
                  </Link>
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Saree
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Tops
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Jeans
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Kurtas & Suits
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Girl
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Electronics
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Mobiles
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Apple
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Samsung
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Vivo
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Oppo
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Laptops
                    </Button>
                  </Link>
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Smart Watch
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Bags
              </Button>
            </Link>
            {submenuIndex === 2 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Men Bags
                    </Button>
                  </Link>
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women Bags
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Footwear
              </Button>
            </Link>
            {submenuIndex === 3 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(3)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(3)}
              />
            )}

            {submenuIndex === 3 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Men Footwear
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 3 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(3)}
                    />
                  )}

                  {innerSubmenuIndex === 3 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Sports
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link transition w-full !text-left !justify-start !px-3 text-[14px]"
                        >
                          Casual
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Women Footwear
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Groceries
              </Button>
            </Link>
            {submenuIndex === 4 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(4)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(4)}
              />
            )}

            {submenuIndex === 4 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Vegetables
                    </Button>
                  </Link>
                </li>
                <li className="list-none relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Fruits
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Beauty
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Wellness
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Jewellery
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
