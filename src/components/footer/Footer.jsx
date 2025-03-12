import Link from 'next/link'

const Footer = () => {
  return (
    <div className='text-white text-center p-4 items-end flex flex-row justify-between w-full'>
      <p className='mx-10'>2025 © Todos los derechos reservados</p>
      <Link href='https://seventwo.tech' className='mx-10 text-white/50 hover:text-white/80'>seventwo.tech</Link>

    </div>
  )
}

export default Footer