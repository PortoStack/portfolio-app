import Link from "next/link";
import { RevealSection } from "../reveal";
import { FaGithub, FaInstagram, FaLinkedin, FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Hero({ title }: { title?: string | null }) {
  return (
    <section className="relative h-screen bg-background" id="home">
      <RevealSection className="flex justify-center items-center h-full">
        <div className="block w-fit mx-auto text-white">
          <p className="text-sm min-[425px]:text-base">{title}</p>
          <div className="flex items-end gap-4 md:gap-8">
            <h1 className="text-3xl min-[425px]:text-4xl md:text-7xl font-bold">FULL-STACK</h1>
            <div className="flex gap-2 md:gap-4">
              <Link target="_blank" href="" className="text-xl min-[480px]:text-2xl md:text-5xl"><FaInstagram /></Link>
              <Link target="_blank" href="https://github.com/PortoStack" className="text-xl min-[480px]:text-2xl md:text-5xl"><FaGithub /></Link>
              <Link target="_blank" href="" className="text-xl min-[480px]:text-2xl md:text-5xl"><FaLinkedin /></Link>
            </div>
          </div>
          <div className="text-5xl min-[425px]:text-6xl md:text-9xl font-bold">DEVELOPER</div>
        </div>
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute text-white text-4xl animate-bounce bottom-10 cursor-pointer"
        >
          <FaRegArrowAltCircleDown />
        </button>
      </RevealSection>
    </section>
  );
}