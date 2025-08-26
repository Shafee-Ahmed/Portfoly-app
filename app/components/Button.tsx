import React from 'react'
import Image from 'next/image'
type ButtonProp = {
    children:React.ReactNode;
    className?: string
    icon?: string
}

const Button = ({children , className='', icon= ''} : ButtonProp) => {
  return (
    <button className={`${className} flex  p-3 rounded-full text-black font-ubuntu text-xl gap-2`}>
      {children}
      {icon && (
        <Image
          src={`/assets/${icon}`}
          alt={icon}
          width={24}
          height={24}
        />
      )}
    </button>
  )
}

export default Button
