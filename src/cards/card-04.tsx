export function Card04() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-950 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">Total Revenue</p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-sm text-emerald-400">
          $
        </div>
      </div>

      <div className="mt-5">
        <p className="text-3xl font-semibold tracking-tight text-white">
          $48,290
        </p>

        <div className="mt-2 flex items-center gap-2 text-xs">
          <span className="text-emerald-400">+12.5%</span>

          <span className="text-zinc-600">from last month</span>
        </div>
      </div>

      <div className="mt-6 h-16 overflow-hidden">
        <div className="flex h-full items-end gap-1">
          {[35, 50, 42, 65, 55, 72, 60, 85, 70, 95].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-emerald-500/30 transition hover:bg-emerald-400/50"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
