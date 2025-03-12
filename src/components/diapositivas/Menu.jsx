import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <div className='w-full h-[600px] flex flex-row justify-center items-center'>
        <div className='w-8/12 h-[600px]  flex flex-col justify-start items-start p-20 text-white animate-fade-down'>
            <h2 className='text-6xl font-extrabold text-center mt-20'>
                Seventwo Technology
            </h2>
            <p className='text-xl font-semibold text-center mt-5'>
            Gestiona y controla tu inventario de forma sencilla y segura
            </p>
            <div className="gradient-button px-6 py-2 text-white cursor-pointer select-none hover:scale-105 transition-all duration-200 mt-5">Empezar</div>
        </div>
        <div className='w-4/12 h-[600px] flex flex-col justify-start items-start p-20'>
            <div className='gradient-image text-white cursor-pointer select-none rounded-md mt-20 animate-fade-up'>
                <Image src="/img-2.png" alt="menu" width={400} height={400} className='w-40 h-40 p-2 rounded-md' />
            </div>
        </div>
    </div>
  )
}

export default Menu