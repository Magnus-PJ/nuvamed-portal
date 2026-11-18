"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import GlobalSearch from "./GlobalSearch";

export default function Header() {
  const { totalCount, setDrawerOpen } = useCart();
  const pathname = usePathname();

  const navLinks = [
    { href: "/categories/liquid-biopsy", label: "Liquid Biopsy & cfDNA", badge: "Lead" },
    { href: "/categories/exosomes", label: "Exosome & EV Tools", badge: "Lead" },
    { href: "/categories/cell-culture-qc", label: "Cell Culture QC", badge: "Lead" },
    { href: "/categories/culture-media", label: "Culture Media" },
    { href: "/categories/cell-therapy", label: "Cell Therapy Tools" },
    { href: "/categories/dna-rna-extraction", label: "DNA/RNA Extraction" },
    { href: "/elisa-finder", label: "ELISA & Antibodies", badge: "13K+" },
    { href: "/categories/lab-essentials", label: "Lab Essentials" },
    { href: "/categories/bulk-oem", label: "Bulk & OEM" },
  ];

  return (
    <>
      {/* Top Clinical & Statutory Utility Bar */}
      <aside className="bg-[#0b1d33] text-slate-300 text-[11px] sm:text-xs py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono bg-white/10 px-2 py-0.5 rounded text-white border border-white/15">
              HSN: 3822 00 90
            </span>
            <span className="hidden sm:inline text-slate-300">Nuvamed Diagnostics LLP Limited</span>
            <span className="text-slate-600">&bull;</span>
            <span>Official INR Proforma Invoices in <strong>4 Business Hours</strong></span>
            <span className="text-slate-600 hidden md:inline">&bull;</span>
            <span className="hidden md:inline text-slate-300">DSIR 5% Concessional GST / 18% Tax Billing</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 px-2 py-0.5 rounded text-[11px]">
              GeM Registered
            </span>
            <a
              href="mailto:info@magnusdiagnostics.in"
              className="text-slate-200 hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <span>info@magnusdiagnostics.in</span>
            </a>
            <span className="text-slate-600">&bull;</span>
            <a
              href="https://wa.me/919061381010?text=Hello%20Nuvamed%20Diagnostics%2C%20I%20would%20like%20to%20inquire%20about%20products%20and%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-700/80 hover:bg-emerald-900 px-2 py-0.5 rounded text-[11px] flex items-center gap-1 transition-colors"
            >
              <span>💬 WhatsApp: +91 9061381010</span>
            </a>
            <span className="text-slate-600 hidden xl:inline">&bull;</span>
            <span className="hidden xl:inline text-slate-300 text-[11px]">Advance Payment Only / PO Wherever Necessary</span>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0b1d33] to-[#143152] text-white font-black text-lg flex items-center justify-center rounded-lg shadow-sm group-hover:from-accent group-hover:to-teal-700 transition-all">
              ND
            </div>
            <div>
              <div className="font-extrabold text-lg text-[#0b1d33] leading-tight tracking-tight">
                Nuvamed Diagnostics
              </div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                Authorized Distributor &bull; Luminous BioSciences USA
              </div>
            </div>
          </Link>

          {/* Interactive Global Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md">
            <GlobalSearch />
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="mailto:info@magnusdiagnostics.in?subject=Product%20Inquiry%20-%20Nuvamed%20Diagnostics"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-2 rounded-lg transition-colors"
            >
              <span>Email Desk</span>
            </a>

            <a
              href="https://wa.me/919061381010?text=Hello%20Nuvamed%20Diagnostics%2C%20I%20would%20like%20to%20inquire%20about%20products%20and%20pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-2 rounded-lg transition-colors"
            >
              <span>💬 WhatsApp (+91 9061381010)</span>
            </a>

            <button
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center gap-2 bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow"
              aria-label="View Quote Cart"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Request Quote</span>
              <span className="bg-accent text-white font-mono text-[11px] px-1.5 py-0.2 rounded-full min-w-[20px] text-center font-bold">
                {totalCount}
              </span>
            </button>
          </div>
        </div>

        {/* 9 Core Navigation Categories */}
        <nav className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <ul className="flex items-center gap-1 text-xs font-medium whitespace-nowrap py-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? "bg-slate-100 text-[#0b1d33] font-bold"
                          : "text-slate-600 hover:text-[#0b1d33] hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span
                          className={`font-mono text-[10px] px-1.5 py-0.2 rounded font-bold ${
                            item.badge === "Lead"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-sky-50 text-sky-700 border border-sky-200"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
