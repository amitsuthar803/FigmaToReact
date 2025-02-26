import featuresPhone1 from "../assets/feature-phone-1.png";
import star3 from "../assets/Star 3.png";
import splash3 from "../assets/splash3.png";
import splash2 from "../assets/splash2.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";

function Features() {
  return (
    <section
      id="features"
      className="flex relative mt-[141px]   items-start m-auto  justify-between max-w-[1090px]"
    >
      <div>
        <div className="relative">
          <img
            src={featuresPhone1}
            className="max-w-[719.49px] max-h-[719.49px] mt-[-80px]  ml-[-120px]"
            alt=""
          />
          <img
            src={splash3}
            className="absolute top-0 z-[-1] left-[-100px]"
            alt=""
          />
        </div>
        <div></div>
      </div>
      {/* 2 */}
      <div className="flex flex-col mt-11 ml-[-20px]  justify-start items-start">
        <div>
          <span className="text-primary uppercase font-medium text-lg tracking-widest">
            features
          </span>
          <h2 className="font-bold capitalize text-5xl">uifry premium</h2>
        </div>
        <div className="flex flex-col gap-3">
          <div className="mt-8">
            <span className="flex   text-black text-[18px] font-semibold  capitalize justify-start items-center">
              <img className=" mr-[10px]" src={icon1} alt="" />
              budgeting intervals
            </span>
            <p className="max-w-[641.4px] mt-[10px] capitalize text-secondary text-[16px] font-medium leading-[25px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div>
            <span className="flex   text-black text-[18px] font-semibold  capitalize justify-start items-center">
              <img className=" mr-[10px]" src={icon2} alt="" />
              budgeting intervals
            </span>
            <p className="max-w-[641.4px] mt-[10px] capitalize text-secondary text-[16px] font-medium leading-[25px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div>
            <span className="flex   text-black text-[18px] font-semibold  capitalize justify-start items-center">
              <img className=" mr-[10px]" src={icon3} alt="" />
              budgeting intervals
            </span>
            <p className="max-w-[641.4px] mt-[10px] capitalize text-secondary text-[16px] font-medium leading-[25px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
      <img
        src={star3}
        className="absolute w-[48px] left-[-84px] top-[47px]"
        alt=""
      />
    </section>
  );
}

export default Features;
