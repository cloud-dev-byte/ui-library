import * as React from "react";

type Button01Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button01({ className = "", ...props }: Button01Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      Button
    </button>
  );
}
