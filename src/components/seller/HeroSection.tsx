import { memo } from "react";
import Button from "../shared/Button";

const HeroSection = memo(() => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[70vh] flex items-center py-20 md:py-24">
      <div className="max-w-7xl w-full px-6 ml-6 lg:ml-12">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Smarter Growth for Every Seller.
          </h1>

          {/* Description */}
          <div className="text-gray-600 text-lg md:text-xl space-y-2 mb-10 leading-relaxed">
            <p>
              At Espaze, we believe sellers shouldn't worry about logistics — they should focus on
              what they do best: selling great products.
            </p>
            <p className="mt-3">
              We handle storage, delivery, and fulfillment — so your business runs effortlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Join as a Seller
            </Button>
            <Button variant="secondary" size="lg">
              See a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
