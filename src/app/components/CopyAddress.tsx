"use client";

import { useState } from "react";

export default function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-4 border-4 border-cow-dark bg-cow-cream px-4 py-4 sm:px-6">
      <span className="truncate font-body text-sm font-semibold text-cow-text sm:text-lg md:text-xl">
        {address}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 border-4 border-cow-dark bg-cow-cream px-4 py-2 font-heading text-base text-cow-dark transition-transform hover:-translate-y-0.5 sm:text-xl"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
