import * as React from "react";

type Button06Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button06({ className = "", ...props }: Button06Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      Confirm
    </button>
  );
}
