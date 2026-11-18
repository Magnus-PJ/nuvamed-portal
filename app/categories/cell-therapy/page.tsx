"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CellTherapyPage() {
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
        <span className="font-bold text-primary">Cell Therapy & Stem Cell Tools</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Support Tier · Regenerative Medicine & Bioprocessing
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Cell Therapy & Stem Cell Research Tools
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Complete toolsets for mesenchymal stem cell (MSC) derivation, non-animal recombinant cell dissociation, functional tri-lineage differentiation verification (osteogenesis, adipogenesis, chondrogenesis), and certified tissue culture plastics.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>Recombinant Non-Mammalian Enzymes</span>
          <span>&bull;</span>
          <span>TC-Treated Vacuum Plasma Plastics</span>
          <span>&bull;</span>
          <span>HSN: 3822 00 90 / 3926 90 99</span>
        </div>
      </div>

      {/* Differentiation & Enzymes */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          1. Differentiation Media & Recombinant Enzymes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            {
              catNo: "LTL0002",
              sku: "MG-CT-0002",
              name: "MSC Osteogenic Differentiation Kit",
              desc: "Formulated to induce lineage-specific alkaline phosphatase and calcium mineralization in primary MSCs within 21 days.",
              pack: "100 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LTL0003",
              sku: "MG-CT-0003",
              name: "MSC Adipogenic Differentiation Kit",
              desc: "Optimized induction and maintenance cocktail stimulating intracellular lipid droplet accumulation (Oil Red O positive).",
              pack: "100 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC1004",
              sku: "MG-CT-1004",
              name: "Gentle Recombinant Digestive Enzyme for Stem Cells",
              desc: "Non-animal, recombinant cell dissociation enzyme replacing porcine trypsin. Preserves delicate cell surface antigens and viability.",
              pack: "100 mL / 500 mL",
              ship: "Cold-Chain (-20°C)",
            },
          ].map((item) => (
            <div key={item.sku} className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-[11px] font-bold text-slate-500">Cat #{item.catNo}</span>
                  <span className="font-mono text-[10px] text-cold bg-cold-light px-1.5 py-0.5 rounded font-bold">{item.ship}</span>
                </div>
                <h3 className="font-extrabold text-sm text-primary mb-1">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">
                  Pack: <strong>{item.pack}</strong>
                </div>
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

      {/* Culture Plastics */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-primary mb-4 border-b border-slate-200 pb-2">
          2. Tissue Culture Plastics & Cryogenic Storage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {[
            {
              catNo: "LCCP",
              sku: "MG-PL-CCP",
              name: "TC-Treated Cell Culture Plates",
              desc: "Vacuum plasma surface treated 6, 12, 24, 48, and 96-well flat bottom plates. RNase/DNase and pyrogen free.",
              pack: "Case packs (Individual sterile wrap)",
              ship: "Ambient",
            },
            {
              catNo: "LCCD",
              sku: "MG-PL-CCD",
              name: "Cell Culture Dishes (100 & 150 mm)",
              desc: "Optically clear polystyrene dishes with easy-grip rings and ventilation ribs for consistent gas exchange.",
              pack: "Case packs",
              ship: "Ambient",
            },
            {
              catNo: "LCCF",
              sku: "MG-PL-CCF",
              name: "Cell Culture Flasks, Vented (T25–T225)",
              desc: "0.22 µm hydrophobic filter caps preventing contamination while facilitating continuous aerobic incubation.",
              pack: "Case packs",
              ship: "Ambient",
            },
            {
              catNo: "LCV-3-50",
              sku: "MG-PL-CV",
              name: "2.0 mL Cryogenic Storage Vials",
              desc: "Internal/external thread vials with silicone O-ring seal rated for liquid nitrogen vapor phase storage (-196°C).",
              pack: "50 / 1,000 vials",
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
                <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">
                  Pack: <strong>{item.pack}</strong>
                </div>
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
    </div>
  );
}
