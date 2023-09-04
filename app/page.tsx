import About from "@/components/content/About";
import Intro from "@/components/content/Intro";

export default function Home() {
  return (
    <main className=" flex flex-col gap-40">
      <section id="intro">
        <Intro></Intro>
      </section>

      <section>
        <About></About>
      </section>
    </main>
  );
}
