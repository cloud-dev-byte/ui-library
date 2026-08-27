import * as React from "react";

type Button05Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button05({ className = "", ...props }: Button05Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      Explore
    </button>
  );
}
