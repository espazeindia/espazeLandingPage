"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface HeroData {
  heading: string;
  descriptions: string[];
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
  backgroundImage?: string;
}

interface GenericHeroProps {
  data: HeroData;
}

const GenericHero = memo(({ data }: GenericHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-purple-100 to-pink-50 min-h-[100vh] flex items-center py-28 md:py-36 relative overflow-hidden">
      {/* Full Background Image */}
      {data.backgroundImage && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={data.backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
      )}

      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            {data.heading}
          </h1>

          {/* Description */}
          <div className="text-gray-600 text-lg md:text-xl space-y-2 mb-10 leading-relaxed">
            {data.descriptions.map((desc, index) => (
              <p key={index} className={index > 0 ? "mt-3" : ""}>
                {desc}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={data.primaryButton.onClick}
              className="group bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              {data.primaryButton.text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={data.secondaryButton.onClick}
              className="group bg-white hover:bg-purple-50 text-purple-600 hover:text-pink-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-purple-300 hover:border-pink-400 flex items-center gap-2"
            >
              {data.secondaryButton.text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

GenericHero.displayName = "GenericHero";

export default GenericHero;

