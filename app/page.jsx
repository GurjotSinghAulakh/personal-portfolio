//Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-light.png" />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Cta />
      </main>
    </>
  );
}
