import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Projects } from "~/components/Projects";
import { About } from "~/components/About";
import { Stats } from "~/components/Stats";
import { News } from "~/components/News";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Argenway | Proyectos Memorables - Desarrollos Hoteleros de Lujo" },
    { name: "description", content: "Desarrolladores y gerenciadores hotelero-inmobiliarios. Creamos proyectos memorables con Hilton en Bariloche, Rosario y destinos internacionales." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stats />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
