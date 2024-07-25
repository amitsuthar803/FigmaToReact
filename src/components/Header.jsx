import React from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";

function Header() {
  return (
    <div className="w-full h-[60px] mt-[40px] ">
      <div className=" max-w-[1090px] m-auto flex items-center justify-between">
        <div className="flex items-center ">
          <img
            src={Logo}
            className=" max-w-[106.18px] max-h-[34.41px]"
            alt=""
          />

          <nav className="ml-9">
            <ul className="flex gap-6">
              <li>
                <a
                  className="font-medium w-[60px]  inline-block text-black text-[20px] leading-7 transition-all duration-100 hover:font-bold hover:text-primary  hover:text-outline"
                  href="home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-medium w-[89px] text-nowrap inline-block text-black text-[20px] leading-7 transition-all duration-100 hover:font-bold hover:text-primary  hover:text-outline"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="font-medium w-[68px]  inline-block text-black text-[20px] leading-7 transition-all duration-100 hover:font-bold hover:text-primary  hover:text-outline"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="font-medium w-[89px]  inline-block text-black text-[20px] leading-7 transition-all duration-100 hover:font-bold hover:text-primary  hover:text-outline"
                  href="#features"
                >
                  Features
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Button className="" variant="primary" size="large">
          Download
        </Button>
      </div>
    </div>
  );
}

export default Header;
