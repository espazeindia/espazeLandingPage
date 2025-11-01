import { memo } from "react";
import Button from "../shared/Button";

const JoinNetworkSection = memo(() => {
  return (
    <section 
      className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16 md:py-24" 
      style={{ paddingBlock: 'calc(var(--spacing) * 10)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Espaze Seller Network
          </h2>

          {/* Description */}
          <div className="text-indigo-100 text-base md:text-lg mb-8 max-w-3xl mx-auto">
            <p>
              Be part of India's most connected fulfillment platform. Whether you're an independent
              seller or a growing e-commerce brand, Espaze helps you reach customers faster and grow
              without limits.
            </p>
          </div>

          {/* CTA Button */}
          <Button variant="secondary" size="md">
            Join Now →
          </Button>
        </div>
      </div>
    </section>
  );
});

JoinNetworkSection.displayName = "JoinNetworkSection";

export default JoinNetworkSection;
