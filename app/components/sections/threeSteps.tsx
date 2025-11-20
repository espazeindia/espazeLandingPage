"use client";

import { memo, useEffect, useState } from "react";
import { Check } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

type Step = {
  id: string;
  title: string;
  body: string;
};

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
] as const;

const TIMELINE_STYLES = {
  top: "calc(var(--spacing) * 19)",
  bottom: "calc(var(--spacing) * 19)",
} as const;



// Memoized components for better performance
const FeatureItem = memo(({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-pink-500 text-white text-sm shrink-0 shadow-md">
      <Check className="w-4 h-4" />
    </span>
    <span className="text-gray-900 text-base">{text}</span>
  </li>
));
FeatureItem.displayName = "FeatureItem";

const StepCard = memo(({ step, isLeft, BOX_MARGIN }: { step: Step; isLeft: boolean, BOX_MARGIN: string }) => {
  const baseClasses = "w-full rounded-xl bg-purple-50 p-4 lg:p-5 2xl:p-6 lg:text-xs  xl:text-sm  shadow-sm";
  const margin = isLeft ? { marginRight: BOX_MARGIN } : { marginLeft: BOX_MARGIN };
  const orderClass = isLeft ? "mr-8 order-last" : "md:ml-5";

  return (
    <div className={`${baseClasses} ${orderClass}`} style={margin}>
      <h4 className="font-semibold mb-1 text-gray-900">{step.title}</h4>
      <p className="text-gray-700">{step.body}</p>
    </div>
  );
});
StepCard.displayName = "StepCard";

const StepNumber = memo(({ id }: { id: string }) => (
  <div className="absolute md:left-1/2 -translate-x-1/2 flex items-center justify-center">
    <div className="flex h-10 w-10 lg:text-sm lg:w-7 lg:h-7 2xl:h-10 2xl:w-10  items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-pink-500 border-2 border-transparent text-white font-semibold shadow-md">
      {id}
    </div>
  </div>
));
StepNumber.displayName = "StepNumber";

export default function Steps() {
  const [BOX_MARGIN, setBoxMargin] = useState("calc(var(--spacing) * 87)");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const multiplier = width < 770 ? 10: width < 1024 ? 92 : width < 1100 ? 82 : width < 1180 ? 85 : 90;
      setBoxMargin(`calc(var(--spacing) * ${multiplier})`);
    };

    handleResize(); // Run first time
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-3 lg:gap-6 xl:gap-8   2xl:gap-12">
        {/* Left Column: Heading & Features */}
        <ScrollReveal direction="left" className=" w-full lg:w-5/12 2xl:w-1/2">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6 text-black lg:text-3xl 2xl:text-4xl ">
              It all starts with
              <br />
              <span className="text-5xl sm:text-6xl lg:text-4xl 2xl:text-5xl">3 easy steps</span>
            </h2>

            <p className="text-black mb-4 lg:text-sm 2xl:text-base">
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
        </ScrollReveal>

        {/* Right Column: Timeline */}
        <ScrollReveal direction="right" className="w-full lg:w-8/12 2xl:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Vertical Dotted Line */}
            <div
              className="block absolute md:left-1/2 -translate-x-1/2 border-l-2 border-dashed border-zinc-400"
              style={TIMELINE_STYLES}
              aria-hidden="true"
            />

            <div className="flex-col gap-2 hidden md:flex">
              {STEPS.map((step, idx) => {
                const isLeft = idx % 2 === 1;
                return (
                  <div key={step.id} className="relative flex items-center py-1">
                    <StepCard step={step} isLeft={isLeft} BOX_MARGIN={BOX_MARGIN} />
                    <StepNumber id={step.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 md:hidden">
              {STEPS.map((step, idx) => {
                return (
                  <div key={step.id} className=" flex items-center py-1">
                    <StepCard step={step} isLeft={false} BOX_MARGIN={BOX_MARGIN} />
                    <StepNumber id={step.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

