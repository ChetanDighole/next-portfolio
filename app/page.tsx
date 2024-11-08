import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Experiencs from "@/components/Experience";
import Certification from "@/components/Certification";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="h-auto lg:h-screen w-full">
        <NavBar />

        <HeroSection />
      </div>

      <Skills />

      <Experiencs />

      <Projects />

      <Certification />

      <Footer />
    </div>
  );
}
