import React, { useEffect, useState } from "react";

import runthrough from "../assets/firstrunthrough.png"
import HeroSection from "../components/HeroSection"
import Offer from "../components/Offer"
import About from "../components/About"
import Event from "../components/Event"
import NextEvent from "../components/NextEvent"
import Sponsor from "../components/Sponsor"
import Button from "../components/Button"
import frame1 from "../assets/Frame 16.png"
import frame2 from "../assets/Frame 17.png"
import frame3 from "../assets/Frame 20.png"
import frame4 from "../assets/Frame 22.png"
import line from "../assets/Vector 3.png"
import frame5 from "../assets/Ellipse 8.png"
import line1 from "../assets/line 2.png"
import frame6 from "../assets/Ellipse 10.png"
import arrow from "../assets/Arrowpurple.png"
import Join from "../components/Join"
import Testimonial from "../components/Testimonial"
import Faq from "../components/Faq"
import Penultimate from "../components/Penultimate"
import Footer from "../components/Footer"

function Home() {

  const [showRunthrough, setShowRunthrough] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowRunthrough(true), 500);

    setTimeout(() => setShowContent(true), 700);

    setTimeout(() => setShowImages(true), 600);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 100); 
  }, []);

  return (
    <div className="pt-[180px] xl:pt-[246px] relative w-full overflow-hidden">
        <figure className={`hidden el:block absolute w-full top-20 left-[37%] ${
            showRunthrough ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transform transition-all duration-5000 ease-out `} > 
    <img src={runthrough} alt="runthrough line" />
    </figure>

    <figure className="hidden el:block relative z-10">
        <img
          src={frame1}
          className={`absolute left-[56%] top-[-30px] ${
            showImages ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-20 -rotate-12 -translate-y-10 opacity-0"
          } transform transition-all duration-500 ease-out`}
          alt="Founder's Friday"/>
        <img
          src={frame2}
          className={`absolute top-[122px] left-[71.5%]  ${
            showImages ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-20 rotate-12 -translate-y-10 opacity-0"
          } transform transition-all duration-500 ease-out`}
          alt="Founder's Friday"/>
        <img
          src={frame3}
          className={`absolute left-[57%] top-[440px]  ${
            showImages ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-20 -rotate-12 -translate-y-10 opacity-0"
          } transform transition-all duration-500 ease-out`}
          alt="Founder's Friday"/>
         <img
          src={frame4}
          className={`absolute left-[72%] top-[608px]  ${
            showImages ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-20 rotate-12 -translate-y-10 opacity-0"
          } transform transition-all duration-500 ease-out`}
          alt="Founder's Friday"/>
    </figure>

    <HeroSection showRunthrough={showRunthrough}/>
    <About />
    <Offer />

    <figure className="hidden el:block absolute mt-[-18rem]">
      <img src={line} alt="a line" />
    </figure>

    <figure className="hidden el:block relative z-10">
        <img
          src={frame5}
          className="absolute left-[62%] top-[176px]"
          alt="Founder's Friday"/>
    </figure>

    <Event />
    <Sponsor />
    <NextEvent />

    <section className="w-full flex flex-col items-center text-center relative">
      <p className="text-[35px] xl:text-[45px] xl:leading-[56px] font-[700] mb-[20px]">Register And Be Part of Our Community</p>
      <p className="text-[18px] xl:text-[24px] leading-[28px] font-[400] text-gray">Join our community of over 1000+ founders, developers, and tech junkies in general. <br/>
      Be inspired by people who live to inspire!</p>

      <figure className="hidden xl:block absolute top-[240px]">
        <img src={line1} alt="line" />
      </figure>

      <figure className="hidden xl:block absolute top-[200px]">
        <img src={frame6} alt="line" />
      </figure>

      <Button title='Register Now' icon={arrow} style='border-2 border-variant text-variant px-[70px] py-[15px] rounded-[40px] mt-[2rem] xl:mt-[25rem] ' />
    </section>

    <Join />
    <Testimonial />
    <Faq />
    <Penultimate />
    <Footer />
    </div>
    
  )
}

export default Home;