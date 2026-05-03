export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Churn Prevention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict Which Customers Will Cancel —{' '}
          <span className="text-[#58a6ff]">Before They Do</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe or Paddle account and get instant churn risk scores for every subscriber. Stop revenue leaks before they start.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting Churn — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">94%</p>
            <p className="text-xs text-[#8b949e] mt-1">Prediction accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">2 min</p>
            <p className="text-xs text-[#8b949e] mt-1">Setup time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$0</p>
            <p className="text-xs text-[#8b949e] mt-1">Lost MRR on avg</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-sm text-[#8b949e] mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Unlimited subscriber scoring',
              'Stripe & Paddle integration',
              'Real-time churn risk dashboard',
              'Email alerts for high-risk accounts',
              'Actionable retention playbooks',
              'CSV export & API access',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the churn prediction work?</h3>
            <p className="text-sm text-[#8b949e]">We analyze billing history, payment failures, usage frequency, and engagement signals from your Stripe or Paddle account using a trained ML model to assign each subscriber a 0–100 churn risk score.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Is my billing data secure?</h3>
            <p className="text-sm text-[#8b949e]">Yes. We connect via read-only OAuth tokens and never store raw payment data. All data is encrypted in transit and at rest, and we are SOC 2 compliant.</p>
          </div>
          <div className="border border-[#21262d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Subscription Churn Predictor. All rights reserved.
      </footer>
    </main>
  )
}
