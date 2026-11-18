"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function LiquidBiopsyCategoryPage() {
  const { addItem } = useCart();

  const handleAdd = (sku: string, catNo: string, name: string, packSize: string, shipping: string) => {
    addItem({ sku, catNo, name, packSize, shipping, quantity: 1 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="font-bold text-primary">Liquid Biopsy & cfDNA Reagents</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Tier 1 Lead Focus · Liquid Biopsy
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Liquid Biopsy, cfDNA Purification & NGS Size Selection
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Superparamagnetic SPRI bead-based purification delivering high-yield recovery of 167 bp mononucleosomal cell-free DNA from human plasma, serum, and urine. Bypasses high-molecular-weight genomic DNA background with ~75% lower cost per prep than imported spin columns.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>📦 Shipping: Ambient Room Temperature (15–25°C)</span>
          <span>&bull;</span>
          <span>Recovery: 167 bp Mononucleosomal Peak</span>
          <span>&bull;</span>
          <span>HSN: 3822 00 90</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-xs">
        {/* Product 1: cfDNA kit */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs font-bold bg-slate-100 text-primary border border-slate-200 px-2 py-0.5 rounded">
                Cat # L2057 · SKU: MG-CFDNA-101
              </span>
              <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">
                Ambient
              </span>
            </div>
            <h3 className="font-extrabold text-base text-primary mb-2">
              MagDNA cf-DNA Purification Kit
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Flagship liquid biopsy extraction kit. Isolates circulating cell-free DNA from 0.5–5.0 mL plasma with zero leukocyte genomic DNA shearing. Ready for NGS and ddPCR.
            </p>
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-700 space-y-1 mb-4">
              <div><strong>Input:</strong> 0.5 mL – 5.0 mL Plasma/Serum</div>
              <div><strong>Elution:</strong> 20–50 µL high concentration</div>
              <div><strong>Packs:</strong> 10 / 50 / 200 / 400 isolations</div>
            </div>
          </div>
          <div className="flex gap-2 pt-3 border-t border-slate-100">
            <Link
              href="/products/cfdna-purification-kit"
              className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-3 rounded flex-1 text-center transition-colors"
            >
              View Full Specs
            </Link>
            <button
              onClick={() => handleAdd("MG-CFDNA-101", "L2057", "MagDNA cf-DNA Purification Kit", "50 isolations", "Ambient")}
              className="border border-accent text-accent hover:bg-accent hover:text-white font-bold py-2 px-3 rounded transition-colors"
            >
              + Quote
            </button>
          </div>
        </div>

        {/* Product 2: NGS Size Selection */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs font-bold bg-slate-100 text-primary border border-slate-200 px-2 py-0.5 rounded">
                Cat # L2059 · SKU: MG-CFDNA-1059
              </span>
              <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">
                Ambient
              </span>
            </div>
            <h3 className="font-extrabold text-base text-primary mb-2">
              MagDNA NGS Size Selection Kit
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Tunable SPRI bead-based size selection system for next-generation sequencing library preparation. Eliminates adaptor dimers and isolates targeted fragment sizes (150–600 bp).
            </p>
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-700 space-y-1 mb-4">
              <div><strong>Equivalent to:</strong> AMPure XP / SPRIselect beads</div>
              <div><strong>Application:</strong> Dual size selection (left & right cutoff)</div>
              <div><strong>Packs:</strong> 10 / 50 / 200 / 400 reactions</div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
            <span className="font-bold text-emerald-800">Price on request</span>
            <button
              onClick={() => handleAdd("MG-CFDNA-1059", "L2059", "MagDNA NGS Size Selection Kit", "50 reactions", "Ambient")}
              className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded transition-colors"
            >
              + Add to Quote
            </button>
          </div>
        </div>

        {/* Product 3: Gel/PCR Clean-up */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs font-bold bg-slate-100 text-primary border border-slate-200 px-2 py-0.5 rounded">
                Cat # L2058 · SKU: MG-CFDNA-1058
              </span>
              <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">
                Ambient
              </span>
            </div>
            <h3 className="font-extrabold text-base text-primary mb-2">
              MagDNA Gel & PCR Clean-up Kit
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Rapid paramagnetic bead cleanup of PCR products, enzymatic reactions, and agarose gel slices. Removes residual primers, dNTPs, enzymes, and salts with &gt;85% DNA recovery.
            </p>
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-700 space-y-1 mb-4">
              <div><strong>Binding Capacity:</strong> Up to 30 µg DNA per reaction</div>
              <div><strong>Fragment Range:</strong> 70 bp to 20 kb</div>
              <div><strong>Packs:</strong> 10 / 50 / 200 / 400 preps</div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
            <span className="font-bold text-emerald-800">Price on request</span>
            <button
              onClick={() => handleAdd("MG-CFDNA-1058", "L2058", "MagDNA Gel & PCR Clean-up Kit", "50 preps", "Ambient")}
              className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded transition-colors"
            >
              + Add to Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
