import { HeroData } from "../components/shared/sharedHero";
import { FeaturesData } from "../components/shared/sharedFeatures";
import { JoinNetworkData } from "../components/shared/sharedJoinNetwork";

export const sellerHeroData: HeroData = {
  heading: "Smarter Growth for Every Seller.",
  descriptions: [
    "At Espaze, we believe sellers shouldn't worry about logistics — they should focus on what they do best: selling great products.",
    "We handle storage, delivery, and fulfillment — so your business runs effortlessly."
  ],
  primaryButton: {
    text: "Join as a Seller",
    onClick: () => console.log("Join as a Seller clicked")
  },
  secondaryButton: {
    text: "Request a Demo",
    onClick: () => console.log("Request a Demo clicked")
  },
  backgroundImage: "/seller.png"
};

export const sellerFeaturesData: FeaturesData = {
  heading: "Bridging commerce through intelligent logistics.",
  subheading: "From local sellers to leading brands, Espaze connects every order, warehouse, and doorstep in real time.",
  features: [
    {
      id: 1,
      title: "Pay only for the space you use.",
      description: "Track inventory, deliveries, and earnings from one place.",
      iconPath: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    },
    {
      id: 2,
      title: "Real-time allocation and dispatch.",
      description: "Smart routing ensures fastest delivery with optimal warehouse selection.",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      id: 3,
      title: "No need to rent or maintain warehouses",
      description: "Access our network of cloud-connected warehouses without the overhead.",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
  ]
};

export const sellerJoinNetworkData: JoinNetworkData = {
  heading: "Join the Espaze Seller Network",
  description: "Be part of India's most connected fulfillment platform. Whether you're an independent seller or a growing e-commerce brand, Espaze helps you reach customers faster and grow without limits.",
  buttonText: "Join Now",
  onClick: () => console.log("Join Now clicked")
};

