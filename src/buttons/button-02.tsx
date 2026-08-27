import * as React from "react";

type Button02Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button02({ className = "", ...props }: Button02Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      Button
    </button>
  );
}
