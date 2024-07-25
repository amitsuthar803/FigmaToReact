import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import splash2 from "../assets/splash2.png";
import Advantages from "../components/Advantages";
// import Testimonial from "../components/Testimonial";
// import Faq from "../components/Faq";
// import Download from "../components/Download";
// import About from "../components/About";

function Home() {
  return (
    <div className="">
      <Hero />

      <div className="relative">
        <Features />
        <img
          src={splash2}
          className="absolute right-[0px] z-[-1] top-[-10px] "
          alt=""
        />
      </div>

      <Advantages />
      {/* <Testimonial /> */}
      {/* <Faq /> */}
      {/* <Download /> */}
      {/* <About /> */}
    </div>
  );
}

export default Home;
