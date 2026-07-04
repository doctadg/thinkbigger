import PostGate from "@/components/PostGate";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Manifesto from "@/components/Manifesto";
import ComparisonSection from "@/components/ComparisonSection";
import IntentSection from "@/components/IntentSection";
import BountyBoard from "@/components/BountyBoard";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import TokenInfo from "@/components/TokenInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PostGate />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <ComparisonSection />
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
