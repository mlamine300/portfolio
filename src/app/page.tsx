import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex   min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <Hero />
      <About />
    </main>
  );
}
