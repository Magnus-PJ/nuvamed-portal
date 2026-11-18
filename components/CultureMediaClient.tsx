"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CultureMediaClient() {
  const { addItem } = useCart();

  const handleAdd = (
    sku: string,
    catNo: string,
    name: string,
    packSize: string,
    shipping: string
  ) => {
    addItem({ sku, catNo, name, packSize, shipping, quantity: 1 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="font-bold text-primary">Culture Media & Stem Cell Formulations</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Support Tier · GMP & Research Formulations
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Specialized Cell Culture Media & Reagents
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Serum-free, xeno-free, and GMP-grade media formulations designed for scalable immune cell expansion (NK & CIK cells), mesenchymal stem cell (MSC) derivation, lentiviral packaging in HEK293 lines, and DMSO-free vitrified cryopreservation.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>❄️ Liquid Media: 2–8°C Insulated Express</span>
          <span>&bull;</span>
          <span>📦 Powder / Broths: Ambient Transit</span>
          <span>&bull;</span>
          <span>HSN: 3821 00 00 / 3822 00 90</span>
        </div>
      </div>

      {/* 1. Immune Cell Expansion Media */}
      <section className="mb-12">
        <div className="border-b border-slate-200 pb-2 mb-4">
          <h2 className="text-lg font-extrabold text-primary">1. Immune Cell Expansion Media (NK & CIK Cells)</h2>
          <p className="text-xs text-slate-500">Serum-free culture systems optimized for ex vivo expansion of primary natural killer and cytokine-induced killer cells.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            {
              catNo: "LNC0102",
              sku: "MG-MED-0102",
              name: "Serum-Free NK Cell Culture Kit 5.0 (Standard)",
              desc: "Complete serum-free system for peripheral blood NK cell isolation, priming, and 14-day exponential expansion.",
              pack: "2,000 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0104",
              sku: "MG-MED-0104",
              name: "Serum-Free NK Cell Culture Kit 5.0 (High Performance)",
              desc: "Enhanced cytokine cocktail formulation for high cytotoxic CD56+ CD3- phenotype recovery from cord blood or leukopaks.",
              pack: "2,000 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0108",
              sku: "MG-MED-0108",
              name: "Serum-Free CIK Cell Culture Kit (Peripheral Blood)",
              desc: "Tailored for peripheral blood mononuclear cells (PBMC) derivation into CD3+ CD56+ CIK effector populations.",
              pack: "2,000 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0109",
              sku: "MG-MED-0109",
              name: "Serum-Free CIK Cell Culture Kit (Cord Blood)",
              desc: "Optimized for neonatal umbilical cord blood mononuclear cell priming with reduced alloreactivity profile.",
              pack: "2,000 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0101",
              sku: "MG-MED-0101",
              name: "Serum-Free Medium for Immune Cells (BSA Supplemented)",
              desc: "Defined basal medium supplemented with pharmaceutical-grade bovine serum albumin for general immune culture.",
              pack: "1,000 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0102.H",
              sku: "MG-MED-0102H",
              name: "Serum-Free Medium for Immune Cells (HSA Supplemented)",
              desc: "Xeno-free formulation supplemented with recombinant human serum albumin for translational cellular therapy studies.",
              pack: "1,000 mL",
              ship: "Cold-Chain (2–8°C)",
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
                  Pack Size: <strong>{item.pack}</strong>
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

      {/* 2. Stem Cell (MSC) & Viral Vector Media */}
      <section className="mb-12">
        <div className="border-b border-slate-200 pb-2 mb-4">
          <h2 className="text-lg font-extrabold text-primary">2. Mesenchymal Stem Cell (MSC) & Viral Vector Media</h2>
          <p className="text-xs text-slate-500">GMP-grade and research formulations supporting stem cell expansion and high-titer lentiviral packaging.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            {
              catNo: "LNC0106",
              sku: "MG-MED-0106",
              name: "GMP Grade MSC Serum-Free Medium",
              desc: "Clinical-grade defined formulation for isolation and expansion of human MSCs without batch-to-batch serum variability.",
              pack: "500 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0107",
              sku: "MG-MED-0107",
              name: "Umbilical Cord MSC Serum-Free Medium",
              desc: "Specifically balanced growth factor composition for Wharton's jelly and umbilical cord matrix MSC proliferation.",
              pack: "500 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0103",
              sku: "MG-MED-0103",
              name: "Adipose-Derived MSC Serum-Free Medium",
              desc: "Formulated for high colony-forming unit (CFU-F) recovery from lipoaspirate harvest tissues.",
              pack: "500 mL",
              ship: "Cold-Chain (2–8°C)",
            },
            {
              catNo: "LNC0303",
              sku: "MG-MED-0303",
              name: "HEK293 Medium for Lentivirus Packaging",
              desc: "High-density suspension/adherent HEK293 culture medium engineered for elevated transfection efficiency and viral titer.",
              pack: "1,000 mL",
              ship: "Cold-Chain (2–8°C)",
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
                  Pack Size: <strong>{item.pack}</strong>
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

      {/* 3. Freezing & Microbiology Media */}
      <section className="mb-12">
        <div className="border-b border-slate-200 pb-2 mb-4">
          <h2 className="text-lg font-extrabold text-primary">3. Cryopreservation & Microbiology Growth Media</h2>
          <p className="text-xs text-slate-500">Serum-free freezing solutions and high-yield granulated bacterial growth broths.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[11px] font-bold text-slate-500">Cat # LNC1011</span>
                <span className="font-mono text-[10px] text-cold bg-cold-light px-1.5 py-0.5 rounded font-bold">2–8°C / -20°C</span>
              </div>
              <h3 className="font-extrabold text-sm text-primary mb-1">GMP Grade Vitrified Cell Freezing Medium</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Serum-free, animal protein-free, and <strong>DMSO-free</strong> vitrified cryopreservation solution ensuring &gt;90% post-thaw cell viability without dimethyl sulfoxide cytotoxicity.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Pack: <strong>100 mL</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-MED-1011", "LNC1011", "GMP Vitrified Freezing Medium (DMSO-free)", "100 mL", "Cold-Chain")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[11px] font-bold text-slate-500">Cat # LKL1181EF</span>
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">Ambient (15–25°C)</span>
              </div>
              <h3 className="font-extrabold text-sm text-primary mb-1">Miller's LB Broth, Granulated</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Dust-free granulated Luria-Bertani broth for routine molecular cloning, plasmid amplification, and E. coli cultivation.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>500 g / 1 kg / 5 kg / 10 kg</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-MED-1181", "LKL1181EF", "Miller's LB Broth (Granulated)", "500 g", "Ambient")}
                className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[11px] font-bold text-slate-500">Cat # LGF1203EF</span>
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded font-bold">Ambient (15–25°C)</span>
              </div>
              <h3 className="font-extrabold text-sm text-primary mb-1">Terrific Broth (TB), Powder</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Nutrient-rich, buffered formulation with glycerol for ultra-high plasmid yields and high cell density recombinant protein expression.
              </p>
              <div className="bg-slate-50 p-2 rounded text-slate-700 font-mono mb-3">Packs: <strong>500 g / 1 kg / 5 kg</strong></div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() => handleAdd("MG-MED-1203", "LGF1203EF", "Terrific Broth (TB Powder)", "500 g", "Ambient")}
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
