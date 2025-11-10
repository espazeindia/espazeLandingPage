"use client";

import { memo } from "react";

export interface JoinNetworkData {
  heading: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

interface GenericJoinNetworkProps {
  data: JoinNetworkData;
}

const GenericJoinNetwork = memo(({ data }: GenericJoinNetworkProps) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="text-left bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-2xl p-12 text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data.heading}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {data.description}
        </p>
        <button 
          onClick={data.onClick}
          className="bg-white text-purple-600 hover:text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105"
        >
          {data.buttonText}
        </button>
      </div>
    </section>
  );
});

GenericJoinNetwork.displayName = "GenericJoinNetwork";

export default GenericJoinNetwork;

