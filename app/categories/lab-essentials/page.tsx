"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function LabEssentialsPage() {
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
        <span className="font-bold text-primary">Lab Essentials, Sterile Buffers & Plastics</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Catalogue Tier · Bench Essentials
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Sterile Laboratory Buffers, Ladders & Plastics
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Ready-to-use 0.22 µm sterile-filtered molecular biology buffers (PBS, TBS, TAE, TBE, Western transfer), sharp-resolution DNA & prestained protein ladders, manual pipettors, filter barrier tips, and PCR reaction plastics.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>0.22 µm Sterile Filtered Ready Reagents</span>
          <span>&bull;</span>
          <span>DNase / RNase / Pyrogen-Free Certified</span>
          <span>&bull;</span>
          <span>HSN: 3822 00 90 / 3926 90 99</span>
        </div>
      </div>

      {/* 1. Sterile Buffers */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          1. Sterile-Filtered Electrophoresis & Assay Buffers (16 Formulations)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            { catNo: "LPBS", sku: "MG-BUF-PBS", name: "1X Phosphate Buffered Saline (PBS)", desc: "pH 7.4 sterile filtered buffer for cell washing, antibody dilution, and ELISA assays.", pack: "500 mL / 1,000 mL", ship: "Ambient" },
            { catNo: "LDPBS", sku: "MG-BUF-DPBS", name: "DPBS (Low Endotoxin, No Ca/Mg)", desc: "Cell culture grade Dulbecco's PBS formulated without calcium or magnesium to prevent cell clumping.", pack: "500 mL", ship: "Ambient" },
            { catNo: "LTAE", sku: "MG-BUF-TAE", name: "50X TAE Running Buffer", desc: "Concentrated Tris-Acetate-EDTA running buffer for resolving high-molecular-weight DNA fragments on agarose.", pack: "1,000 mL", ship: "Ambient" },
            { catNo: "LTBE10", sku: "MG-BUF-TBE", name: "10X TBE Running Buffer", desc: "Tris-Borate-EDTA buffer optimized for small DNA fragment separation (&lt;1 kb) and polyacrylamide gel electrophoresis.", pack: "1,000 mL", ship: "Ambient" },
            { catNo: "LTGS10", sku: "MG-BUF-TGS", name: "10X Tris-Glycine-SDS Running Buffer", desc: "Denaturing protein gel electrophoresis running buffer for standard SDS-PAGE Western blot systems.", pack: "1,000 mL", ship: "Ambient" },
            { catNo: "LWTB10", sku: "MG-BUF-WTB", name: "10X Western Blot Transfer Buffer", desc: "Formulated for efficient wet or semi-dry electrophoretic transfer of proteins onto PVDF/nitrocellulose membranes.", pack: "1,000 mL", ship: "Ambient" },
            { catNo: "LTBST", sku: "MG-BUF-TBST", name: "1X TBS-Tween 20 (TBST) Wash Buffer", desc: "Sterile filtered physiological Tris-buffered saline with 0.1% Tween 20 for blocking and washing immuno-blots.", pack: "1,000 mL", ship: "Ambient" },
            { catNo: "LTE10", sku: "MG-BUF-TE", name: "10X TE Buffer (pH 8.0)", desc: "Tris-EDTA buffer formulated with 100 mM Tris-HCl and 10 mM EDTA for genomic DNA resuspension and storage.", pack: "500 mL", ship: "Ambient" },
          ].map((item) => (
            <div key={item.sku} className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
              <div>
                <span className="font-mono text-[11px] font-bold text-slate-500 block mb-1">Cat #{item.catNo}</span>
                <h3 className="font-extrabold text-sm text-primary mb-1">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Pack: <strong>{item.pack}</strong></div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="font-bold text-emerald-800">Price on request</span>
                <button
                  onClick={() => handleAdd(item.sku, item.catNo, item.name, item.pack, item.ship)}
                  className="bg-primary hover:bg-primary-light text-white font-bold py-1 px-3 rounded transition-colors text-xs"
                >
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. DNA Ladders & Protein Markers */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          2. DNA Molecular Weight Ladders & Prestained Protein Markers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            {
              catNo: "LG3365",
              sku: "MG-LAD-100BP",
              name: "100 bp DNA Ladder (Ready to Load)",
              desc: "11 sharp fragments ranging from 100 bp to 1,500 bp with 500 bp reference band. Pre-mixed with bromophenol blue loading dye.",
              pack: "50 µg / 100 lanes",
              ship: "Cold-Chain (-20°C)",
            },
            {
              catNo: "LG3369",
              sku: "MG-LAD-1KB",
              name: "1,000 bp (1 kb) DNA Ladder",
              desc: "13 blunt-ended bands from 250 bp to 10,000 bp with bright 1,000 bp and 3,000 bp landmark bands for easy sizing.",
              pack: "50 µg / 100 lanes",
              ship: "Cold-Chain (-20°C)",
            },
            {
              catNo: "LG2058",
              sku: "MG-LAD-PROT2",
              name: "Prestained Protein Marker II (10 to 200 kDa)",
              desc: "10 sharply resolved recombinant proteins (10 to 200 kDa) coupled with blue, orange (70 kDa), and green (25 kDa) fluorophores for Western monitoring.",
              pack: "2 x 250 µL (100 lanes)",
              ship: "Cold-Chain (-20°C)",
            },
          ].map((item) => (
            <div key={item.sku} className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[11px] font-bold text-slate-500">Cat #{item.catNo}</span>
                  <span className="font-mono text-[10px] text-cold bg-cold-light px-1.5 py-0.5 rounded font-bold">-20°C</span>
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-1">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Pack: <strong>{item.pack}</strong></div>
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

      {/* 3. Pipettes, Tips & PCR Plastics */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          3. Pipettes, Barrier Filter Tips & PCR Consumables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-[11px] font-bold text-slate-500 block mb-1">Cat # LSPIP / LSPIP-B</span>
              <h3 className="font-extrabold text-sm text-primary mb-1">Autoclavable Micropipettes (Single & 8-Channel)</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Ergonomic lightweight air-displacement pipettors calibrated to ISO 8655. Fully autoclavable at 121°C. Available in 0.5–10 µL, 20–200 µL, and 100–1000 µL volumes.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Units: <strong>Individual / 4-Pipette Carousel Set</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-PIP-001", "LSPIP", "Autoclavable Micropipette Set", "Set of 4", "Ambient")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-[11px] font-bold text-slate-500 block mb-1">Cat # LTP-F / LT-C-F</span>
              <h3 className="font-extrabold text-sm text-primary mb-1">Aerosol Barrier Filter Tips (Low Retention)</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Hydrophobic polyethylene barrier filter tips preventing cross-contamination in qPCR and RNA workflows. Ultra-clear low-retention resin maximizes sample delivery.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>10 racks / 960 tips per case</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-TIP-FILTER", "LTP-F", "Aerosol Barrier Filter Tips 200 µL", "960 tips", "Ambient")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <span className="font-mono text-[11px] font-bold text-slate-500 block mb-1">Cat # LPCR-96 / LKB-96</span>
              <h3 className="font-extrabold text-sm text-primary mb-1">96-Well PCR Plates & 8-Strip Tubes</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Ultra-thin wall polypropylene 0.1 mL and 0.2 mL 8-strip tubes with optically clear flat caps for real-time qPCR. Non-skirted and semi-skirted 96-well plates.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>125 strips / 50 plates per case</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-PCR-96", "LPCR-96", "96-Well qPCR Plates (Semi-Skirted)", "50 plates", "Ambient")}
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
