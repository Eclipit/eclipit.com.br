'use client'

import Image from "next/image";
import Card from "./card";
import { IoCodeOutline, IoDesktopOutline, IoHardwareChipOutline, IoLayersOutline, IoNewspaperOutline, IoTerminalOutline } from "react-icons/io5";

export type ServiceType = {
  icon: React.ElementType;
  title: string;
  description: string;
};


export const services: ServiceType[] = [
  {
    icon: IoCodeOutline,
    title: "Desenvolvimento de Software Personalizado",
    description: "Criamos sistemas e soluções digitais sob medida, totalmente adaptados às necessidades específicas de cada cliente."
  },
  {
    icon: IoTerminalOutline,
    title: "Desenvolvimento de APIs",
    description: "APIs bem projetadas são fundamentais para que empresas otimizem processos, melhorem a eficiência e promovam a inovação de forma escalável."
  },
  {
    icon: IoNewspaperOutline,
    title: "Desenvolvimento de Landing Pages",
    description: "Criamos landing pages otimizadas para converter visitantes em leads e clientes, com design atrativo, carregamento rápido e foco em experiência do usuário."
  },
  {
    icon: IoHardwareChipOutline,
    title: "Produtos SaaS (Software as a Service)",
    description: "É um modelo em que o software é acessado pela internet, sem necessidade de instalação local. Empresas podem utilizar ferramentas diretamente na nuvem."
  },
  {
    icon: IoLayersOutline,
    title: "UX/UI Design e Prototipação",
    description: "Criamos interfaces intuitivas e funcionais, designs bonitos e atraentes, facilidade de uso para todos os tipos de usuários."
  },
  {
    icon: IoDesktopOutline,
    title: "Desenvolvimento de Sites Institucionais",
    description: "Ter um website bem-feito e fácil de navegar faz toda a diferença para atrair novos clientes e construir uma imagem positiva da marca."
  }
];


export default function Services() {
  return (
    <section id="servicos" className="w-screen relative pt-96">
      <div className="container px-5 mx-auto w-full space-y-20 z-50">
        <Image alt="O que oferecemos" src='/services.svg' width={1024} height={200} className="mx-auto" />
        <h2 className="sr-only">
          O que oferecemos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            services.map((service, index) => {
              return <Card key={index} service={service} />
            })
          }
        </div>
      </div>
    </section>
  )
}