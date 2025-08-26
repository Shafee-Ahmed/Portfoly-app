import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div>
      <div className="hidden md:flex flex-col items-center justify-around pt-4 w-16 h-94 bg-[#1A1E23] fixed left-20 top-60 z-50 rounded-full border-1">
        {[
          { name: 'Home', icon: '/assets/icon-grid.svg', id: 'home' },
          { name: 'About me', icon: '/assets/icon-user.svg', id: 'about' },
          { name: 'Skills', icon: '/assets/icon-code.svg', id: 'skillsh' },
          { name: 'Works', icon: '/assets/icon-monitor.svg', id: 'works' },
          { name: 'Blog', icon: '/assets/icon-edit.svg', id: 'contact' },
          { name: 'Contact', icon: '/assets/icon-mail.svg', id: 'blog' },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex flex-col items-center justify-center gap-6"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className={item.id === 'home' ? 'bg-white rounded-full p-1 m-1' : ''}
            />
            <span
              className={`mt-1 w-2 h-2 rounded-full ${
                typeof window !== 'undefined' && window.location.hash === `#${item.id}`
                  ? 'bg-blue-500'
                  : 'bg-transparent'
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
