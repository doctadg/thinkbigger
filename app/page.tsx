import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Manifesto from "@/components/Manifesto";
import IntentSection from "@/components/IntentSection";
import BountyBoard from "@/components/BountyBoard";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <IntentSection />
        <BountyBoard />
        <HowItWorks />
        <Vision />
        <TokenInfo />
        <Footer />
      </main>
    </>
  );
}
