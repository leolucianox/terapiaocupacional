import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Modalidades } from "@/components/site/modalidades";
import { ComoFunciona } from "@/components/site/como-funciona";
import { Especialidades } from "@/components/site/especialidades";
import { Localizacao } from "@/components/site/localizacao";
import { Faq } from "@/components/site/faq";
import { CtaFinal } from "@/components/site/cta-final";
import { Footer } from "@/components/site/footer";
import { WhatsappFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Modalidades />
        <ComoFunciona />
        <Especialidades />
        <Localizacao />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
