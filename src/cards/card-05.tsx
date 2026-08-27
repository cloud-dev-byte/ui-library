export function Card05() {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="h-40 bg-linear-to-br from-blue-500/20 via-violet-500/20 to-pink-500/10" />

      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-400">
            Development
          </span>

          <span className="text-xs text-zinc-600">5 min read</span>
        </div>

        <h3 className="mt-4 text-lg font-medium leading-7 text-white">
          Building better interfaces with reusable components
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          A practical guide to creating flexible and maintainable UI components
          for modern applications.
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-zinc-600">Aug 27, 2026</span>

          <button
            type="button"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Read article →
          </button>
        </div>
      </div>
    </article>
  );
}
