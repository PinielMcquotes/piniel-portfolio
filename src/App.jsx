import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Tools } from "./components/Tools";

export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialised">
      <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </div>
    // <div className="flex flex-col h-screen w-screen text-">

    // </div>
  );
}
