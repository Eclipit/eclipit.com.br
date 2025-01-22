import Carousel from "./carousel";

export default function TypesOfCustomers() {
  return (
    <section className="w-screen relative">
      <div className="container px-5 mx-auto w-full z-50">
        <h2 className="text-5xl font-bold text-pink mb-20">
          Para quem são nossos serviços
        </h2>
      </div>
      <Carousel />
    </section>
  )
}