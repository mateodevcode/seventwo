import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="py-6 px-5 rounded-full">
      <div className="flex items-center justify-between flex-row h-28">
        <Link href="/" className="text-xl font-bold text-white w-60 flex flex-col items-center justify-center">
          <h2 className='text-3xl'>Seventwo</h2>
          <h4 className='absolute ml-24 mt-10 text-xs'>Technology </h4>
        </Link>
        <div className="hidden md:flex items-center space-x-32">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Inicio
          </Link>
          <div className="gradient-button px-6 py-2 text-white cursor-pointer select-none hover:scale-105 transition-all duration-200">Bordex</div>
          <Link href="/contacto" className="text-white hover:text-gray-300 transition">
            Contacto
          </Link>
        </div>

        <div className="w-60 flex flex-row items-center justify-center">
          <Image src="/logo-st-2.png" alt="menu" width={400} height={400} className='w-9 h-9 p-1' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar