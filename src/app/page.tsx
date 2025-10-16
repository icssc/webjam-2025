import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Schedule from "@/components/ui/schedule";
import Prizes from "@/components/ui/prizes";
import Rules from "@/components/ui/rules";
import FAQ from "@/components/ui/faq";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />

      <div className="bg-gradient-to-b from-[#000237] to-[#000112]">
        <Schedule />
        <Prizes />
        <Rules />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
