//Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import Head from 'next/head';

export const metadata = {
  title: "Portfolio | Gurjot Singh Aulakh",
  description: "Gurjot Singh Aulakh, Fullstack Developer, QA Engineer, and AI Engineer. Passionate about technology and continuous learning. Experience includes Technical Testing at SpareBank 1 Forsikring, hackathons, and a Master's in AI.",
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags for SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo-light.png" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aulakh.no/" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="public/logo-light.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aulakh.no/" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="public/logo-light.png" />
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
