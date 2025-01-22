
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";


export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="flex md:hidden">
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent side='top' className="px-10 w-screen border-none">
        <SheetHeader className="flex items-center justify-between flex-row">
          <SheetTitle>
            <Link href='/' className='w-1/3'>
              <Image alt='Logo da Eclipit' src='/logo.svg' width={150} height={100} />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 mt-10">
          <Link className='hover:-translate-y-1 transition-all' href='#inicio'>
            <SheetClose>
              Inicio
            </SheetClose>
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#servicos'>
            <SheetClose>
              Serviços
            </SheetClose>
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#sobre'>
            <SheetClose>
              Sobre
            </SheetClose>
          </Link>
          <Link className='hover:-translate-y-1 transition-all' href='#contato'>
            <SheetClose>
              Contato
            </SheetClose>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>

  )
}