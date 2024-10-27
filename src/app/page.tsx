import { FaGear } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
          Em construção. <FaGear className="animate-spin" />
        </h1>
        <p className="mt-2 text-lg">
          Aqui está sendo desenvolvido o que um dia será uma das maiores software houses do Brasil!
        </p>
        <div className="mt-8">
          <span className="text-gray-400 text-sm">Fique ligado!</span>
        </div>
      </div>
    </div>
  );
}
