import React from 'react'
import Image from 'next/image'

const details = [
    {
        icon: '/assets/msg.svg',
        text: 'abdurrahman_sinan@hotmail.com',
    },
    {
        icon: '/assets/icon-map-pin.svg',
        text: 'Turkey',
    },
    {
        icon: '/assets/icon-briefcase.svg',
        text: 'Full-time / Freelancer',
    },
    {
        icon: '/assets/icon-link.svg',
        text: 'www.sinantokmak.com',
    },
]

const skills = ['HTML', 'CSS', 'JS', 'REACT']


const AboutmeDetails = () => {
    return (
        <div className='flex flex-col font-mono text-[14px] items-start p-10 gap-4'>
            {details.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                    <Image src={item.icon} alt="" width={18} height={18} 
                    className=''
                    />
                    <span className="px-1 rounded select-all">{item.text}</span>
                </div>
            ))}
            <div className="flex gap-2 mt-2">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="bg-[#12F7D6] text-[#23272f] px-3 py-1 rounded-full font-bold text-[13px]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default AboutmeDetails
