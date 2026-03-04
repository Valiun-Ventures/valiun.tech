"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleShare}
            className={`w-full py-4 rounded-2xl border transition-all text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 ${copied
                ? "bg-green-500/10 border-green-500/30 text-green-500"
                : "bg-white/[0.02] border-white/5 text-slate-500 hover:bg-white/[0.05] hover:text-slate-300"
                }`}
        >
            {copied ? (
                <>
                    <Check className="w-3.5 h-3.5" />
                    Role Link Copied!
                </>
            ) : (
                <>
                    <Share2 className="w-3.5 h-3.5" />
                    Share this Role
                </>
            )}
        </button>
    );
}
