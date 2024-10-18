import frame1 from '../assets/Ellipse 1.png'
import frame2 from '../assets/Ellipse 2.png'
import frame3 from '../assets/Ellipse 3.png'
import frame4 from '../assets/Ellipse 4.png'
import frame5 from '../assets/Ellipse 5.png'
import download from '../assets/download.png'
import RegisterButton from './RegisterButton'


function HeroSection({showRunthrough}) {

  const images = [frame3, frame1, frame2, frame4, frame5 ];
  return (
    <main className={`relative xl:pl-[80px] px-4 transform transition-all duration-5000 ease-out ${showRunthrough ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
        <p className='text-[18px] font-[600]'>Join our monthly premier meetup for startup founders and tech visionaries</p>
        <p className="text-secondary text-[30px] md:text-[50px] font-[700] mb-[20px] md:mb-[39px]">Connect, Collaborate, Innovate!</p>
        <p className="text-[18px] md:text-[24px] mb-[29px] leading-[36px] max-w-[820px]">Every last friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur,
        or just starting your journey, Founder's friday is your launchpad for new ideas, valuable connections and game-changing  opportunities. </p>

        <RegisterButton />

        <p className='mt-[15px] font-[600] text-seed'>Join Us for our next meetup on the 26th of July, 2024</p>

        <figure className='flex items-center mt-[20px] el:mt-[88px] gap-[20px] md:gap-[32px]'>
          {images.map((img, index) =>(
            <img key={index} src={img} alt='logos' className='w-[15%] md:w-[80px]' />
          ))}
        </figure>

        <div className='flex items-center gap-[15px] mt-[30px]'>
          <p className='text-[14px] font-[700]'>Become a collaborator today</p>
          <img src={download} alt="icon" />
        </div>
        </main>
  )
}

export default HeroSection