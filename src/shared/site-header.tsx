import Link from "next/link";
import { siteConfig } from "./site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
            U
          </div>

          <span className="text-lg font-semibold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>

        <Link
          href={siteConfig.gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/8 hover:text-white"
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}
