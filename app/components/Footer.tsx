import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

const defaultLinks = [
  { icon: "/assets/insta-cyan.svg", title: "Instagram" },
  { icon: "/assets/discord-cyan.svg", title: "Discord" },
  { icon: "/assets/github-cyan.svg", title: "Github" }
];
const Footer = () => {
  return (
    <footer className='flex flex-col py-20 items-center justify-center text-center text-[16px] text-white font-ubuntu
    pt-0
    '>
      <div className='flex flex-col items-center gap-1w-full max-w-192    '>
        <div className='flex py-10 items-center justify-center'>
          {defaultLinks.map(({ icon, title }, idx: number) => (
            <Link href="#" key={idx} className="mx-2 flex items-center gap-2">
              <Image src={icon} alt={title} width={24} height={24} />
              <span className="hidden lg:inline hover:text-[#12F7D6]">{title}</span>
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-5 items-center sm:flex-row'>
            <div className="sm:flex sm:items-center sm:whitespace-nowrap">
            © 2025 ShafeeAhmed. All rights reserved.
            </div>
          <div className='flex justify-between sm:gap-5 items-center w-full max-w-67'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className='flex gap-3'>
          Design By <p className='text-[#12f7d6]'>ShafeeAhmed</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer
