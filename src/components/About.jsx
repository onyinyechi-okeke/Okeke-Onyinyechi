import Button from './Button'
import arrow from '../assets/ArrowRight.png'
import frame from '../assets/Ellipse 6.png'
import line from '../assets/Line 1.png'
import money from '../assets/money.png'


function About() {
  return (
    <main className='relative mt-[80px] el:mt-[200px] el:flex xl:pr-[80px] mb-[70px] el:mb-[8rem] xl:pl-[85px] px-4 xl:px-0'>
        <img src={frame} alt='group picture' />

        <img src={line} alt='line' className='hidden el:flex mt-3 mb-3 ml-[20px]' />
        
        <section>
           <p className='text-[30px] md:text-[45px] font-[700] mt-3 el:mt-[-16px]'>Who Are We?</p>
           <p className='text-gray text-[18px] md:text-[24px] leading-[28.8px] xl:mt-8 max-w-[720px]'>Born from the vibrant startup ecosystem of Abuja, we recognized  the need for a consistent, 
            high-quality networking platform where 
           founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaborations </p>
           
           <div className='xl:flex gap-[36px] mt-4 el:mt-[6rem]'>
            <Button  title='Register' icon= {arrow}  style='text-white bg-variant rounded-[40px] py-[15px] px-[70px] font-[600] mb-3 xl:mb-0' />
            <Button title='Donate' icon={money} style='text-variant border-2 border-variant rounded-[40px] py-[15px] px-[70px] font-[600]' />
            </div>
          <p className='mt-4 el:mt-[10rem] text-[18px] md:text-[24px] font-[700]'>Founder's Friday is more than just a meetup - it's a movement.</p>
        </section>
    </main>
  )
}

export default About