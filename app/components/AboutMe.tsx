import React from 'react'
import Image from 'next/image'
const AboutMe = () => {
    return (
        <section className="flex flex-col items-center px-4 py-8 gap-6 font-mono
         border-t-1 border-[#43454D] mb-10
         md:flex-row
         md:w-full
         md:
         md:justify-around
         md:items-center
         ">
            <div className="flex flex-col gap-10 items-center
            md:items-start
            ">
                <span className="bg-[#23272f] text-white px-8 py-2 rounded-tl-[32px] rounded-br-[32px]
                 border-2 border-[#12F7D6] text-xl font-ubuntu shadow
                 md:text-6xl
                 md:
                 "> 
                    About me
                </span>
                <div className="bg-[#23272f] rounded-[32px] p-6 w-full max-w-xs shadow-lg md:max-w-xl">
                <p className="text-[#12F7D6] text-2xl font-bold mb-2">Hello!</p>
                <p className="text-white text-[15px] mb-2
                
                ">
                    My name is Sinan and I specialize in web development that utilizes <span className="text-[#12F7D6]">HTML</span>, <span className="text-[#12F7D6]">CSS</span>, <span className="text-[#12F7D6]">JS</span>, and <span className="text-[#12F7D6]">REACT</span> etc.<br /><br />
                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.<br /><br />
                    When Im not coding, I am writing <span className="text-[#12F7D6]">blogs</span>, reading, or picking up some new hands-on art project like <span className="text-[#12F7D6]">photography</span>.<br /><br />
                    I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                </p>
            </div>
            </div>
            
            <div className="rounded-[32px] overflow-hidden w-full max-w-xs md:max-w-[462] mt-10">
                <Image
                    src="/assets/pc-image.svg"
                    alt="About Me"
                    width={272}
                    height={364}
                    className="object-cover w-full h-auto"
                />
            </div>
        </section>
    )
}

export default AboutMe
