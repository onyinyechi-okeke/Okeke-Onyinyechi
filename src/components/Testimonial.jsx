import frame from "../assets/Ellipse 12.png"
import next from "../assets/next.png"
import back from "../assets/carousel back.png"

function Testimonial() {

  const duplicate = [1, 2, 3]
  return (
    <main className="flex flex-col items-center justify-center w-full px-4 xl:px-[80px]" >
      <section className="md:flex items-center w-full">
        <div className="flex-grow text-center lg:ml-[10rem]">
          <p className="text-[35px] lg:text-[45px] lg:leading-[56px] font-[700]">What Do Our Attendees Have To Say?</p>
          <p className="text-[24px] leading-[28px] text-gray mt-[20px]">Well See For Yourself!</p>
        </div>

        <figure className="flex gap-[30px] justify-center lg:justify-normal">
          <img src={back} alt="icon" />
          <img src={next} alt="icon" />
        </figure>
      </section>

      <section className="mt-[4rem] flex justify-center md:gap-[50px] xl:gap-[100px] w-full">
        {duplicate.map((index) =>(
                    <div key={index} className="text-center ">
                    <img src={frame} alt="picture" className="mx-auto w-[50%] md:w-full" />
                    <p className="md:text-[30px] md:leading-[37.5px] font-[600] md:mt-[30px] mb-[15px]">Mr. Belba Ngoy</p>
                    <p className="md:text-[24px] md:leading-[28px] font-[400]">Always a remarkable experience <br/> for my team and myself</p>
                  </div>
        ))}
        </section>
    </main>
  )
}

export default Testimonial