import Reason from "./reason"

export type ReasonType = {
  number: number
  title: string
  description: string
}

const reasons: ReasonType[] = [
  {
    number: 1,
    title: 'O foco aqui é você',
    description: 'Experiência de atendimento adaptada, apoio customizado, atendimento exclusivo e  suporte sob medida.O melhor atendimento para construirmos um futuro juntos'
  },
  {
    number: 2,
    title: 'Suas ideias no mundo real',
    description: 'Transformamos seus planos em resultados, deixando você focar  no seu negócio enquanto  cuidamos da parte chata'
  },
  {
    number: 3,
    title: 'Estamos fechados com a qualidade',
    description: 'Cada projeto é tratado com um cuidado excepcional e uma atenção minuciosa aos detalhes, garantindo que o resultado final supere as expectativas e reflita a excelência que buscamos em tudo o que fazemos.'
  }
]
export default function WhyWeChoose() {
  return (
    <section id="porque-nos-escolher" className="w-screen mt-24 relative">
      {/* <Image alt="light" src='/Looper BG.svg' width={1000} height={1000} className="absolute -translate-y-[500px] scale-125 -z-10" /> */}

      <div className="container px-5 mx-auto w-full space-y-20">
        <header className="w-full flex md:flex-row flex-col justify-center gap-10">
          <p className="uppercase text-xl font-thin">
            Porque nos escolher
          </p>
          <h2 className=" md:text-4xl sm:text-3xl   text-2xl font-bold">
            Não pensamos apenas na solução, <br className="md:flex hidden" />
            entendemos <br className="md:flex hidden" />
            o seu problema
          </h2>
        </header>
        <div className="flex flex-col md:gap-36 gap-10 ">
          {
            reasons.map((reason, index) => {
              return <Reason key={index} reason={reason} />
            })
          }
        </div>
      </div>
    </section>
  )
}