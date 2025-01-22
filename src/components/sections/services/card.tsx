'use client'
import { useState } from "react"
import { ServiceType } from "."

type CardProps = {
  service: ServiceType
}

export default function Card({ service }: CardProps) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`bg-gradient-to-t ${hover ? 'from-blue to-blue/30 scale-[1.02]' : 'from-neutral-950 to-neutral-950'} transition-all duration-100 relative px-6 rounded-lg custom-clip-path md:py-20  py-5 overflow-hidden flex items-center `}
    >

      {/* Conteúdo */}
      <div className="relative z-10 text-white flex flex-col sm:gap-0 ">
        <div className="flex flex-col items-center gap-5">
          <service.icon className={` mx-auto w-14 h-14 transition-transform duration-500 ${hover ? 'text-pink' : 'text-white'} transition-all duration-500`} />
          <h3 className={`text-xl text-center font-bold ${hover ? 'text-pink' : 'text-white'} pb-5`}>
            {service.title}
          </h3>
        </div>
        <p className=" text-center md:text-base text-sm">
          {service.description}
        </p>
      </div>
    </div>
  )
}
