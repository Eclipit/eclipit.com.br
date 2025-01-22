
export default function AboutUs() {
  return (
    <section id="sobre" className="w-screen pt-96 h-screen relative overflow-visible">
      <div className="left-0 bg-[url('/shapes.png')] w-screen h-96 bg-no-repeat absolute z-10 -translate-y-24">
      </div>
      <div className="left-0 bg-[url('/shapes.png')] w-screen h-96 bg-no-repeat absolute bottom-0 z-10 translate-y-72">
      </div>
      <div className="left-0 -translate-y-20 bg-[url('/lights.png')] w-screen h-full bg-no-repeat bg-center absolute z-0 bg-opacity-5">
      </div>
      <div className="container px-5 mx-auto items-center md:justify-between justify-center md:gap-0 gap-20 z-20 grid  grid-cols-5 my-auto">
        <h2 className="lg:text-8xl text-5xl relative  md:-rotate-90 text-nowrap text-white md:col-span-2 col-span-5 lg:scale-100">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-pink">O que é</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-pink text-4xl lg:text-end font-thin rotate-90 absolute translate-y-5 lg:-translate-x-5">soft <br />house</span>
          <span className="ml-20 bg-clip-text text-transparent bg-gradient-to-t from-white to-pink ">a Eclipit?</span>
        </h2>
        <p className="font-extralight lg:text-xl md:text-base md:col-span-3 col-span-5 w-full px-3">
          Na Eclipit, nossos valores refletem nosso compromisso com a inovação, a flexibilidade e o sucesso dos clientes. Focamos em soluções tecnológicas de ponta, adaptadas a diferentes segmentos por meio de uma abordagem White Label única, que permite personalizar e reutilizar produtos e serviços de acordo com as necessidades específicas de cada negócio.
          <br />
          <br />
          Nosso trabalho é guiado pela transparência e pelo compromisso com resultados duradouros. Valorizamos a confiança e construímos parcerias sólidas por meio de ética e excelência em cada entrega. Assim, a Eclipit se posiciona não apenas como uma softhouse, mas como um parceiro estratégico para o futuro de cada cliente.
        </p>
      </div>
    </section>
  )
}