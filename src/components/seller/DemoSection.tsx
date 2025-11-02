export default function DemoSection() {
  const steps = [
    { id: 1, label: "01", text: "Sign up & onboard" },
    { id: 2, label: "02", text: "List inventory" },
    { id: 3, label: "03", text: "Start shipping" },
  ];

  return (
    <section className="w-full seller-bg">
      <div className="container-wide mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
              <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
                <div className="text-gray-600">demo video</div>
              </div>

              <button aria-label="Play demo" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-full w-16 h-16 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--espaze-accent), var(--espaze-mid))', color: 'var(--espaze-primary)'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7-11-7z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Quick demo</h3>
            <p className="text-gray-700 mt-3">Watch a short walkthrough that shows how Espaze helps you manage inventory, orders and deliveries — all from one dashboard.</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3" style={{ background: 'var(--espaze-light)', color: 'var(--espaze-primary)'}}>✓</span>
                <span>Easy onboarding in minutes</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3" style={{ background: 'var(--espaze-light)', color: 'var(--espaze-primary)'}}>✓</span>
                <span>Real-time inventory &amp; dispatch</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full mr-3" style={{ background: 'var(--espaze-light)', color: 'var(--espaze-primary)'}}>✓</span>
                <span>Transparent fulfillment metrics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
