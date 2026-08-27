import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-xl font-bold text-black">
          U
        </div>

        <p className="mt-8 text-sm font-medium text-violet-400">404</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Design not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Explore the available UI designs instead.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Back to UI Vault
        </Link>
      </div>
    </main>
  );
}
