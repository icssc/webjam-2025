import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Apply from "@/components/ui/apply";
import Schedule from "@/components/ui/schedule";
import Prizes from "@/components/ui/prizes";
import Rules from "@/components/ui/rules";
import FAQ from "@/components/ui/faq";
import Footer from "@/components/ui/footer";
import Sponsors from "@/components/ui/sponsors";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Apply />

      <div className="bg-gradient-to-b from-[#032b63] to-[#000112]">
        <Schedule />
        <Prizes />
        <Sponsors />
        <Rules />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
