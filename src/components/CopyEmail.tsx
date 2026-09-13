"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the mailto link beside this still works.
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="glass card-hover relative z-10 rounded-[var(--radius-chip)] px-3 py-1.5 text-[var(--text-sm)] text-[var(--color-muted)] hover:text-[var(--color-text)]"
    >
      <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only" role="status">
        {copied ? "Email address copied to clipboard" : "Copy email address"}
      </span>
    </button>
  );
}
