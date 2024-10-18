import React, { useState, useEffect } from 'react';
import Button from "./Button"
import frame from "../assets/Ellipse 9.png"
import logo from "../assets/logoicon.png"
import arrow from "../assets/Arrowpurple.png"

function NextEvent() {

  const cities = [
    { name: 'Kaduna', animation: 'animate-from-below' },
    { name: 'Kano', animation: 'animate-from-below' },
    { name: 'Abuja', animation: 'animate-from-top' },
  ];
  
    const [currentCity, setCurrentCity] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentCity((prevCity) => (prevCity + 1) % cities.length);
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <main className='bg-cover w-full h-[808px] my-[4rem] el:my-[10rem] text-white flex flex-col items-center justify-center' style={{ backgroundImage: `url(${frame})` }}> 
    <section className="lg:flex items-center justify-between w-full px-4 xl:px-[80px]">
        <div>
            <p className="text-[35px] md:text-[50px] xl:leading-[62px] text-variant4 font-[700]">Founders Friday is coming to</p>

            {cities.map((city, index) => (
        <p
          key={city.name}
          className={`absolute transition-all duration-200 text-[50px] md:text-[128px] xl:leading-[130px] text-variant font-[700] ${
            currentCity === index ? `${city.animation}` : 'opacity-0'
          }`}
        >
          {city.name}
        </p>
      ))}
            <p className="text-[18px] md:text-[24px] font-[400] leading-[28px] text-variant4 mt-[5rem] md:mt-[12rem] xl:mt-[10rem] mb-12 max-w-[810px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
        rutrum felix. Nulla nibh lorem, facilicis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id.
        Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellenteque habitat morbi tristique senectus et netus et 
        malesuada fames ac turpis egestas </p>
        <Button title='Register' icon={arrow} style='border-2 border-variant text-variant px-[70px] py-[15px] rounded-[40px] font-[600] ' />
        </div>

        <div>
            <img src={logo} alt="logo" className="hidden lg:flex" />
        </div>
    </section>
    </main>
  )
}

export default NextEvent;