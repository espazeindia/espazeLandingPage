import { HeroData } from "../components/shared/sharedHero";
import { FeaturesData } from "../components/shared/sharedFeatures";
import { JoinNetworkData } from "../components/shared/sharedJoinNetwork";

export const customerHeroData: HeroData = {
  heading: "Shop Smarter, Receive Faster.",
  descriptions: [
    "At Espaze, we believe shopping should be seamless — from browsing to doorstep delivery.",
    "Experience lightning-fast delivery powered by our intelligent logistics network across India."
  ],
  primaryButton: {
    text: "Start Shopping",
    onClick: () => console.log("Start Shopping clicked")
  },
  secondaryButton: {
    text: "Learn More",
    onClick: () => console.log("Learn More clicked")
  },
  backgroundImage: "/customer.png"
};

export const customerFeaturesData: FeaturesData = {
  heading: "Your satisfaction is our priority.",
  subheading: "From your first click to final delivery, Espaze ensures a smooth and reliable shopping experience.",
  features: [
    {
      id: 1,
      title: "Track your orders in real-time",
      description: "Know exactly where your package is at every step of the journey.",
      iconPath: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    },
    {
      id: 2,
      title: "Same-day & next-day delivery",
      description: "Get your products delivered faster with our optimized delivery network.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      id: 3,
      title: "Hassle-free returns & support",
      description: "Easy returns and dedicated customer support whenever you need help.",
      iconPath: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6",
    },
  ]
};

export const customerJoinNetworkData: JoinNetworkData = {
  heading: "Download the App now ",
  description: "Everything you need to shop smarter and receive faster.",
  buttonText: "Download Now",
  onClick: () => console.log("Download Now clicked")
};

