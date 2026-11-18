"use client";

import React from "react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919061381010?text=Hello%20Nuvamed%20Diagnostics%2C%20I%20would%20like%20to%20inquire%20about%20reagents%2C%20pricing%2C%20and%20institutional%20quotations.";

  return (
    <aside
      aria-label="WhatsApp Quick Support"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Nuvamed Procurement Desk (+91 9061381010)"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-emerald-400/40"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.84.5 3.56 1.37 5.04L2 22l5.12-1.34c1.43.78 3.06 1.22 4.92 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.27c-1.6 0-3.08-.43-4.37-1.18l-.31-.18-3.25.85.87-3.17-.2-.33a8.214 8.214 0 0 1-1.27-4.46c0-4.56 3.71-8.27 8.27-8.27 4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.11-.22-.17-.47-.3z" />
        </svg>

        <span className="text-xs font-bold tracking-tight pr-1 hidden sm:inline">
          WhatsApp Desk
        </span>
        <span className="font-mono text-[11px] bg-black/20 px-2 py-0.5 rounded-full hidden md:inline">
          +91 9061381010
        </span>
      </a>
    </aside>
  );
}
