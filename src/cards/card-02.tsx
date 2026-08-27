export function Card02() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="flex h-48 items-center justify-center bg-linear-to-br from-violet-500/30 via-fuchsia-500/10 to-transparent">
        <div className="rounded-xl border border-white/10 bg-black/40 px-6 py-4 text-sm text-white backdrop-blur">
          Product Preview
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-medium text-white">Aurora UI Kit</h3>

            <p className="mt-1 text-xs text-zinc-500">
              Modern component library
            </p>
          </div>

          <span className="text-sm font-semibold text-white">$49</span>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-white py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
