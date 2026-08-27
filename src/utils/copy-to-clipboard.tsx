"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyToClipboardProps = {
  code: string;
};

export function CopyToClipboard({ code }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      console.error("Failed to copy code");
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Code copied" : "Copy code"}
      className="inline-flex items-center gap-2 rounded-md border border-white/8 bg-white/4 px-2.5 py-1.5 text-xs font-medium text-zinc-400 transition hover:bg-white/8 hover:text-white"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          Copy
        </>
      )}
    </button>
  );
}
