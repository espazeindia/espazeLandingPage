import { memo } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

const FEATURES: Feature[] = [
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
];

const FeatureCard = memo(({ feature }: { feature: Feature }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={feature.iconPath} />
        </svg>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">
        {feature.description}
      </p>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-500 transition-all duration-300" />
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const FeaturesSection = memo(() => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bridging commerce through intelligent logistics.
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            From local sellers to leading brands, Espaze connects every order, warehouse, and doorstep
            in real time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";

export default FeaturesSection;
