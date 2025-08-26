import React from 'react'
import Image from 'next/image'
type ModuleTitleProp = {
    className?: string,
    title?: string,
    Para?: string
}

const ModuleTitle = ({className = '', title = '', Para = '' }: ModuleTitleProp) => {
    return (
        <main  className={`${className}`}>
            <div className='flex flex-col items-center gap-3 p-2 mb-2'>
                <Image
                    src={`/assets/mouse.svg`}
                    alt={``}
                    width={32}
                    height={0}
                />
                <Image
                    src={`/assets/line.svg`}
                    alt={``}
                    width={9}
                    height={0}
                />

            </div>
            <div className='h1-u flex flex-col items-center text-[#12F7D6]'>
                {title}
                <Image
                    src={`/assets/title-under.svg`}
                    alt={``}
                    width={145}
                    height={0}
                />
            </div>

            <div className='para-m'>
                {Para}
            </div>
        </main>
    )
}

export default ModuleTitle
