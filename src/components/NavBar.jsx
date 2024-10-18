import { useState } from "react";
import Button from "./Button";
import logo from "../assets/biglogo.png";
import arrow from "../assets/arrow-right.png";
import Links from "./Links";
import { FaTimes, FaBars } from "react-icons/fa";

function NavBar() {
  const [nav, setNav] = useState(false);
  

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <section className='bg-background h-[125px] fixed w-full el:w-[1728px] flex items-center px-4 xl:px-[80px] justify-between border-b-[0.5px] border-secondary1 z-50 top-0'>
      <figure>
        <img src={logo} alt="logo" className="w-[90%] md:w-[100%]" />
      </figure>

      <div className="flex items-center gap-[100px]">
        <Links style='hidden el:flex' />
        <Button title='Register' icon={arrow} style='px-[30px] py-[10px] border-2 border-primary text-primary font-[500] rounded-[20px] hidden el:flex' />
      </div>

      
      <div className='el:hidden cursor-pointer pr-4 z-10' onClick={openNav}>
        {!nav ? <FaBars size={30} className='nav-icon transition-all duration-500 ease-in-out' /> : <FaTimes size={30} className='nav-icon transition-all duration-500 ease-in-out' />}
      </div>

  
      {nav && (
        <section className="absolute right-0 top-0 bg-background w-full h-screen flex flex-col items-center">
          <Links style='flex flex-col items-center mt-[5rem]' />
          <Button title='Register' icon={arrow} style='px-[30px] py-[10px] border-2 border-primary text-primary font-[500] rounded-[20px] mt-4' />
        </section>
      )}
    </section>
  );
}

export default NavBar;
