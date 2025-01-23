import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contato" className="w-screen mt-24 relative">
      <Image alt="light" src='/light1.svg' width={1000} height={100} className="sm:translate-x-96 -translate-y-[600px] absolute -z-50" />
      <Image alt="light" src='/light3.svg' width={1000} height={100} className="-translate-x-96 -translate-y-[600px] absolute -z-50" />
      <Image alt="light" src='/light3.svg' width={1000} height={100} className="-translate-x-96 -translate-y-[600px] absolute -z-50" />
      <div className="container px-5 mx-auto w-full flex md:flex-row flex-col sm:items-center justify-center md:gap-40 gap-10">
        <h2 className="text-5xl font-semibold md:text-start text-center">
          Vamos <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink to-blue">desenvolver</span> <br />
          e <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink to-blue">crescer</span> juntos?
        </h2>
        <a href="https://wa.me/558199560991?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Eclipit!" className="w-full sm:w-fit">
          <Button className="bg-gradient-to-r from-pink to-blue sm:w-fit w-full">Fale conosco <RiWhatsappLine /></Button>
        </a>
        {/* <div className="max-w-[550px] mx-auto space-y-5">
          <p className="text-sm text-center w-full">Preencha o formulário e logo  logo entraremos em contato</p>
          <ContactForm />
        </div> */}
      </div>
    </section>

  )
}