import AboutUs from "@/components/sections/aboutUs";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import TypesOfCustomers from "@/components/sections/typesOfCustomers";
import WhyWeChoose from "@/components/sections/whyWeChoose";


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20 text-white px-3 scroll-smooth relative mx-auto overflow-visible">
      <Header />
      <Hero />
      <div className="h-[300px] ">

      </div>
      <AboutUs />
      <Services />
      <TypesOfCustomers />
      <WhyWeChoose />
      <Contact />
      <Footer />
    </div>
  );
}
