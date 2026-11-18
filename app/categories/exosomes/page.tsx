"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function ExosomesCategoryPage() {
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
      <nav className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="font-bold text-primary">Exosome & EV Tools</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Tier 1 Lead Focus
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Exosome & Extracellular Vesicle (EV) Research Range
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-6">
          Isolate intact, high-purity exosomes (30–150 nm) from serum, plasma, urine, and cell culture supernatants in under 2 hours. Overcome ultracentrifugation bottlenecks with validated precipitation, direct exosomal RNA RT-PCR, and MISEV-standard tetraspanin antibodies.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#isolation-kits"
            className="bg-accent hover:bg-accent-hover text-white text-xs font-bold px-4 py-2.5 rounded shadow transition-colors"
          >
            Explore Isolation Kits
          </a>
          <a
            href="#bundles"
            className="bg-white/10 hover:bg-white/15 text-white text-xs font-bold px-4 py-2.5 rounded border border-white/20 transition-colors"
          >
            View Workflow Bundles
          </a>
        </div>
      </div>

      {/* Bench Benchmark */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mb-8">
        <h3 className="font-extrabold text-sm text-primary mb-3">
          Bench Benchmark: Luminous Reagent Precipitation vs. Ultracentrifugation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="border-l-2 border-accent pl-3">
            <strong className="text-primary block mb-0.5">No Specialized Equipment</strong>
            <p className="text-slate-600">
              Operates using standard tabletop microcentrifuges (10,000 &times; g). No need for booked central facility ultracentrifuge time.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-3">
            <strong className="text-primary block mb-0.5">Preserved Vesicle Morphology</strong>
            <p className="text-slate-600">
              Gentle precipitation avoids shear-stress damage and vesicle rupture typically caused by high g-force ultracentrifugation pellets.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-3">
            <strong className="text-primary block mb-0.5">MISEV 2023 Compliance</strong>
            <p className="text-slate-600">
              Pairs directly with our monoclonal and polyclonal antibodies for CD9, CD63, CD81, and TSG101 to fulfill publication standards.
            </p>
          </div>
        </div>
      </div>

      {/* Bundles */}
      <div className="bg-teal-50 border border-accent rounded-lg p-6 mb-10" id="bundles">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <div>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block">
              1-Click Workflow Solutions
            </span>
            <h2 className="text-lg font-extrabold text-primary">
              Exosome Characterization & RNA Profiling Bundles
            </h2>
          </div>
          <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            High Demand in Indian Labs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-teal-200 rounded p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-extrabold text-sm text-primary mb-1">Exosome Characterization Bundle</h4>
              <p className="text-xs text-slate-600 mb-3">
                Includes 1 Isolation Kit (by sample choice) + Anti-CD63 + Anti-CD9 + Anti-TSG101 antibodies for complete Western blot / ELISA confirmation.
              </p>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() =>
                  handleAdd(
                    "BUNDLE-EXO-CHAR",
                    "BUNDLE-EXO-CHAR",
                    "Exosome Characterisation Bundle (Kit + CD63 + CD9 + TSG101)",
                    "1 Kit + 3 Antibodies",
                    "Cold-Chain"
                  )
                }
                className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add Bundle to Quote
              </button>
            </div>
          </div>

          <div className="bg-white border border-teal-200 rounded p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-extrabold text-sm text-primary mb-1">Exosomal RNA Biomarker Bundle</h4>
              <p className="text-xs text-slate-600 mb-3">
                Includes 1 Isolation Kit + Exosome Direct RT-PCR Kit (Cat #E1012). Lyse isolated EVs directly without phenol/chloroform or spin columns.
              </p>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-emerald-800">Price on request</span>
              <button
                onClick={() =>
                  handleAdd(
                    "BUNDLE-EXO-RNA",
                    "BUNDLE-EXO-RNA",
                    "Exosomal RNA Bundle (Isolation Kit + Direct RT-PCR Kit)",
                    "1 Kit + 50 rxns RT-PCR",
                    "Cold-Chain"
                  )
                }
                className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-1.5 px-3 rounded transition-colors"
              >
                + Add Bundle to Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div id="isolation-kits" className="mb-12">
        <h3 className="font-extrabold text-lg text-primary mb-4">Sample-Specific Isolation Kits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              sku: "MG-EXO-103",
              catNo: "E103",
              name: "Exosome Isolation Kit, Serum",
              desc: "Optimized precipitation reagent for human and animal serum. High vesicle recovery with minimal protein co-precipitation.",
              pack: "10 mL",
              packs: "5 mL / 10 mL / 50 mL",
              ship: "Blue Ice (4°C)",
            },
            {
              sku: "MG-EXO-105P",
              catNo: "E105",
              name: "Exosome Isolation Kit, Plasma",
              desc: "Engineered to isolate pure EVs from EDTA/citrate/heparin anticoagulated plasma without fibrinogen trapping.",
              pack: "10 mL",
              packs: "5 mL / 10 mL / 20 mL",
              ship: "Blue Ice (4°C)",
            },
            {
              sku: "MG-EXO-105U",
              catNo: "E105",
              name: "Exosome Isolation Kit, Urine",
              desc: "High volume concentration for renal and bladder cancer biomarker studies. Overcomes Tamm-Horsfall protein interference.",
              pack: "50 mL",
              packs: "20 mL / 50 mL / 200 mL",
              ship: "Blue Ice (4°C)",
            },
            {
              sku: "MG-EXO-101",
              catNo: "E101",
              name: "Exosome Isolation, Cell Culture Media",
              desc: "Scalable recovery from large volume cell culture supernatant (stem cells, cancer lines, immune cells).",
              pack: "50 mL",
              packs: "20 mL / 50 mL / 200 mL",
              ship: "Blue Ice (4°C)",
            },
            {
              sku: "MG-EXO-104",
              catNo: "E104",
              name: "Exosome Isolation, Body Fluids",
              desc: "Specialized formulation for challenging clinical matrices: saliva, cerebrospinal fluid (CSF), breast milk, and ascites.",
              pack: "10 mL",
              packs: "5 mL / 10 mL / 25 mL",
              ship: "Blue Ice (4°C)",
            },
            {
              sku: "MG-EXO-1012",
              catNo: "E1012",
              name: "Exosome Direct RT-PCR Kit",
              desc: "Directly lyse intact exosomes and perform reverse transcription qPCR without separate RNA extraction columns.",
              pack: "50 reactions",
              packs: "50 reactions",
              ship: "-20°C Dry Ice",
            },
          ].map((item) => (
            <div key={item.sku} className="bg-white border border-slate-200 rounded p-4 flex flex-col justify-between text-xs shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[11px] font-bold text-slate-500">
                    Cat #{item.catNo} ({item.sku})
                  </span>
                  <span className="font-mono text-[10px] text-cold bg-cold-light px-1.5 py-0.5 rounded font-bold">
                    {item.ship}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm text-primary mb-1">{item.name}</h4>
                <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-slate-50 p-2 rounded text-slate-600 mb-3">
                  <strong>Packs:</strong> {item.packs}
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                <span className="font-bold text-emerald-800">Price on request</span>
                <button
                  onClick={() => handleAdd(item.sku, item.catNo, item.name, item.pack, "Cold-Chain")}
                  className="bg-primary hover:bg-primary-light text-white font-bold py-1.5 px-3 rounded transition-colors"
                >
                  + Add to Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MISEV Marker Antibodies */}
      <div id="antibodies" className="mb-12">
        <h3 className="font-extrabold text-lg text-primary mb-1">
          MISEV 2023 Validated Exosome Biomarker Antibodies
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Essential positive and negative control antibodies for EV characterization via Western blot, flow cytometry, and immuno-EM.
        </p>
        <div className="border border-slate-200 rounded overflow-hidden bg-white shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
              <tr>
                <th className="p-3">Target / Antibody</th>
                <th className="p-3">Clonality / Host</th>
                <th className="p-3">Cat. No.</th>
                <th className="p-3">Packs</th>
                <th className="p-3">Storage</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: "Anti-CD9 Antibody", host: "Mouse mAb", cat: "LE1024 / LE1025", packs: "25 / 50 / 100 µL", sku: "AB-CD9" },
                { name: "Anti-CD63 Antibody", host: "Rabbit pAb", cat: "LGB11620", packs: "25 / 100 µL", sku: "AB-CD63" },
                { name: "Anti-CD81 Antibody", host: "Rabbit pAb", cat: "LGB111073", packs: "25 / 100 µL", sku: "AB-CD81" },
                { name: "Anti-TSG101 Antibody", host: "Rabbit pAb", cat: "LGB11619", packs: "25 / 100 µL", sku: "AB-TSG101" },
                { name: "Anti-ALIX Antibody", host: "Rabbit pAb", cat: "LGB14080", packs: "25 / 100 µL", sku: "AB-ALIX" },
                { name: "Anti-GAPDH mAb (Control)", host: "Mouse mAb", cat: "LGB12002", packs: "25 / 100 µL", sku: "AB-GAPDH" },
              ].map((ab) => (
                <tr key={ab.sku}>
                  <td className="p-3 font-bold text-primary">{ab.name}</td>
                  <td className="p-3 text-slate-600">{ab.host}</td>
                  <td className="p-3 font-mono text-slate-700">{ab.cat}</td>
                  <td className="p-3 text-slate-600">{ab.packs}</td>
                  <td className="p-3 font-mono text-cold font-semibold">-20°C</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleAdd(ab.sku, ab.cat, ab.name, "100 µL", "Cold-Chain")}
                      className="bg-accent hover:bg-accent-hover text-white font-bold py-1 px-3 rounded transition-colors text-xs"
                    >
                      + Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
