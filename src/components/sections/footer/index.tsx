import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full relative">
      <footer className="flex flex-col items-center gap-5 mx-auto w-full mt-10">
        <Link href='/'>
          <Image alt='Logo da Eclipit' src='/logo.svg' width={150} height={100} />
        </Link>
        <a href="mailto:contato@eclipit.com.br" className=" mb-10">
          contato@eclipit.com.br
        </a>
        <Separator />
        <p className="text-neutral-500 text-xs mb-5">
          2024 Eclipit. © Todos os direitos reservados
        </p>
      </footer>
    </section>
  )
}