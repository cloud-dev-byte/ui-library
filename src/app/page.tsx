import { exploreItems } from "@/registry/explore";
import { siteConfig } from "@/shared/site-config";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Beautiful UI designs
              <span className="block text-zinc-500">made for developers.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Discover modern components, sections and complete page designs.
              Explore the design, inspect the code and build it into your own
              project.
            </p>

            <div className="mt-8">
              <Link
                href={siteConfig.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/4 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/8"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-medium text-violet-400">Explore</p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Find the right UI for your project
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-500">
              From small reusable components to complete website designs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {exploreItems.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group rounded-2xl border border-white/8 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/4"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 text-sm font-semibold text-white">
                    {category.title.charAt(0)}
                  </div>
                  <div className="text-gray-600">{category.count}</div>
                </div>

                <p className="text-xs font-medium uppercase tracking-wide text-violet-400">
                  {category.type}
                </p>

                <h3 className="mt-2 text-lg font-medium text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {category.description}
                </p>

                <div className="mt-6 text-sm text-zinc-400 transition group-hover:text-white">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/6">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-3xl border border-white/8 bg-white/2 px-6 py-16 text-center sm:px-12">
            <p className="text-sm font-medium text-violet-400">Open Source</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Built together, shared with everyone.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
              Use any design you find here in your own projects, customize it,
              learn from the code, and make it your own. Have a design in mind?
              Create it and contribute it to {siteConfig.name} through a pull
              request.
            </p>

            <Link
              href={siteConfig.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl border border-white/10 bg-white/4 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/8 mt-5"
            >
              Contribute a design
            </Link>

            <p className="mt-6 text-xs text-zinc-600">
              Have an idea, a new design, or want to improve an existing one?
              Pull requests are welcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
