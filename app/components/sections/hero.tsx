"use client";

import { ArrowRight, TrendingUp, Users, Package } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start ">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="w-full h-full scale-100 object-cover"
          autoPlay
          loop
          muted
          playsInline
          src= "/bbb.mp4"
          width={1800}
          height={1800}
        />
        
        
        <div className="absolute inset-0 bg-purple-900/20 shadow" />
      </div>


      {/* Decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float" style={{ animationDelay: "4s" }}></div>
      </div> */}

      <div className="max-w-6xl pl-6 pr-2 md:px-6 py-20  sm:ml-28 md:py-32 relative z-10">
        <div className="max-w-3xl mt-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 animate-fade-in border-2 border-purple-300 bg-linear-to-br from-purple-100 to-pink-100">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium bg-linear-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">Now accepting early partners</span>
          </div>

          {/* Main Heading */}
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-in-left">
            <span className="text-white">Smart warehousing.</span>
            <br />
            <span className="text-white">Instant delivery.</span>
          </h1>

          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-2xl animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            Espaze connects brands and sellers to customers through intelligent cloud warehousing and rapid delivery solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <Link href="/seller">
              <button className="group bg-linear-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                Start Selling Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/customer">
              <button className="group bg-white hover:bg-purple-50 text-purple-600 hover:text-pink-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-purple-300 hover:border-pink-400 flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

