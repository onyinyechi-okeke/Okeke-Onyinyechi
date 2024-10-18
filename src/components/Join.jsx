import Button from './Button'
import arrow from '../assets/ArrowRight.png'
import frame from '../assets/Ellipse 11.png'

function Join() {
  return (
    <main className='my-[5rem] xl:my-[8rem] xl:flex gap-[55px] items-center w-full xl:px-[80px] px-4'>
        <figure className='mb-4 xl:mb-0'>
            <img src={frame} alt='picture' />
        </figure>

        <div>
            <p className='text-[24px] leading-[28px] font-[600] max-w-[600px]'>At Founder's Friday, Every Friday Is a Learning Experience!</p>
            <p className='leading-[21px] font-[600] my-[30px] text-[18px] max-w-[800px]'>Join us in our mission to transform ideas into impact and shape the future of Nigeria's startup landscape. </p>
            <Button title='Register' icon={arrow} style='bg-variant text-white px-[70px] py-[15px] rounded-[40px] ' />
        </div>
    </main>
  )
}

export default Join