import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/footer";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header />
      
      <main className="pt-32 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-left mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">About </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Espaze</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Empowering businesses and customers with seamless e-commerce solutions
            </p>
          </section>

          {/* Our Story Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                At Espaze, we believe in simplifying the complex world of e-commerce. Founded with a vision to connect sellers, 
                customers, and delivery partners on one unified platform, we&apos;re revolutionizing how businesses operate and how 
                customers shop online.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our cloud-based platform streamlines everything from inventory management and order processing to fast, 
                reliable deliveries. We understand the challenges that businesses face in managing their operations, 
                and we&apos;ve built Espaze to be the solution.
              </p>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-purple-100">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">Our Mission</span>
            </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
              To empower sellers, customers, and delivery partners on one seamless platform — simplifying everything 
              from order management to fast, reliable deliveries. We&apos;re committed to making e-commerce accessible, 
              efficient, and profitable for everyone.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* For Sellers */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">For Sellers</h3>
                <p className="text-gray-700">
                  A comprehensive web platform to manage your entire business. Track inventory, process orders, 
                  and grow your business with powerful analytics.
                </p>
              </div>

              {/* For Customers */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">For Customers</h3>
                <p className="text-gray-700">
                  Shop with ease and track your orders in real-time. Enjoy seamless shopping with instant 
                  notifications and reliable delivery tracking.
                </p>
              </div>

              {/* For Delivery Partners */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">For Delivery Partners</h3>
                <p className="text-gray-700">
                  Streamlined delivery management with route optimization and real-time updates to ensure 
                  timely and efficient deliveries.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously evolve our platform with cutting-edge technology to stay ahead of market needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Reliability</h3>
                  <p className="text-gray-700">
                    We ensure fast, dependable service that businesses and customers can trust every single day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Simplicity</h3>
                  <p className="text-gray-700">
                    We make complex processes simple, allowing you to focus on what matters most - your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Customer-Centric</h3>
                  <p className="text-gray-700">
                    Your success is our success. We build solutions with your needs at the heart of everything we do.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-left bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-2xl p-12 text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of sellers and customers who trust Espaze for their e-commerce needs
            </p>
            <button className="bg-white text-purple-600 hover:text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:scale-105">
              Get Started Today
            </button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

