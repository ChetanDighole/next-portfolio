import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <div className="h-auto lg:h-screen w-full">
        <NavBar />

        <HeroSection />
      </div>

      <Skills />
    </div>
  );
}
