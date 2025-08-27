import React from 'react'
import HeaderItem from './HeaderItem'
import Link from 'next/link'
import SearchBar from './SearchBar'
const Header = () => {
  return (

    <nav className='flex items-center gap-5 py-13 justify-between border-b-1 border-[#43454D]
    md:gap-10
    md:py-15
    lg:w-full
    lg:max-w-7xl
    '>
      <div className='flex pl-5 gap-4'>
        <span className='text-2xl text-[#12f7d6] md:text-3xl font-mono
          lg:text-4xl
          hidden
          sm:inline
        '>&lt;s/&gt;</span>
        <div className='flex items-center text-xl font-mono text-white 
          lg:text-3xl
        '>
          <span className="mt-1">ShafeeAhmed</span>
        </div>
      </div>
      <div className="flex gap-4 pr-5">
        <Link href='/' className="text-xl font-mono text-white hover:text-[#12F7D6] inline pt-1.5">
          Home
        </Link>
        <Link href='/blogs' className="text-xl font-mono text-white hover:text-[#12F7D6] 
        inline pt-1.5">
          Blogs
        </Link>
        <div className="pt-1">
          <SearchBar />
        </div>
        <div className='hidden md:inline'>
          <HeaderItem />
        </div>

      </div>
    </nav>

  )
}

export default Header