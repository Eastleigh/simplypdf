import {
  Navbar,
  Hero,
  HowItWorks,
  Features,
  TrendDashboard,
  AIBuilder,
  Pricing,
  SocialProof,
  FinalCTA,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <TrendDashboard />
        <AIBuilder />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
