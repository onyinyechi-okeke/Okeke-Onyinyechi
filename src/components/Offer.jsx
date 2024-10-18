import plus from "../assets/plus.png"
import dot from "../assets/Ellipse 7.png"


function Offer() {
    const offer = [
        { id: 1, h: 'Monthly Meetups', p: 'Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions , and ample networking opportunities.'},

        { id: 2, h: 'Diverse Network', p: 'Connect with a wide range of professionals, from early-stage founders to seasoned, entrepreneurs, investors and industry experts.'},

        { id: 3, h: 'Knowledge Sharing', p: 'Connect with a wide range of professionals, from early-stage founders to seasoned, entrepreneurs, investors and industry experts.'},

        { id: 4, h: 'Collaboration Opportunities', p: 'FInd potential co-founders, mentors or partners for your next big venture.'},

        { id: 5, h: 'Community Support', p: 'Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.'}
    ]
  return (
    <main className="px-4 el:px-[80px]">
        <p className="text-center text-[35px] xl:text-[45px] font-[700]">What we Offer</p>

        <section>
       {offer.map(({id, h,p, r}) => (
        <div key={id} className="grid grid-cols-[0.3fr_3fr_5fr_1fr] yellow items-center border-b-[1px] border-border2 pr-8 pt-[30px] el:pt-[60px] pb-[30px]">
            <img src={dot} alt="icon" />
            <p className="text-[18px] md:text-[40px] font-[600]">{h}</p>
            <p className="text-secondary1 text-[14px] md:text-[16px] font-[600] leading-[25.6px] max-w-[750px]">{p} </p>
            <img src={plus} alt="icon"/>
            </div>
       ))}
        </section>
    </main>
  )
}

export default Offer