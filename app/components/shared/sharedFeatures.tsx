import { memo } from "react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

export interface FeaturesData {
  heading: string;
  subheading: string;
  features: Feature[];
}

interface GenericFeaturesProps {
  data: FeaturesData;
}

const FeatureCard = memo(({ feature }: { feature: Feature }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-600 to-pink-500">
        <svg
          className="w-8 h-8 text-white"
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
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-purple-400" />
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

const GenericFeatures = memo(({ data }: GenericFeaturesProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-br from-purple-700 to-pink-500 bg-clip-text text-transparent">
              {data.heading}
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            {data.subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
});

GenericFeatures.displayName = "GenericFeatures";

export default GenericFeatures;

