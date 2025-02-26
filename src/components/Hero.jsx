import React from "react";
import Button from "./Button";
import arrow from "../assets/arrow.png";
import playBtn from "../assets/play.png";
import ribbon from "../assets/ribbon.png";
import phone1 from "../assets/herophone-1.png";
import phone2 from "../assets/herophone-3.png";
import heroSplash from "../assets/splash1.png";
import star1 from "../assets/Star 1.png";
import star2 from "../assets/Star 2.png";
import star3 from "../assets/Star 3.png";
import ring from "../assets/ring1.png";

function Hero() {
  return (
    <section
      id="hero"
      className="flex relative mb-20 max-w-[1090px] justify-start items-start m-auto "
    >
      <div className="flex flex-col mt-[115px] ">
        <h2 className="font-bold capitalize leading-[64px] z-2   text-[64px] max-w-[618px]">
          make the best financial decisions
        </h2>
        <p className=" text-lg mt-6 font-medium z-2 text-secondary capitalize w-[638px]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex items-center justify-start gap-10 mt-[6px]">
          <Button className="" variant="primary" size="large">
            Get Started <img src={arrow} className=" max-w-6 ml-2" alt="" />
          </Button>

          <button className="flex items-center justify-start gap-[14px]">
            <img src={playBtn} className=" max-w-[28px] max-h-[28px]" alt="" />
            <a href="#" className=" capitalize  text-black text-lg leading-7">
              watch video
            </a>
          </button>
        </div>
        <div className="flex relative justify-start ml-[-34px]  items-start mt-4">
          <img src={ribbon} className="max-w-[569px] " alt="" />
          <img
            src={star3}
            className="w-[48px] absolute left-[150px] top-[46px]"
            alt=""
          />
        </div>
      </div>

      <div className="flex-1 relative bg-red-500">
        <img
          src={phone1}
          className="absolute z-20 left-[-34px] mt-4 max-h-[551.65px]"
          alt=""
        />
        <img
          src={phone2}
          className="absolute right-[-9px] max-h-[552.42px] z-10  top-[93px]"
          alt=""
        />
        <img
          src={phone1}
          className="absolute right-[-133px] max-h-[551.65px] top-[161px]"
          alt=""
        />
      </div>
      <img
        src={star2}
        className="absolute top-[50px] w-[48px] right-[280px] "
        alt=""
      />
      <img
        className="absolute z-[-1] top-0 ml-16 mt-[-50px]"
        src={heroSplash}
        alt=""
      />
      <img
        src={star3}
        className="absolute left-[-109px] w-[48px] top-[2px] "
        alt=""
      />
      <img
        className="absolute max-w-[64px] top-[-43px] right-[-120px]"
        src={star1}
        alt=""
      />
      <img
        src={ring}
        className="absolute top-[-27px] right-[-180px] z-[-1] max-w-[725.49px] max-h-[725.49px]"
        alt=""
      />
    </section>
  );
}

export default Hero;
