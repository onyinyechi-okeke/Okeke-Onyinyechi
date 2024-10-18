import Button from './Button'
import arrow from '../assets/twoarrows.png'

function RegisterButton() {
  return (
    <div>
        <Button title='Register For Our Next Event' icon={arrow} style='border-2 border-primary rounded-[40px] text-primary px-[20px] py-[15px]' />
    </div>
  )
}

export default RegisterButton