import React from "react";
import phone1 from "../assets/advantagephone-1.png";
import phone2 from "../assets/advantagephone-2.png";
import splash4 from "../assets/splash4.png";
import bell from "../assets/bell-icon.png";
import star from "../assets/star-icon.png";
import star1 from "../assets/Star 1.png";
import star3 from "../assets/Star 3.png";

function Advantages() {
  return (
    <section className="advantages m-auto  max-w-[1090px]">
      <div className="flex relative  items-center m-auto justify-between">
        <div className="flex flex-col justify-start items-start">
          <div>
            <span className="text-primary uppercase font-medium text-lg tracking-widest">
              advatnages
            </span>
            <h2 className="font-bold capitalize text-5xl">why choose Uifry?</h2>
          </div>
          <div className="flex flex-col relative">
            <div className="flex items-center mt-2 justify-start">
              <div className="w-[48.26px] h-[48.26px] rounded-full flex items-center justify-center  bg-primary">
                <img src={bell} className="z-10" alt="" />
              </div>
              <h4 className="ml-[15px]  text-black font-semibold text-[28px] ">
                clever notifications
              </h4>
            </div>
            <p className="max-w-[537px] text-[18px] font-medium text-secondary mt-6">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        {/* 2 */}

        <div className="relative">
          <img
            src={phone1}
            className="max-w-[724px] max-h-[724px] mt-[-80px]  ml-[-100px]"
            alt=""
          />
          <img
            src={splash4}
            className="absolute bottom-[120px] z-[-1] left-[-150px]"
            alt=""
          />
          <img
            src={star1}
            className="w-[64.34px] absolute top-0 right-[-170px]"
            alt=""
          />
        </div>
      </div>

      <div className="flex relative  items-center m-auto justify-between">
        <div className="relative">
          <img
            src={phone2}
            className="max-w-[724px] max-h-[724px] ml-[-100px]"
            alt=""
          />
          <img
            src={splash4}
            className="absolute bottom-[120px] z-[-1] left-[-150px]"
            alt=""
          />
          <img
            src={star3}
            className="w-[48.26px] right-[70px] absolute top-0"
            alt=""
          />
          <img
            src={star1}
            className="w-[64.34px] absolute bottom-0 right-[-350px]"
            alt=""
          />
        </div>
        {/* 2 */}
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-col">
            <div className="flex items-center  justify-start">
              <div className="w-[48.26px] h-[48.26px] rounded-full flex items-center justify-center  bg-primary">
                <img src={star} className="z-10" alt="" />
              </div>
              <h4 className="ml-[15px]  text-black capitalize  font-semibold text-[28px] ">
                fully customizable
              </h4>
            </div>
            <p className="max-w-[537px] text-[18px] font-medium text-secondary mt-6">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
