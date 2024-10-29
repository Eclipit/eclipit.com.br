import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <header className='w-full'>
      <div className="container grid grid-cols-3 items-center justify-center mx-auto py-5">
        <Link href='/'>
          <Image alt='Logo da Eclipit' src={logo} />
        </Link>
        <nav className='mx-auto flex items-center gap-10'>
          <Link className='hover:-translate-y-1 transition-all' href='#inicio'>
            Inicio
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#servicos'>
            Serviços
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#sobre'>
            Sobre
          </Link>
        </nav>
        <Button variant={'ghost'} className='flex justify-end w-fit ml-auto'>
          Contato
        </Button>
      </div>
    </header>
  )
}