"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  // Define animation variants with explicit types
  const containerVariant: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const boxVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Image
            src="/Espaze_logo__1_-removebg-preview.png"
            alt="espaze logo"
            width={140}
            height={50}
            priority
          />
        </div>

        <div className="flex space-x-8 text-gray-700 font-medium">
          <a href="#">Service</a>
          <a href="#">Products</a>
          <a href="#">Service</a>
          <a href="#">Service</a>
        </div>

        <button className="bg-gray-200 text-gray-800 px-4 py-1.5 rounded-full hover:bg-gray-300 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-32">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Delivering convenience through every order.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Espaze connects you to nearby sellers for faster, smarter deliveries —
          straight from the closest warehouse to your doorstep.
        </p>
        <button className="bg-gray-200 hover:bg-gray-300 transition px-6 py-2 rounded-full text-gray-800">
          Explore the App
        </button>
      </section>

      {/* Animated Section */}
      <motion.section
        className="text-center py-24 px-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Driving the future of smart commerce.
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          A unified network where customers, sellers, and logistics meet —
          instantly.
        </p>

        {/* Larger Feature Boxes */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Lightning-fast delivery from nearby warehouses",
              desc: "Reliable, eco-efficient logistics network.",
            },
            {
              title: "Access to trusted brands & local sellers",
              desc: "Quality products and verified sellers at your fingertips.",
            },
            {
              title: "Real-time tracking & updates",
              desc: "Stay informed with instant delivery status alerts.",
            },
          ].map((box, i) => (
            <motion.div
              key={i}
              variants={boxVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              className="border border-gray-300 rounded-2xl p-10 w-full md:w-[350px] lg:w-[380px] text-left hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="bg-gray-200 h-20 w-20 flex items-center justify-center mb-6 text-gray-500 text-sm rounded-md">
                icon
              </div>
              <h3 className="font-semibold text-xl mb-3 leading-snug">
                {box.title}
              </h3>
              <p className="text-gray-600 text-base">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
