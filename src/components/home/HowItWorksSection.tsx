import { memo } from "react";

interface Step {
  id: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    id: "01",
    title: "Connect & Sync",
    body: "Sellers connect their store and upload products. Espaze automatically syncs inventory across our network.",
  },
  {
    id: "02",
    title: "Smart Storage",
    body: "Products are distributed across nearby cloud-connected warehouses for faster access and fulfillment.",
  },
  {
    id: "03",
    title: "Instant Delivery",
    body: "When a customer orders, the nearest warehouse processes it and our delivery partner ensures rapid doorstep delivery.",
  },
];

const FEATURES = [
  "Real-time inventory visibility",
  "Instant order fulfillment",
  "Scalable for every seller",
];

const TIMELINE_STYLES = {
  top: "calc(var(--spacing) * 19)",
  bottom: "calc(var(--spacing) * 19)",
} as const;

const BOX_MARGIN = "calc(var(--spacing) * 72)";

const FeatureItem = memo(({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-sm flex-shrink-0" style={{ background: 'var(--espaze-primary)' }}>
      ✓
    </span>
    <span className="text-gray-900 text-base">{text}</span>
  </li>
));
FeatureItem.displayName = "FeatureItem";

const StepCard = memo(({ step, isLeft }: { step: Step; isLeft: boolean }) => {
  const baseClasses = "w-full max-w-md rounded-xl p-6 text-sm text-black shadow-sm";
  const baseStyle = { background: 'linear-gradient(180deg, rgba(126,80,218,0.06), rgba(140,82,255,0.03))' };
  const margin = isLeft ? { marginRight: BOX_MARGIN } : { marginLeft: BOX_MARGIN };
  const orderClass = isLeft ? "mr-8 order-last" : "ml-8";

  return (
    <div className={`${baseClasses} ${orderClass}`} style={{ ...margin, ...baseStyle }}>
      <h4 className="font-semibold mb-1 text-black">{step.title}</h4>
      <p className="text-gray-700">{step.body}</p>
    </div>
  );
});
StepCard.displayName = "StepCard";

const StepNumber = memo(({ id }: { id: string }) => (
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-semibold" style={{ border: '2px solid var(--espaze-border)', color: 'var(--espaze-primary)'}}>
      {id}
    </div>
  </div>
));
StepNumber.displayName = "StepNumber";

const HowItWorksSection = memo(() => {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2 md:self-center">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6 text-black">
            It all starts with
            <br />
            <span className="text-5xl sm:text-6xl">3 easy steps</span>
          </h2>

          <p className="text-black mb-4">
            Espaze simplifies e-commerce logistics by bringing sellers, warehouses, and customers
            together on one intelligent platform.
          </p>

          <p className="text-gray-700 mb-6">
            From product storage to instant doorstep delivery — everything works in perfect sync to
            save time, space, and cost.
          </p>

          <ul className="space-y-3" aria-label="Key features">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature} text={feature} />
            ))}
          </ul>
        </div>

        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <div
              className="hidden md:block absolute left-1/2 -translate-x-1/2 border-l-2 border-dashed border-zinc-400"
              style={TIMELINE_STYLES}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2">
              {STEPS.map((step, idx) => {
                const isLeft = idx % 2 === 1;
                return (
                  <div key={step.id} className="relative flex items-center py-1">
                    <StepCard step={step} isLeft={isLeft} />
                    <StepNumber id={step.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HowItWorksSection.displayName = "HowItWorksSection";

export default HowItWorksSection;
