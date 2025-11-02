import Navbar from "@/src/components/shared/Navbar";
import HeroSection from "@/src/components/seller/HeroSection";
import FeaturesSection from "@/src/components/seller/FeaturesSection";
import DemoSection from "@/src/components/seller/DemoSection";
import HowItWorksSection from "@/src/components/seller/HowItWorksSection";
import JoinNetworkSection from "@/src/components/seller/JoinNetworkSection";

export default function SellerPage() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Navbar />
      <main className="w-full">
  <HeroSection />
  <FeaturesSection />
  <HowItWorksSection />
  <DemoSection />
  <JoinNetworkSection />
      </main>
    </div>
  );
}
