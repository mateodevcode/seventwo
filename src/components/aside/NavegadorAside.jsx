import { SeventoContext } from '@/context/SevenContext'
import React, { useContext } from 'react'

const NavegadorAside = () => {
    const { setPage, page } = useContext(SeventoContext)

    const minPage = page - 1
    const maxPage = page + 1


    
    return (
        <div
            className="fixed z-50 right-20 top-80 h-52 w-20 flex flex-col items-center justify-center"
        >
            <div
                onClick={() => setPage(minPage)}
                className="gradient-button text-white cursor-pointer select-none rounded-r-full w-12 h-12 flex flex-col items-center justify-center my-1 hover:scale-105 transition-all duration-200">
                0{minPage}

            </div>
            <div
                className="gradient-button text-white cursor-pointer select-none rounded-r-full w-16 h-16 flex flex-col items-center justify-center my-1 hover:scale-105 transition-all duration-200">0{page}</div>
            <div
                onClick={() => setPage(maxPage)}
                className="gradient-button text-white cursor-pointer select-none rounded-r-full w-12 h-12 flex flex-col items-center justify-center my-1 hover:scale-105 transition-all duration-200">0{maxPage}</div>
        </div>
    )
}

export default NavegadorAside