import * as React from "react";

type Button04Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button04({ className = "", ...props }: Button04Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/6 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      Learn More
    </button>
  );
}
