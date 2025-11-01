import Link from "next/link";
import { memo } from "react";

const SELLER_FEATURES = [
  "Manage inventory remotely",
  "Track deliveries in real-time",
  "Pay only for the space you use",
  "Scale without physical warehouses",
];

const BUYER_FEATURES = [
  "Instant delivery from your favorite brands or sellers",
  "Real-time tracking",
  "Reliable and sustainable logistics",
];

const FeatureItem = memo(({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-black flex-shrink-0" />
    <span className="text-gray-900 text-base">{text}</span>
  </li>
));
FeatureItem.displayName = "FeatureItem";

const BuyersSellersSection = memo(() => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-left">
          Built for both buyers and sellers
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sellers Card - Clickable */}
          <Link href="/seller" className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100" />

              {/* Content */}
              <div className="bg-gray-200 p-8">
                <ul className="space-y-3">
                  {SELLER_FEATURES.map((feature, index) => (
                    <FeatureItem key={index} text={feature} />
                  ))}
                </ul>
              </div>
            </div>
          </Link>

          {/* Buyers Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100" />

            {/* Content */}
            <div className="bg-gray-200 p-8">
              <ul className="space-y-3">
                {BUYER_FEATURES.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

BuyersSellersSection.displayName = "BuyersSellersSection";

export default BuyersSellersSection;
