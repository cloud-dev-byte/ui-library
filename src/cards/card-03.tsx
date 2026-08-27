export function Card03() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-violet-500/30 bg-zinc-950 p-6 shadow-2xl shadow-violet-500/5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">Pro</h3>

        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
          Popular
        </span>
      </div>

      <div className="mt-5">
        <span className="text-4xl font-semibold tracking-tight text-white">
          $24
        </span>

        <span className="ml-1 text-sm text-zinc-500">/month</span>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Everything you need to build and launch modern websites.
      </p>

      <div className="mt-6 space-y-3">
        {["Unlimited projects", "Premium components", "Priority support"].map(
          (feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-zinc-400"
            >
              <span className="text-violet-400">✓</span>
              {feature}
            </div>
          ),
        )}
      </div>

      <button
        type="button"
        className="mt-7 w-full rounded-lg bg-violet-500 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400"
      >
        Get started
      </button>
    </div>
  );
}
