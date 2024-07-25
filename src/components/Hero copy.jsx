import React from "react";
import Button from "./Button";
import arrow from "../assets/arrow.png";
import playBtn from "../assets/play.png";
import ribbon from "../assets/ribbon.png";
import heroImg from "../assets/heroimg.png";
import heroSplash from "../assets/splash1.png";
import star1 from "../assets/Star 1.png";
import star2 from "../assets/Star 2.png";
import star3 from "../assets/Star 3.png";

function Hero() {
  return (
    <section className="flex relative max-w-[1090px] justify-start items-start m-auto ">
      <div className="flex flex-col mt-[115px] ">
        <h2 className="font-bold capitalize leading-[64px] z-2   text-[64px] max-w-[618px]">
          make the best financial decisions
        </h2>
        <p className=" text-lg mt-2 font-medium z-2 text-secondary capitalize w-[638px]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex items-center justify-start gap-10">
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
        <div className="flex relative justify-start ml-[-30px]  items-start mt-4">
          <img src={ribbon} className="w-[569px] h-[357.74px]" alt="" />
          <img
            src={star3}
            className="w-[48px] absolute left-[150px] top-[40px]"
            alt=""
          />
        </div>
      </div>

      <div className="bg-red-500">
        <img
          src={heroImg}
          className=" mt-[-40px] max-w-[60%] ml-[-40px] absolute"
          alt=""
        />
      </div>
      <img
        src={star2}
        className="absolute top-[510px] w-[48px] right-[280px] "
        alt=""
      />
      <img
        className="absolute z-[-1] top-0 ml-16 mt-[-50px]"
        src={heroSplash}
        alt=""
      />
      <img src={star3} className="absolute left-[-100px] w-[48px] " alt="" />
      <img
        className="absolute max-w-[64px] top-[-30px] right-[-100px]"
        src={star1}
        alt=""
      />
    </section>
  );
}

export default Hero;
