import Button from "./Button"
import arrow from "../assets/arrow-right white.png"

function Sponsor() {

    const sponsors = [
        {id:1, h: 'Networking Opportunities', p: 'Connect with industry leaders, founders, and potential partners', style: 'bg-primary2'},
        {id:2, h: 'Community Impact', p: 'Support the growth and development of the startup ecosystem', style: 'bg-variant2'},
        {id:3, h: 'Brand Association', p: 'Align your brand with innovation and entrepreneurial success.', style: 'bg-variant2'},
        {id:4, h: 'Visibility', p: 'Gain exposure to a targeted audience of young professionals and entrepreneurs.', style: 'bg-primary2'}
    ]
  return (
    <main className='relative xl:px-[80px] mt-[4rem] el:mt-[22rem] px-4'>

        <section className='xl:flex justify-between items-center mb-8 xl:mb-[4rem]'>
            <div>
                <p className='text-[30px] text-secondary font-[700]'>Sponsor The Next Friday</p>
                <p className='text-[40px] md:text-[55px] font-[700] leading-[50px] xl:leading-[68px] xl:mt-[11px] max-w-[600px] mb-3 xl:mb-0'>Why Sponsor Founders Friday?</p>
            </div>

            <div>
            <p className="text-variant1 font-[400] leading-[19px] xl:text-end max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac 
        rutrum felix. Nulla nibh lorem, facilicis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id.
        Maecenas ut ante quis quam lobortis consequat eu id turpis. malesuada fames ac turpis egestas </p> 
            </div>
        </section>

        <section className='Xl:pl-[6rem] xl:pr-[4rem] el:flex gap-[100px]'>
            <div className=' border-2 border-primary1 rounded-[10px] p-3 xl:p-10 shadow-custom-1 shadow-double-shadow md:w-[70%] el:w-[600px]'>
                <div className='flex gap-[20px]'>
            {sponsors.slice(0, 2).map(({id, h, p,style}) =>(
                <div key={id} className= {`w-[120px] h-[120px] xl:w-[250px] xl:h-[250px] border-2 border-variant text-center rounded-[200px] py-8 xl:px-3 xl:py-12 ${style}`}>
                    <p className='text-[14px] xl:text-[24px] font-[700] xl:leading-[28px]'>{h}</p>
                    <p className='hidden xl:flex text-[18px] leading-[22px] font-[400] mt-4'>{p}</p>
                </div>
            ))}
            </div>

            <div className='flex gap-[20px] mt-[20px]'>
            {sponsors.slice(2).map(({id, h, p, style}) =>(
               <div key={id} className= {`w-[120px] h-[120px] xl:w-[250px] xl:h-[250px] border-2 border-variant text-center rounded-[200px] py-10 xl:px-3 xl:py-12 ${style}`}>
               <p className='text-[14px] xl:text-[24px] font-[700] xl:leading-[28px]'>{h}</p>
               <p className='hidden xl:flex text-[18px] leading-[22px] font-[400] mt-4'>{p}</p>
           </div>
            ))}
            </div>
            </div>

            <form className="mt-8 xl:mt-0">
                <p className='text-[28px] font-[700] leading-[33px]'>How To Sponsor</p>
                <p className='text-[24px] italic text-variant3 font-[400] leading-[29px] my-[11px]'>Ready to Make an Impact?</p>
                <p className='text-[18px] font-[400] leading-[22px] mb-[30px]'>Fill out the form below or contact us at [contact email/phone number] to 
                learn more about how you can sponsor the next Founders Friday</p>
              
                <section className='xl:flex justify-between'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className="text-[18px] font-[600]">Name</label>
                    <input type='text' placeholder='Full name' className='border-border border-[1px] w-full xl:w-[309px] px-[22px] py-[13px] bg-background rounded-lg text-[18px] font-[400]
                    placeholder:text-[18px]'/>
                 </div>  
                 <div className='flex flex-col gap-[9px] my-6 xl:my-0'>
                    <label className="text-[18px] font-[600]">Company <span className="font-[400]">(optional)</span></label>
                    <input type='text' placeholder='Company name' className='border-border border-[1px] w-full xl:w-[309px] px-[22px] py-[13px] bg-background rounded-lg text-[18px] font-[400]
                    placeholder:text-[18px]' />
                 </div> 
                </section>

                <section className='xl:flex justify-between xl:my-[29px]'>
                  <div className='flex flex-col gap-[9px]'>
                    <label className="text-[18px] font-[600]">Email</label>
                    <input type='text' placeholder='Email address' className='border-border border-[1px] w-full xl:w-[309px] px-[22px] py-[13px] bg-background rounded-lg text-[18px] font-[400]
                    placeholder:text-[18px]'/>
                 </div>  
                 <div className='flex flex-col gap-[9px] my-6 xl:my-0'>
                    <label className="text-[18px] font-[600]">Phone</label>
                    <input type='text' placeholder='Phone number' className='border-border border-[1px] w-full  xl:w-[309px] px-[22px] py-[13px] bg-background rounded-lg text-[18px] font-[400]
                    placeholder:text-[18px]'/>
                 </div> 
                </section>
                <Button title='Sponsor' icon={arrow} style='bg-primary text-white px-[30px] py-[15px] rounded-[10px]' />
            </form>
        </section>
    </main> 
  )
}

export default Sponsor