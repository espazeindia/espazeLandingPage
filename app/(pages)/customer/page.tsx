"use client";

import Header from "@/app/components/common/Header";
import GenericHero from "@/app/components/shared/sharedHero";
import GenericFeatures from "@/app/components/shared/sharedFeatures";
import StepsDemo from "@/app/components/shared/sharedSteps";
import GenericJoinNetwork from "@/app/components/shared/sharedJoinNetwork";
import Footer from "@/app/components/common/footer";
import { customerHeroData, customerFeaturesData, customerJoinNetworkData } from "@/app/config/customerData";
import { customerStepsData } from "@/app/config/stepsData";

export default function CustomerPage() {
  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Header />
      <main className="w-full">
        <GenericHero data={customerHeroData} />
        <GenericFeatures data={customerFeaturesData} />
        <StepsDemo data={customerStepsData} />
        <GenericJoinNetwork data={customerJoinNetworkData} />
      </main>
      <Footer />
    </div>
  );
}

