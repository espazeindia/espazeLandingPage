"use client";

import Header from "@/app/components/common/Header";
import GenericHero from "@/app/components/shared/sharedHero";
import GenericFeatures from "@/app/components/shared/sharedFeatures";
import StepsDemo from "@/app/components/shared/sharedSteps";
import GenericJoinNetwork from "@/app/components/shared/sharedJoinNetwork";
import Footer from "@/app/components/common/footer";
import { sellerHeroData, sellerFeaturesData, sellerJoinNetworkData } from "@/app/config/sellerData";
import { sellerStepsData } from "@/app/config/stepsData";

export default function SellerPage() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Header />
      <main className="w-full">
        <GenericHero data={sellerHeroData} />
        <GenericFeatures data={sellerFeaturesData} />
        <StepsDemo data={sellerStepsData} />
        <GenericJoinNetwork data={sellerJoinNetworkData} />
      </main>
      <Footer />
    </div>
  );
}