'use client'

import { useState } from 'react'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full h-20 grid place-items-center py-2 bg-background shadow-md shadow-black left-0 top-0 fixed z-50">
      <div className="w-sm mx-auto md:w-md lg:w-lg flex items-center justify-between">
        {/* logo */}
        <div className="w-fit h-full">
          <h2 className="text-3xl lg:text-4xl text-purple-500 font-extrabold">
            Bermuda
          </h2>
        </div>
        {/* toggle btn */}
        <div className="w-fit h-full">
          <button
            className="w-16 h-fit py-4 aspect-square bg-transparent flex flex-col items-end gap-2"
            onClick={handleOpen}
          >
            <div className="w-10 lg:w-14 h-1 rounded-md bg-gray"></div>
            <div className="w-5 lg:w-8 h-1 rounded-md bg-gray"></div>
          </button>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}
