import React from "react";
import Link from "next/link";

export default function NotFound() {
  const categories = [
    { href: "/categories/liquid-biopsy", label: "Liquid Biopsy & cfDNA" },
    { href: "/categories/exosomes", label: "Exosome & EV Research" },
    { href: "/categories/cell-culture-qc", label: "Cell Culture QC & Mycoplasma" },
    { href: "/categories/culture-media", label: "Culture Media & Stem Cell" },
    { href: "/categories/cell-therapy", label: "Cell Therapy Tools" },
    { href: "/categories/dna-rna-extraction", label: "DNA/RNA Extraction" },
    { href: "/elisa-finder", label: "13,137 ELISA Kits Finder" },
    { href: "/categories/lab-essentials", label: "Lab Essentials & Buffers" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="inline-block font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
        Catalog Routing · 404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b1d33] mb-3">
        Reagent Line or Page Not Found
      </h1>
      <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
        The catalog item or URL you requested may have moved or been updated. You can search our master catalog below or explore our core clinical research categories:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-8 text-left">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="p-3 bg-white border border-slate-200 hover:border-accent rounded-lg shadow-sm font-semibold text-slate-800 hover:text-accent transition-all hover:-translate-y-0.5"
          >
            {cat.label} &rarr;
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm"
        >
          Return to Portal Home
        </Link>
        <Link
          href="/quote-cart"
          className="bg-accent hover:bg-accent-hover text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm"
        >
          Submit Custom Target Inquiry
        </Link>
      </div>
    </div>
  );
}
