import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { About } from '@/components/About';
import { WhyUs } from '@/components/WhyUs';
import { Circuitos } from '@/components/Circuitos';
import { Gallery } from '@/components/Gallery';
import { FAQ } from '@/components/FAQ';
import { Booking } from '@/components/Booking';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { JsonLd } from '@/components/JsonLd';

export default function Page() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyUs />
        <Circuitos />
        <Gallery />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
