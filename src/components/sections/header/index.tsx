import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'
import MobileMenu from './mobileMenu'

export default function Header() {

  return (
    <header className='w-screen  fixed top-0 z-50 bg-black'>
      <div className="container px-5 mb:grid flex grid-cols-3 items-center md:justify-center justify-between mx-auto py-5">
        <Link href='/' className='w-1/3'>
          <Image alt='Logo da Eclipit' src='/logo.svg' width={150} height={100} />
        </Link>
        <nav className='mx-auto hidden items-center justify-center gap-10 md:flex w-1/3'>
          <Link className='hover:-translate-y-1 transition-all' href='#inicio'>
            Inicio
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#sobre'>
            Sobre
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#servicos'>
            Serviços
          </Link>
        </nav>
        <div className=' w-1/3'>
          <a href="#contato">
            <Button variant={'ghost'} className='hidden justify-end w-fit ml-auto md:flex'>
              Contato
            </Button>
          </a>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}