import Logo from '@/assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {

  return (
    <div className='flex items-center shadow'>
      <div className='flex flex-col mx-2 xl:mx-0 pt-1 font-medium items-center justify-between'>
        <div className='flex justify-between items-center'>
        <Image src={Logo} alt='Logo' className='flex w-[15%] md:w-[10%] cursor-pointer'/>
          <div className='flex items-center'>
          <ul className='md:flex hidden gap-6 items-center'>
            <li>
              <Link href='/' className="text-xl text-pink-600">
                Home
              </Link>
            </li>
            <li>
              <Link href='/' className="text-xl text-pink-600">
                Products & Services
              </Link>
            </li>
            <li>
              <Link href='/' className="text-xl text-pink-600">
                Contact
              </Link>
            </li>
            <li className='bg-green-100 rounded-md px-2'>
              <Link href='/' className="text-xl text-pink-600">
                Sigh Up
              </Link>
            </li>
            <li>
              <Link href='/' className="text-xl text-pink-600">
                Log In
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
