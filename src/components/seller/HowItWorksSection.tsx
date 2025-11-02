export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      label: "01",
      title: "Select template",
      description: "Create your account and onboard",
    },
    {
      id: 2,
      label: "02",
      title: "Enter details",
      description: "Add inventory & settings",
    },
    {
      id: 3,
      label: "03",
      title: "Start shipping",
      description: "We handle delivery and fulfillment",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container-wide mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--espaze-text-dark)]">How does it work?</h2>
        <p className="text-center mt-3 max-w-2xl mx-auto text-[rgba(17,24,39,0.7)]">From local sellers to leading brands, Espaze connects every order, warehouse and doorstep in real time.</p>

        <div className="relative mt-12">
          <div className="max-w-4xl mx-auto relative px-6">
            <svg className="absolute inset-0 w-full h-28 pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden>
              <path d="M20 70 C 260 20, 740 20, 980 70" fill="none" stroke="rgba(126,80,218,0.16)" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" />
            </svg>

            <div className="relative z-10 flex justify-between items-center h-28">
              {steps.map((s) => (
                <div key={s.id} className="flex flex-col items-center w-1/3 px-2">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-semibold shadow-md" style={{ background: 'var(--espaze-light)', color: 'var(--espaze-primary)', border: `2px solid var(--espaze-border)` }}>{s.label}</div>
                  <div className="mt-4 text-center">
                    <div className="font-semibold text-[var(--espaze-primary)]">{s.title}</div>
                    <div className="text-sm mt-1 text-[rgba(17,24,39,0.6)]">{s.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
