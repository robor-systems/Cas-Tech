import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../components/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BrowserRouter } from "react-router-dom";

const castechLogo =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/logo/CASTechnology+Inc.png";
const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const openMenu = () => {
    setHamMenu(!hamMenu);
  };

  return (
    <BrowserRouter>
      <div className="relative w-full">
        <div className="z-20 bg-[#fff] fixed flex justify-between items-center shadow-[0px_3px_10px_#00000014]  w-full">
          <img
            src={castechLogo}
            alt="logo"
            className="pl-[30px] md:pl-[56px] pt-[27px] pb-[26px]"
          />

          <ul className=" hidden md:flex md:items-center ">
            <li className="px-4 text-text-primary">
              {" "}
              <AnchorLink href="#service">Services</AnchorLink>
            </li>
            <li className="px-4  text-text-primary">
              <AnchorLink href="#about"> About Us</AnchorLink>
            </li>
            <li className="px-4  text-text-primary">
              <AnchorLink href="#career"> Career</AnchorLink>
            </li>
            <div className="pl-4 mr-[56px] w-[130px]">
              <Button size={"sm"}> Contact Us</Button>
            </div>
          </ul>

          <div onClick={openMenu} className="grid  right-0 md:hidden mr-[20px]">
            {hamMenu ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
          {hamMenu && (
            <ul className="grid items-center md:hidden absolute bg-[#fff] top-[80px] w-full">
              <li className="flex justify-center  py-[24px] border-t  border-b border-[#EEF2F6]  text-text-primary">
                Services
              </li>
              <li className="flex justify-center py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
                About Us
              </li>
              <li className="flex justify-center py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
                Career
              </li>
              <div className="flex justify-center py-[24px] ">
                <Button size="md"> Contact Us</Button>
              </div>
            </ul>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
