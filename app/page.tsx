import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Ventures from "@/app/components/Ventures";
import InnovationSupport from "@/app/components/InnvoationSupport";
import Services from "@/app/components/Services";
import ContactUs from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Ventures />
      <InnovationSupport />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}
