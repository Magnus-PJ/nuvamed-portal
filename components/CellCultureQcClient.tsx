"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CellCultureQcClient() {
  const { addItem } = useCart();

  const handleAdd = (sku: string, catNo: string, name: string, packSize: string, shipping: string) => {
    addItem({ sku, catNo, name, packSize, shipping, quantity: 1 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="font-bold text-primary">Cell Culture QC & Mycoplasma Detection</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Tier 1 Lead Focus · Bioprocess QC
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Universal Mycoplasma Detection PCR & qPCR Systems
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Rapid real-time TaqMan qPCR and conventional PCR detection kits covering &gt;100 Mycoplasma, Acholeplasma, and Spiroplasma species with analytical sensitivity &lt; 10 CFU/mL. Formulated with internal amplification controls (IAC) to satisfy European Pharmacopoeia (EP 2.6.7) and USP &lt;63&gt; release testing.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>🧊 Monitored -20°C Dry Ice Transit</span>
          <span>&bull;</span>
          <span>Turnaround: Under 2 Hours</span>
          <span>&bull;</span>
          <span>HSN: 3822 00 90</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Kit 1: qPCR */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs font-bold bg-slate-100 text-primary border border-slate-200 px-2 py-0.5 rounded">
                Cat # LG1903-50T · SKU: MG-QC-1903
              </span>
              <span className="font-mono text-[11px] text-red-700 bg-red-50 px-2 py-0.5 rounded font-bold border border-red-200">
                Storage: -20°C
              </span>
            </div>

            <h3 className="font-extrabold text-lg text-primary mb-2">
              Universal Mycoplasma qPCR Detection Kit (TaqMan Probe)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Real-time hydrolysis probe assay providing specific fluorescent detection (FAM channel for target, VIC/HEX channel for internal control). Detects low copy number contamination directly from cell supernatant or harvest pellets in ~1.5 hours without cross-reacting with eukaryotic host DNA.
            </p>

            <div className="bg-slate-50 border-l-2 border-accent p-3 rounded-r text-xs text-slate-700 mb-4 space-y-1">
              <div><strong>Analytical Sensitivity:</strong> &lt; 10 CFU/mL (or 10 copies/reaction)</div>
              <div><strong>Regulatory Standard:</strong> EP 2.6.7, JP, and USP &lt;63&gt; validated</div>
              <div><strong>Reagents Included:</strong> 2X MasterMix, Primer/Probe Mix, Internal Control DNA, Positive Control DNA</div>
            </div>

            <div className="font-mono text-xs text-slate-700 bg-slate-50 p-2 rounded mb-4">
              Pack Size: <strong>50 reactions</strong>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
            <span className="font-bold text-emerald-800 text-xs">Price on request</span>
            <button
              onClick={() => handleAdd("MG-QC-1903", "LG1903-50T", "Universal Mycoplasma qPCR Detection Kit", "50 reactions", "Cold-Chain")}
              className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2 px-4 rounded transition-colors"
            >
              + Add to Quote
            </button>
          </div>
        </div>

        {/* Kit 2: Conventional PCR */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-xs font-bold bg-slate-100 text-primary border border-slate-200 px-2 py-0.5 rounded">
                Cat # LG1900-50T · SKU: MG-QC-1900
              </span>
              <span className="font-mono text-[11px] text-red-700 bg-red-50 px-2 py-0.5 rounded font-bold border border-red-200">
                Storage: -20°C
              </span>
            </div>

            <h3 className="font-extrabold text-lg text-primary mb-2">
              Universal Mycoplasma PCR Detection Kit (Gel-Based)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Endpoint conventional PCR primer cocktail targeting the highly conserved 16S rRNA coding region of the mycoplasma genome. Generates a distinct 434–468 bp diagnostic band on agarose gel electrophoresis, with an internal control band at 257 bp to rule out false-negative Taq polymerase inhibition.
            </p>

            <div className="bg-slate-50 border-l-2 border-accent p-3 rounded-r text-xs text-slate-700 mb-4 space-y-1">
              <div><strong>Diagnostic Band:</strong> ~450 bp target band + 257 bp internal control</div>
              <div><strong>Application:</strong> Routine academic laboratory cell bank surveillance</div>
              <div><strong>Format:</strong> Compatible with all standard thermocyclers</div>
            </div>

            <div className="font-mono text-xs text-slate-700 bg-slate-50 p-2 rounded mb-4">
              Pack Size: <strong>50 reactions</strong>
            </div>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
            <span className="font-bold text-emerald-800 text-xs">Price on request</span>
            <button
              onClick={() => handleAdd("MG-QC-1900", "LG1900-50T", "Universal Mycoplasma PCR Detection Kit", "50 reactions", "Cold-Chain")}
              className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2 px-4 rounded transition-colors"
            >
              + Add to Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
