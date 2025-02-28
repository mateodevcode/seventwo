import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="py-6 px-5 rounded-full">
      <div className="flex items-center justify-between">
        {/* <Link href="/" className="text-xl font-bold text-white">
          Seventwo tech.
        </Link> */}
        <Link href="/" className="text-xl font-bold text-white w-60 flex flex-row items-center justify-center">
          <Image src="/logo.png" alt="logo" width={200} height={100} className='w-40 h-auto' />
        </Link>
        <div className="hidden md:flex items-center space-x-32">
          <Link href="/" className="text-white hover:text-gray-300 transition">
            Inicio
          </Link>
          <div className="gradient-button px-6 py-2 text-white cursor-pointer select-none">Bordex</div>
          <Link href="/contacto" className="text-white hover:text-gray-300 transition">
            Contacto
          </Link>
        </div>

        <div className="w-60 flex flex-row items-center justify-center">
          <Image src="/sevenTwo.png" alt="menu" width={100} height={100} className='w-10 h-10' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar