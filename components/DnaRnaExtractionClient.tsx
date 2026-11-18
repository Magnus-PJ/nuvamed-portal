"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function DnaRnaExtractionClient() {
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
        <span className="font-bold text-primary">DNA & RNA Extraction Reagents</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Support & Catalogue Tier
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Genomic, Viral & Plasmid Nucleic Acid Extraction
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Magnetic-bead and silica spin column technologies for viral RNA/DNA isolation, endotoxin-free transfection-grade plasmid preparation (up to 2 mg yield), total RNA/miRNA extraction, and bulk silica magnetic beads for OEM kit formulation.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>📦 Shipping: Ambient Room Temperature (15–25°C)</span>
          <span>&bull;</span>
          <span>Endotoxin Levels: &lt; 0.1 EU/µg Plasmid DNA</span>
          <span>&bull;</span>
          <span>HSN: 3822 00 90</span>
        </div>
      </div>

      {/* 1. Viral Nucleic Acid & Genomic Kits */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          1. Viral & Genomic DNA/RNA Extraction Kits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            {
              catNo: "L2056",
              sku: "MG-EX-2056",
              name: "MagDNA Viral DNA Purification Kit",
              desc: "Magnetic bead isolation of viral genomic DNA from serum, plasma, swabs, and viral culture supernatants.",
              pack: "10 / 50 / 200 / 400 isolations",
              ship: "Ambient",
            },
            {
              catNo: "L1051",
              sku: "MG-EX-1051",
              name: "MagRNA Viral RNA Extraction Kit",
              desc: "High recovery of viral RNA (SARS-CoV-2, Influenza, Dengue, RSV) formulated for automated 96-well KingFisher protocols.",
              pack: "50 reactions",
              ship: "Ambient",
            },
            {
              catNo: "L2051-4",
              sku: "MG-EX-2051",
              name: "MagDNA Genomic DNA Kit (Multi-Specimen)",
              desc: "Optimized lysis buffers for whole blood, cultured mammalian cells, animal tissue, bacterial pellets, yeast, and plant leaves.",
              pack: "50 / 200 preps",
              ship: "Ambient",
            },
            {
              catNo: "L1052-4",
              sku: "MG-EX-1052",
              name: "MagRNA Total RNA & miRNA Isolation Kit",
              desc: "Co-purifies total RNA including small non-coding microRNAs (<200 nt) without organic phase phenol/chloroform separation.",
              pack: "50 reactions",
              ship: "Ambient",
            },
          ].map((item) => (
            <div key={item.sku} className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[11px] font-bold text-slate-500">Cat #{item.catNo}</span>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">{item.ship}</span>
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-1">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>{item.pack}</strong></div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="font-bold text-emerald-800">Price on request</span>
                <button
                  onClick={() => handleAdd(item.sku, item.catNo, item.name, item.pack, item.ship)}
                  className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
                >
                  + Add to Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Transfection-Grade Plasmid Kits */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          2. Transfection-Grade & Endotoxin-Free Plasmid Purification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            {
              catNo: "L2004",
              sku: "MG-PL-2004",
              name: "Transfection-Grade Plasmid Midiprep Kit (1 mg Yield)",
              desc: "Gravity-flow / vacuum columns yielding up to 1 mg high-copy plasmid DNA with < 0.1 EU/µg endotoxin for primary cell transfection.",
              pack: "10 / 25 / 50 preps",
              ship: "Ambient",
            },
            {
              catNo: "L2005",
              sku: "MG-PL-2005",
              name: "Transfection-Grade Plasmid Maxiprep Kit (2 mg Yield)",
              desc: "High-capacity silica matrix delivering up to 2 mg ultra-pure supercoiled plasmid for lentivirus packaging and in vivo research.",
              pack: "10 / 25 preps",
              ship: "Ambient",
            },
            {
              catNo: "L2006",
              sku: "MG-PL-2006",
              name: "Quick 96-Well Plasmid Transfection Kit",
              desc: "High-throughput 96-well vacuum/centrifuge plate format isolating 10–25 µg plasmid per well for automated clone screening.",
              pack: "1x / 4x 96-well plates",
              ship: "Ambient",
            },
          ].map((item) => (
            <div key={item.sku} className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[11px] font-bold text-slate-500">Cat #{item.catNo}</span>
                  <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">{item.ship}</span>
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-1">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>{item.pack}</strong></div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="font-bold text-emerald-800">Price on request</span>
                <button
                  onClick={() => handleAdd(item.sku, item.catNo, item.name, item.pack, item.ship)}
                  className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
                >
                  + Add to Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bulk Beads & Component Reagents */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          3. Bulk Superparamagnetic Beads & Lysis Buffers (OEM)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[11px] font-bold text-slate-500">Cat # LA-1003</span>
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">Ambient</span>
              </div>
              <h3 className="font-extrabold text-sm text-primary mb-1">Silica Superparamagnetic Beads (Bulk)</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Uniform 1 µm superparamagnetic iron-oxide beads with high-density silica shell. High binding capacity (&gt;40 µg DNA/mg beads) for custom diagnostic kitting.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Volumes: <strong>5 mL / 50 mL / 500 mL</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-BULK-1003", "LA-1003", "Bulk Silica Magnetic Beads", "50 mL", "Ambient")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[11px] font-bold text-slate-500">Cat # LA-1001/2</span>
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">Ambient</span>
              </div>
              <h3 className="font-extrabold text-sm text-primary mb-1">Mini Silica Spin Columns (100 µg & 200 µg)</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Precision microporous silica membrane spin columns with matched 2.0 mL collection tubes. Compatible with standard laboratory benchtop microcentrifuges.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>50 / 250 / 500 units</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-BULK-1001", "LA-1001", "Mini Silica Spin Columns", "250 units", "Ambient")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[11px] font-bold text-slate-500">Cat # LA-1006-11</span>
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">Ambient</span>
              </div>
              <h3 className="font-extrabold text-sm text-primary mb-1">Plasmid Lysis & Wash Buffers (Bulk Liter Bottles)</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Bulk bottles of Buffer P1 (Resuspension with RNase A), Buffer P2 (Lysis), Buffer P3 (Neutralization), and Endo-Free Wash Buffers for high-volume lab preps.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Volumes: <strong>250 mL / 1,000 mL</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-BULK-1006", "LA-1006", "Bulk Plasmid Lysis Buffers P1/P2/P3", "1,000 mL", "Ambient")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
