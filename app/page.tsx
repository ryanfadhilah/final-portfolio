import About from "@/components/content/About";
import Contact from "@/components/content/Contact";
import Intro from "@/components/content/Intro";
import Portfolio from "@/components/content/Portfolio";

export default function Home() {
  return (
    <main className=" flex flex-col gap-40">
      <section id="intro">
        <Intro></Intro>
      </section>

      <section>
        <About></About>
      </section>

      <section>
        <Portfolio></Portfolio>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </main>
  );
}
