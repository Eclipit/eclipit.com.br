import Link from "next/link";
import { Button } from "../../ui/button";

export default function Hero() {
  return (
    <section className={`w-screen mt-20 pt-20  relative`}>
      <div className="container px-5 mx-auto">
        <h1 className="px-3 xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink to-blue">
            Sua softhouse
          </span>
          <br />
          no caminho para o futuro
        </h1>
      </div>
      <div className="bg-[url('/planet.png')] w-screen h-[800px] bg-top bg-cover bg-no-repeat absolute xl:-translate-y-[110px] lg:-translate-y-[80px] md:-translate-y-[90px] sm:-translate-y-[80px] -translate-y-[70px]">
      </div>
      <div className="px-5  flex items-center lg:gap-10 gap-5 justify-center w-full h-[800px] absolute bg-gradient-to-t from-black to-transparent xl:-translate-y-[110px] lg:-translate-y-[80px] md:-translate-y-[90px] sm:-translate-y-[80px] -translate-y-[70px]">
        <Link href='/#sobre'>
          <Button
            className="bg-gradient-to-r from-pink to-blue"
            size="lg"
          >
            Saber mais
          </Button>
        </Link>

        <Link href='/#servicos'>
          <Button size={'lg'} variant={'outline'}>
            Nossos serviços
          </Button>
        </Link>
      </div>
    </section>
  )
}