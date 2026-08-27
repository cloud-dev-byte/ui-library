export function Card01() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-950 p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 text-sm font-semibold text-white">
          JD
        </div>

        <div>
          <h3 className="text-sm font-medium text-white">John Doe</h3>

          <p className="mt-1 text-xs text-zinc-500">Frontend Developer</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-400">
        Building modern and accessible web experiences with React and
        TypeScript.
      </p>

      <div className="mt-5 flex gap-2">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
          React
        </span>

        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
          TypeScript
        </span>
      </div>
    </div>
  );
}
