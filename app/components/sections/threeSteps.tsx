"use client";

import { memo, useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import Card from "../ui/Card";

type Step = {
	id: string;
	title: string;
  body: string;
  left?: string;
  width?: string;
};

const STEPS: Step[] = [
  {
    id: "01",
    title: "Connect & Sync",
    body: "Sellers connect their store and upload products. Espaze automatically syncs inventory across our network.",
    left: "-100px",
    width: "330px",
  },
  {
    id: "02",
    title: "Smart Storage",
    body: "Products are distributed across nearby cloud-connected warehouses for faster access and fulfillment.",
    left: "-100px",
    width: "330px",
  },
  {
    id: "03",
    title: "Instant Delivery",
    body: "When a customer orders, the nearest warehouse processes it and our delivery partner ensures rapid doorstep delivery.",
    left: "-100px",
    width: "330px",
  },
];

const FEATURES = [
  "Real-time inventory visibility",
  "Instant order fulfillment",
  "Scalable for every seller",
] as const;

// We'll rely on Tailwind responsive utilities rather than large CSS-variable margins.
// The layout below uses a 9-column grid on md+ screens so the center column can host
// a vertical timeline while the left/right 4-column areas contain the step cards.

// Memoized components for better performance
const FeatureItem = memo(({ text }: { text: string }) => (
	<li className="flex items-start gap-3">
		<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white text-sm flex-shrink-0 shadow-md">
			<Check className="w-4 h-4" />
		</span>
    <span className="text-purple-700 text-lg md:text-lg font-medium">{text}</span>
	</li>
));
FeatureItem.displayName = "FeatureItem";

// Card used to render step content. Wraps content in the project's Card component so
// the visual treatment matches other card-based sections (see services.tsx).
const StepCard = memo(({ step }: { step: Step }) => {
  return (
    <Card className="relative p-6 w-full">
      <h4 className="font-semibold mb-1 text-gray-900">{step.title}</h4>
      <p className="text-gray-700">{step.body}</p>
    </Card>
  );
});
StepCard.displayName = "StepCard";

export default function Steps() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [linePositions, setLinePositions] = useState<{ top: number | null; bottom: number | null }>({ top: null, bottom: null });
  const [overlayTops, setOverlayTops] = useState<number[]>([]);

    useEffect(() => {
      function updateLine() {
        if (!sectionRef.current) return;
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
        if (rows.length === 0) return;
        const first = rows[0].getBoundingClientRect();
        const last = rows[rows.length - 1].getBoundingClientRect();

        // center points of first and last rows relative to section
        const firstCenter = first.top - sectionRect.top + first.height / 2;
        const lastCenter = last.top - sectionRect.top + last.height / 2;

        // Add a small clamp/padding so the line doesn't touch card edges
        const padding = 20; // px
        const top = Math.max(firstCenter - padding, 20);
        const bottom = Math.max(sectionRect.height - lastCenter - padding, 20);

        setLinePositions({ top, bottom });

        // compute overlay centers for each row (used to position badges on the timeline)
        const tops = rows.map((r) => {
          const rect = r.getBoundingClientRect();
          return rect.top - sectionRect.top + rect.height / 2;
        });
        setOverlayTops(tops);
      }

      // run on mount and when window resizes/orientation changes
      updateLine();
      window.addEventListener("resize", updateLine);
      window.addEventListener("orientationchange", updateLine);
      return () => {
        window.removeEventListener("resize", updateLine);
        window.removeEventListener("orientationchange", updateLine);
      };
    }, []);

  return (
    <section className="w-full relative">
      {/* Grid wrapper: two columns on md+ (left 50vw, right auto). The ref is on this wrapper so
          overlay-top calculations use a single reference rect. Mobile keeps stacked flow. */}
      <div ref={sectionRef} className="md:grid md:grid-cols-[50vw_1fr]">
        <ScrollReveal direction="left" className="w-full px-6 md:px-12 md:pr-8">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-zinc-900">
              It all starts with
              <br />
              <span className="block text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-500">
                3 easy steps
              </span>
            </h2>

            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 mb-6" />

            <p className="text-zinc-800 text-lg md:text-xl mb-4 leading-relaxed">
              Espaze simplifies e-commerce logistics by bringing sellers, warehouses, and customers
              together on one intelligent platform.
            </p>

            <p className="text-zinc-600 text-base md:text-lg mb-6">
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

        {/* Right side container: centered content. We no longer rely on md:pl to avoid overlap; the grid
            enforces the left column width. */}
        <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-start gap-12">
          {/* Right Column: Timeline (takes remaining space) */}
          <ScrollReveal direction="right" className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-full">
              {/* Single responsive vertical line used for both mobile and desktop (mobile: left 38px/top/bottom 60px; md+: centered with 100px offsets) */}
              <div
                className="absolute w-px border-l-2 border-dashed border-zinc-400 z-0 left-[38px] md:left-1/2 md:-translate-x-1/2"
                style={{
                  top: linePositions.top ? `${linePositions.top}px` : undefined,
                  bottom: linePositions.bottom ? `${linePositions.bottom}px` : undefined,
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-6">
                {STEPS.map((step, idx) => {
                  const isLeft = idx % 2 === 0; // alternate starting with left for first
                  return (
                      <div key={step.id} ref={(el) => { rowRefs.current[idx] = el; }} className="flex md:grid md:grid-cols-9 items-center gap-4">
                      {/* left column (md-only) */}
                      <div className={`hidden md:flex md:col-span-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {isLeft ? (
                          <div
                            className="w-full md:max-w-md"
                            style={{
                              ...(step.left ? { position: 'relative', left: step.left } : {}),
                              ...(step.width ? { width: step.width } : { width: '330px' }),
                              height: '149.6px',
                            }}
                          >
                            <StepCard step={step} />
                          </div>
                        ) : (
                          <div className="w-full md:max-w-md" />
                        )}
                      </div>

                      {/* number column: responsive badge centered in the middle column on md+ and offset on mobile */}
                      <div className="flex items-center md:col-span-1 justify-center">
                            <div className="ml-[38px] md:hidden flex items-center justify-center relative z-10">
                            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-semibold shadow-sm text-sm md:text-base">
                              {step.id}
                            </div>
                          </div>
                      </div>

                      {/* right/content column */}
                      <div className={`flex-1 md:col-span-4`}> 
                        {/* Mobile: always show content here. On md: if the step isLeft, it's shown in the left column, so hide here via md:hidden. */}
                        <div
                          className={`w-full md:max-w-md ${isLeft ? 'md:hidden' : ''}`}
                          style={{
                            ...(step.left ? { position: 'relative', left: step.left } : {}),
                            ...(step.width ? { width: step.width } : { width: '330px' }),
                            height: '149.6px',
                          }}
                        >
                          <StepCard step={step} />
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Desktop overlay badges: position on the dotted line using measured tops */}
                {overlayTops.map((top, idx) => (
                  <div
                    key={`overlay-${idx}`}
                    className="hidden md:flex absolute items-center justify-center z-10"
                    style={{ left: '36%', top: top ? `${top}px` : undefined, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 border-2 border-transparent text-white font-semibold shadow-md">
                      {STEPS[idx].id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
    </section>
  );
}

