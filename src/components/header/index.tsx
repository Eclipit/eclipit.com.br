import Image from 'next/image'
import logo from '/logo.png'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-center">
        <Image alt='Logo da Eclipit' src={logo} />
        <nav>
          <Link href='#inicio'>
            Inicio
          </Link>
          <Link href='#servicos'>
            Serviços
          </Link>
          <Link href='#sobre'>
            Sobre
          </Link>
        </nav>
        <Button variant={'ghost'}>
          Contato
        </Button>
      </div>
    </header>
  )
}