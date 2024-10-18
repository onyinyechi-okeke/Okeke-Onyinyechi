import dropdown from "../assets/dropdown.png"

function Faq() {
    const Faq = [1, 2, 3, 4, 5, 6]
  return (
    <main className="mt-[5rem] xl:mt-[10rem] xl:px-[80px] xl:pb-[7rem] px-4 border-b border-secondary1">
        <p className="text-[30px] md:text-[45px] leading-[56px] font-[700] mb-[2rem] md:mb-[4rem]">FAQs</p>

        <section className="xl:flex justify-center gap-[140px]">
           {Faq.slice(0,2).map((index) => (
              <div key={index} className="flex gap-[12px] items-center text-primary3 text-[24px] leading-[28px] font-[600] my-[2rem] xl:my-0">
              <p>Lorem ipsum, dolor sit amet, consectetur adi elit.</p>
              <img src={dropdown} alt="icon" />
              </div>
           ))}
        </section>

        <section className="xl:flex justify-center gap-[140px]">
           {Faq.slice(2, 4).map((index) => (
              <div key={index} className="flex gap-[12px] items-center text-primary3 text-[24px] leading-[28px] font-[600] my-[2rem]">
              <p>Lorem ipsum, dolor sit amet, consectetur adi elit.</p>
              <img src={dropdown} alt="icon" />
              </div>
           ))}
        </section>

        <section className="xl:flex justify-center gap-[140px]">
           {Faq.slice(4.6).map((index) => (
              <div key={index} className="flex gap-[12px] items-center text-primary3 text-[24px] leading-[28px] font-[600] my-[2rem] xl:my-0">
              <p>Lorem ipsum, dolor sit amet, consectetur adi elit.</p>
              <img src={dropdown} alt="icon" />
              </div>
           ))}
        </section>
    </main>
  )
}

export default Faq