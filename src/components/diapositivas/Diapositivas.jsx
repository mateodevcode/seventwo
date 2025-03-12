"use client"
import  { useContext } from 'react'
import Page01 from '../pages/Page01'
import { SeventoContext } from '@/context/SevenContext'

const Diapositivas = () => {
    const { page } = useContext(SeventoContext)

    console.log(typeof page);
    

    switch (page) {
        case 0:
            return <Page01 />
            break;
        case 1:
            return <Page01 />
            break;
        case 2:
            return <div>
                Pagina 2
            </div>
            break;
        case 3:
            return <Page01 />
            break;
        case 4:
            return <Page01 />
            break;
        case 5:
            return <Page01 />
            break;
        default:
            break;
    }
}

export default Diapositivas