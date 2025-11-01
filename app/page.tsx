import Steps from "../component/steps";
import Products from "../component/Products";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      <main className="w-full overflow-x-hidden">
        <Steps />
        <div className="pt-8">
          <Products />
        </div>
      </main>
    </div>
  );
}
