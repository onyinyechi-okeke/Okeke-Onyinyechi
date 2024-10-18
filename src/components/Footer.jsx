import fb from "../assets/facebook.png"
import ig from "../assets/ig.png"
import x from "../assets/x.png"
import Links from "./Links"


function Footer() {
  return (
    <main className="mx-8 xl:mx-[80px] border-t border-primary4 flex justify-center xl:justify-between py-[1.2rem]">
        <figure className="flex gap-[20px] items-center">
            <img src={fb} alt="facebook" />
            <img src={ig} alt="instagram" />
            <img src={x} alt="twitter" />
        </figure>
        <Links style='hidden xl:flex' />
    </main>
  )
}

export default Footer