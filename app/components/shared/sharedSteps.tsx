'use client';

import React from 'react';

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface StepsData {
  heading: string;
  steps: Step[];
  demoLabel: string;
  videoUrl?: string;
}

interface StepsDemoProps {
  data: StepsData;
}

export default function StepsDemo({ data }: StepsDemoProps) {
  const { heading, steps } = data;
  return (
    <section className="relative bg-white py-20">

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="block text-gray-900">{heading}</span>
          </h2>

        </div>

        <div className="mb-16">
          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-br from-purple-200 via-purple-300 to-pink-200" />
              {/* Steps */}
              <div className="relative z-10 flex justify-between items-start gap-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="group flex-1 flex flex-col items-center text-center"
                  >
                    {/* Circle */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
                        {step.number}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="max-w-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center gap-4"
              >
                {/* Circle with Number */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xl font-bold text-white">
                    {step.number}
                  </div>
                  {/* Connecting Line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-10 bg-gradient-to-b from-purple-200 via-purple-300 to-pink-200 mt-4" />
                  )}
                </div>

                {/* Step Info */}
                <div className="max-w-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

