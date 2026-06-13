export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Local Search Rankings<br />
          <span className="text-[#58a6ff]">vs Competitors — Daily</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your Google My Business position for every keyword that matters. See exactly where competitors outrank you and get daily email reports to stay ahead.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "Daily", label: "Automated rank checks" },
            { stat: "10+", label: "Competitors tracked per location" },
            { stat: "100%", label: "Local pack coverage" }
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl font-extrabold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to dominate local search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Daily GMB rank tracking",
              "Up to 10 competitor profiles",
              "Unlimited local keywords",
              "Daily email digest reports",
              "Historical ranking charts",
              "Multi-location support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secured by Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the rank tracking work?",
              a: "We automatically scrape Google Maps and the local pack daily for your target keywords, recording your GMB position and your competitors' positions so you can see trends over time."
            },
            {
              q: "Which competitors can I track?",
              a: "You can add up to 10 competitor Google My Business profiles per location. We'll monitor their rankings alongside yours for every keyword you're tracking."
            },
            {
              q: "What's included in the daily email reports?",
              a: "Each morning you'll receive a summary of your current rankings, any position changes from the previous day, and a comparison against your top competitors — all in a clean, scannable format."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GMB Rank Tracker. All rights reserved.
      </footer>
    </main>
  );
}
