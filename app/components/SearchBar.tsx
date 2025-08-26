'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);


    return (
        <>
            <div className="flex items-center gap-6">

                <div className="cursor-pointer flex items-center justify-center pt-1 pl-2"
                    onClick={() => setShowSearch(true)}
                >
                    <Image
                        src='/assets/search-black.svg'
                        alt='search'
                        width={24}
                        height={24}
                        className=""
                    />
                </div>
             
            </div>
            {showSearch && (
                <>
                    <div className="fixed inset-0 z-40 backdrop-blur-sm transition-all duration-300"></div>
                    <div className="fixed top-40 left-1/2 z-50 -translate-x-1/2 w-full max-w-md px-4">
                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg transition-all duration-300 ease-in-out scale-95 opacity-0 animate-[fadeIn_1s_forwards]">
                            <Image
                                src='/assets/icon-search.svg'
                                alt='search'
                                width={24}
                                height={24}
                                className=""
                            />
                            <input
                                type="text"
                                autoFocus
                                className="flex-1 h-12 bg-white text-black para-m border-none outline-none rounded-full"
                                placeholder="Search..."
                                onBlur={() => {
                                    setTimeout(() => setShowSearch(false));
                                }}
                            />
                        </div>
                    </div>
                    <style jsx global>{`
                        body{
                            overflow-y:hidden !important
                        }
                        @keyframes fadeIn {
                            to {
                                opacity: 1;
                                transform: scale(1);
                            }
                        }
                    `}</style>
                </>
            )}
        </>
    )
}
export default SearchBar