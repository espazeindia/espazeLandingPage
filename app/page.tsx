import HowItWorksSection from "@/src/components/home/HowItWorksSection";
import BuyersSellersSection from "@/src/components/home/BuyersSellersSection";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <main className="w-full">
        <HowItWorksSection />
        <BuyersSellersSection />
      </main>
    </div>
  );
}
