import { memo } from "react";
import Button from "../shared/Button";

const JoinNetworkSection = memo(() => {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ paddingBlock: 'calc(var(--spacing) * 10)', background: 'linear-gradient(90deg, var(--espaze-primary), var(--espaze-mid))' }}
    >
  <div className="container-wide mx-auto px-6 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Espaze Seller Network
          </h2>
          <div className="text-base md:text-lg mb-8 max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <p>
              Be part of India's most connected fulfillment platform. Whether you're an independent
              seller or a growing e-commerce brand, Espaze helps you reach customers faster and grow
              without limits.
            </p>
          </div>
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
