import Header from "./components/common/Header";
import Hero from "./components/sections/hero";
import Services from "./components/sections/services";
import ThreeSteps from "./components/sections/threeSteps";
import Products from "./components/sections/products";
import Footer from "./components/common/footer";



export default function Home() {
  return (
    <div className=" text-gray-900 font-sans hideSideBar">
      <Header />

      <div className="w-full space-y-16 overflow-hidden">
        <Hero />
        <ThreeSteps />
        {/* <Services /> */}
        <Products />
      </div>

      <Footer />
    </div>
  );
}
