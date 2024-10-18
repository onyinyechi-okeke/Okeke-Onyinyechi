import Button from "./Button"
import arrow from "../assets/arrow-right white.png"

function Event() {
  return (
    <main className="relative px-4 xl:px-0 xl:pl-[80px] mt-[5rem] el:mt-[12rem]">
        <p className="text-[30px] text-secondary font-[700] mb-[11px]">Founders Friday</p>
        <p className="text-[40px] md:text-[55px] font-[700] xl:leading-[68px] max-w-[600px]">What Happens At Founders Friday</p>
        <p className="text-[18px] md:text-[24px] text-variant1 font-[400] leading-[28px] my-[45px] max-w-[810px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac 
        rutrum felix. Nulla nibh lorem, facilicis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. 
        Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellenteque habitat morbi tristique senectus et netus et 
        malesuada fames ac turpis egestas </p>
        <Button title='Learn More' icon={arrow} style='bg-primary text-white px-[30px] py-[15px] rounded-[10px]' />
    </main>
  )
}

export default Event