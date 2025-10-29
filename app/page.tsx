import BuyerSellerCards from "@/components/BuyerSellerCards";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full flex flex-col items-center justify-center py-10 px-4 sm:px-10">
        {/* ✅ Only Buyer/Seller UI Visible */}
        <BuyerSellerCards />
      </main>
    </div>
  );
}
