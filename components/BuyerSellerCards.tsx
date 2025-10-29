"use client";
import Link from "next/link";

export default function BuyerSellerCards() {
  return (
    <section className="w-full mt-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-10 text-black dark:text-white">
        BUILT FOR BOTH BUYERS AND SELLERS
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* ✅ Seller Card */}
        <Link
          href="http://localhost:5173/login"
          className="group border rounded-xl p-6 shadow-sm cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 bg-white dark:bg-zinc-900"
        >
          <div className="bg-gray-200 dark:bg-zinc-800 h-36 rounded-xl mb-5" />
          <h3 className="font-semibold mb-2 text-black dark:text-white">Seller</h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>Manage inventory remotely</li>
            <li>Track deliveries in real-time</li>
            <li>Scale without physical warehouses</li>
            <li>Pay only for the space you use</li>
          </ul>
        </Link>

        {/* ✅ Buyer Card */}
        <Link
          href="http://localhost:5173/login"
          className="group border rounded-xl p-6 shadow-sm cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 bg-white dark:bg-zinc-900"
        >
          <div className="bg-gray-200 dark:bg-zinc-800 h-36 rounded-xl mb-5" />
          <h3 className="font-semibold mb-2 text-black dark:text-white">Buyer</h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
            <li>Instant delivery from your favourite brands</li>
            <li>Real-time tracking</li>
            <li>Reliable & sustainable logistics</li>
            <li>Convenient doorstep delivery</li>
          </ul>
        </Link>
      </div>
    </section>
  );
}
