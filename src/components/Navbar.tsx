import Logo from '@/assets/Logo.png'
import Image from 'next/image'
import NavMenu from './NavMenu'
import AlertBox from './AlertBox'
import { DropMenu } from './DropMenu'
import OnSignUpClick from './OnSignUpClick'
export default function Navbar() {

  return (
    <div className='flex items-center shadow'>
      <div className='flex flex-col mx-2 xl:mx-0 pt-1 font-medium items-center justify-between'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-8'>
           <Image src={Logo} alt='Logo' className='flex w-[15%] md:w-[10%] cursor-pointer'/>
           <NavMenu/>
            </div>
            <OnSignUpClick/>
            <DropMenu/>
        </div>
      </div>
    </div>
  )
}
