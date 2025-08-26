import React from 'react'
import HeaderItem from './HeaderItem'
import Link from 'next/link'
const Header = () => {
  return (

    <nav className='flex items-center gap-5 py-17 justify-between border-b-1 border-[#43454D]
    md:gap-10
    lg:w-full
    lg:max-w-7xl
    '>
      <div className='flex gap-4'>
        <span className='text-2xl text-[#12f7d6] md:text-3xl font-mono
          lg:text-4xl
        '>&lt;s/&gt;</span>
        <div className='flex items-center text-xl font-mono text-white 
          lg:text-3xl
        '>
          <span className="mt-1">ShafeeAhmed</span>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href='/' className="text-xl font-mono text-white hover:text-[#12F7D6] inline ">
          Home
        </Link>
        <Link href='/' className="text-xl font-mono text-white hover:text-[#12F7D6] inline ">
          Blogs
        </Link>
        <div>
          <HeaderItem />
        </div>
      </div>
    </nav>

  )
}

export default Header