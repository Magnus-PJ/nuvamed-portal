"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

interface ElisaItem {
  name: string;
  species: string;
  format: "standard" | "onestep";
  cat: string;
  pack: string;
}

const elisaData: ElisaItem[] = [
  { name: "Human Interleukin-6 (IL-6) ELISA Kit", species: "human", format: "standard", cat: "L-EL-H001", pack: "96 tests" },
  { name: "Human Interleukin-6 (IL-6) One-Step ELISA Kit", species: "human", format: "onestep", cat: "L-EL-H001-OS", pack: "96 tests" },
  { name: "Human Tumor Necrosis Factor-alpha (TNF-alpha) ELISA Kit", species: "human", format: "standard", cat: "L-EL-H002", pack: "96 tests" },
  { name: "Human Vascular Endothelial Growth Factor (VEGF) ELISA Kit", species: "human", format: "standard", cat: "L-EL-H003", pack: "96 tests" },
  { name: "Human Brain-Derived Neurotrophic Factor (BDNF) ELISA Kit", species: "human", format: "standard", cat: "L-EL-H004", pack: "96 tests" },
  { name: "Human Insulin ELISA Kit", species: "human", format: "onestep", cat: "L-EL-H005-OS", pack: "96 tests" },
  { name: "Mouse Tumor Necrosis Factor-alpha (TNF-alpha) ELISA Kit", species: "mouse", format: "standard", cat: "L-EL-M001", pack: "96 tests" },
  { name: "Mouse Interleukin-10 (IL-10) ELISA Kit", species: "mouse", format: "onestep", cat: "L-EL-M002-OS", pack: "96 tests" },
  { name: "Mouse Interferon-gamma (IFN-gamma) ELISA Kit", species: "mouse", format: "standard", cat: "L-EL-M003", pack: "96 tests" },
  { name: "Rat Insulin-like Growth Factor 1 (IGF-1) ELISA Kit", species: "rat", format: "standard", cat: "L-EL-R001", pack: "96 tests" },
  { name: "Rat C-Reactive Protein (CRP) ELISA Kit", species: "rat", format: "onestep", cat: "L-EL-R002-OS", pack: "96 tests" },
  { name: "Bovine Interleukin-4 (IL-4) ELISA Kit", species: "bovine", format: "standard", cat: "L-EL-B001", pack: "96 tests" },
  { name: "Porcine Transforming Growth Factor-beta 1 (TGF-beta 1) ELISA Kit", species: "porcine", format: "standard", cat: "L-EL-P001", pack: "96 tests" },
  { name: "Canine Troponin I (cTn-I) ELISA Kit", species: "canine", format: "onestep", cat: "L-EL-C001-OS", pack: "96 tests" },
  { name: "Cortisol Competitive ELISA Kit (General Small Molecule)", species: "general", format: "standard", cat: "L-EL-G001", pack: "96 tests" }
];

export default function ElisaFinderPage() {
  const { addItem } = useCart();
  const [keyword, setKeyword] = useState("");
  const [species, setSpecies] = useState("all");
  const [format, setFormat] = useState("all");

  const filtered = elisaData.filter((item) => {
    const matchesKw =
      !keyword ||
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.cat.toLowerCase().includes(keyword.toLowerCase());
    const matchesSpecies = species === "all" || item.species === species;
    const matchesFormat = format === "all" || item.format === format;
    return matchesKw && matchesSpecies && matchesFormat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="font-bold text-primary">13,137 ELISA Kits Finder</span>
      </nav>

      {/* Hero */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          Programmatic SEO & Long-Tail Catalog Architecture
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          13,137 Validated ELISA Kits Across 15 Species
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Instant search for human, rodent, livestock, and veterinary biomarkers. All kits supplied in 96-test pre-coated strip plate formats with standard or accelerated one-step assay protocols. Price on request with 4-hour quote generation.
        </p>
      </div>

      {/* Search Toolbar */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-bold text-primary block mb-1">Search Target Biomarker / Protein</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Type: IL-6, TNF-alpha, VEGF, Insulin, Troponin..."
            className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-primary block mb-1">Filter by Species</label>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none bg-white"
          >
            <option value="all">All Species (13,137 Kits)</option>
            <option value="human">Human (6,397 Kits)</option>
            <option value="mouse">Mouse (2,894 Kits)</option>
            <option value="rat">Rat (2,268 Kits)</option>
            <option value="bovine">Bovine / Cattle (382 Kits)</option>
            <option value="porcine">Porcine / Pig (334 Kits)</option>
            <option value="canine">Canine / Dog (190 Kits)</option>
            <option value="rabbit">Rabbit (164 Kits)</option>
            <option value="general">Small Molecules & Hormones (160 Kits)</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-primary block mb-1">Assay Format</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            className="w-full text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none bg-white"
          >
            <option value="all">All Formats (96 Tests)</option>
            <option value="standard">Standard Sandwich (6,573)</option>
            <option value="onestep">One-Step Rapid (6,564)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm mb-10">
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-xs">
          <span className="font-bold text-primary">
            Showing {filtered.length} representative targets matching criteria
          </span>
          <span className="text-slate-500 font-mono text-[11px]">SLA: 4-Hour Proforma Generation</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
            <tr>
              <th className="p-3">Product Name / Target</th>
              <th className="p-3">Species</th>
              <th className="p-3">Format</th>
              <th className="p-3">Catalog No.</th>
              <th className="p-3">Pack</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-right">Quote Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-slate-500">
                  No matching ELISA kits found in preview set. Over 13,000+ items are indexed in our master price list.{" "}
                  <Link href="/quote-cart" className="text-accent font-bold">
                    Submit a custom target inquiry
                  </Link>
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.cat} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3">
                    <div className="font-bold text-primary">{item.name}</div>
                    <div className="text-[11px] text-slate-500">96-well pre-coated strip plate · RUO</div>
                  </td>
                  <td className="p-3 capitalize text-slate-700 font-semibold">{item.species}</td>
                  <td className="p-3">
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        item.format === "onestep"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {item.format === "onestep" ? "One-Step Rapid" : "Standard"}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-slate-700">{item.cat}</td>
                  <td className="p-3 text-slate-600">{item.pack}</td>
                  <td className="p-3 text-emerald-800 font-bold">Price on request</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() =>
                        addItem({
                          sku: item.cat,
                          catNo: item.cat,
                          name: item.name,
                          packSize: item.pack,
                          shipping: "Cold-Chain",
                          quantity: 1,
                        })
                      }
                      className="bg-accent hover:bg-accent-hover text-white font-bold py-1 px-3 rounded transition-colors"
                    >
                      + Add to Quote
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Programmatic SEO Blueprint Explainer */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="font-extrabold text-sm text-primary mb-2">
          Programmatic SEO Architecture: How 13,137 Targets Rank on Google India
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Indian researchers specifically search: <code>[species] [target] ELISA kit price India</code> (e.g., <em>"human IL-6 ELISA kit price"</em>, <em>"rat IGF-1 ELISA kit"</em>). Next.js Incremental Static Regeneration (ISR) pre-generates lightweight indexable landing pages with Schema.org Product markup, achieving high SERP presence at near-zero hosting overhead on Vercel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-white border border-slate-200 rounded p-3">
            <strong className="text-primary block mb-1">Dynamic Title Pattern</strong>
            <code className="text-accent text-[11px] block">
              [Species] [Target] ELISA Kit (96 Tests) | Price on Request India
            </code>
          </div>
          <div className="bg-white border border-slate-200 rounded p-3">
            <strong className="text-primary block mb-1">Schema.org Product Graph</strong>
            <code className="text-accent text-[11px] block">
              JSON-LD structured data with PriceOnRequest &amp; InStock
            </code>
          </div>
          <div className="bg-white border border-slate-200 rounded p-3">
            <strong className="text-primary block mb-1">Conversion Funnel</strong>
            <code className="text-accent text-[11px] block">
              Direct CTA funneling into the 4-hour proforma quote generator
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
