import logo from "../assets/logosmall.png"
import RegisterButton from "./RegisterButton"

function Penultimate() {
  return (
    <main className="w-full md:px-[80px] px-4">
        <img src={logo} alt="logo" className="mt-[1.5rem]" />

        <div className="w-full flex flex-col items-center justify-center my-[6rem] gap-[40px]">
            <p className="text-center text-[30px] md:text-[45px] md:leading-[56px] font-[700]">Want To Be A Part Of Abuja's Biggest Tech <br/> Community?</p>
            <RegisterButton />
        </div>
    </main>
  )
}

export default Penultimate