import About from "@/components/content/About";
import Contact from "@/components/content/Contact";
import Intro from "@/components/content/Intro";
import Portfolio from "@/components/content/Portfolio";

export default function Home() {
  return (
    <main className=" flex flex-col">
      <section id="intro" className="">
        <Intro></Intro>
      </section>

      <section id="about" className="pt-40">
        <About></About>
      </section>

      <section id="portfolio" className="pt-40">
        <Portfolio></Portfolio>
      </section>

      <section id="contact" className="pt-40">
        <Contact></Contact>
      </section>
    </main>
  );
}
