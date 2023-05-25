import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineDoubleRight,AiOutlineClose} from 'react-icons/ai';

const Sidebar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  } 

  return (
    <div className='w-[20%]'>
        {/*Overlay*/}
        <ul className=''>
            <li>
              <button className='w-full left-0 text-center border-spacing-6 bg-purple-50 py-6 my-4 px-10 border-black border-y-4 border-r-4  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/keyboards" className='font-extrabold text-2xl'>Keyboards</Link>
              </button>
            </li>
            <li>
              <button className='w-full left-0 text-center border-spacing-6 bg-purple-50 py-6 my-4 px-10 border-black border-y-4 border-r-4  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/keycaps" className='font-extrabold text-2xl'>Keycaps</Link>
              </button>
            </li>
            <li>
              <button className='w-full left-0 text-center border-spacing-6 bg-purple-50 py-6 my-4 px-10 border-black border-y-4 border-r-4  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/switches" className='font-extrabold text-2xl'>Switches</Link>
              </button>
            </li>
            <li>
              <button className='w-full left-0 text-center border-spacing-6 bg-purple-50 py-6 my-4 px-10 border-black border-y-4 border-r-4  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/mod" className='font-extrabold text-2xl'>Sound Mods</Link>
              </button>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineDoubleRight size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'  : 'fixed left-[-100%]' }>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-400'>Home</li>
                    <li className='p-4 border-b border-gray-400'>Company</li>
                    <li className='p-4 border-b border-gray-400'>Resources</li>
                    <li className='p-4 border-b border-gray-400'>About</li>
                    <li className='p-4 border-b border-gray-400'>Contact</li>
                </ul>
            </div>

    </div>
  )
}

export default Sidebar