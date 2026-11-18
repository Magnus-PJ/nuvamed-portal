"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";
import { ElisaTarget, TOP_ELISA_TARGETS } from "@/lib/elisaData";

export default function ElisaProductClient({ target }: { target: ElisaTarget }) {
  const { addItem, setDrawerOpen } = useCart();
  const [packSize, setPackSize] = useState("96 Tests (1 Plate)");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      sku: target.catNo,
      catNo: target.catNo,
      name: target.name,
      packSize: packSize,
      shipping: "Cold-Chain (2–8°C Ice Packs)",
      quantity: quantity,
    });
    setAdded(true);
    setDrawerOpen(true);
  };

  const whatsappInquiryUrl = `https://wa.me/919061381010?text=${encodeURIComponent(
    `Hello Nuvamed Diagnostics, I would like to inquire about ${target.name} (Cat #${target.catNo}, Pack: ${packSize}). Please share availability, HSN 3822 00 90, and official 4-hour INR proforma invoice.`
  )}`;

  const relatedTargets = TOP_ELISA_TARGETS.filter((t) => t.slug !== target.slug).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/elisa-finder" className="hover:text-primary">ELISA Library</Link>
        <span>/</span>
        <span className="font-bold text-primary">{target.name}</span>
      </nav>

      {/* Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
        {/* Left 5 Cols: Visual / Technical Badge Card */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <span className="font-mono text-[11px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
              Cat #{target.catNo}
            </span>
            <span className="font-mono text-[11px] font-bold bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded">
              RUO &bull; Research Use Only
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center">
            {/* 96-well Microplate SVG Schematic */}
            <svg width="180" height="120" viewBox="0 0 200 140" fill="none" className="my-2" aria-label="Pre-coated 96-well ELISA microplate">
              <rect x="10" y="10" width="180" height="120" rx="6" fill="#f8fafc" stroke="#0b1d33" strokeWidth="2.5" />
              {/* Microplate Wells 8x12 grid representation */}
              {[...Array(6)].map((_, r) => (
                <React.Fragment key={r}>
                  {[...Array(8)].map((_, c) => (
                    <circle
                      key={`${r}-${c}`}
                      cx={30 + c * 20}
                      cy={25 + r * 17}
                      r="5.5"
                      fill={(r + c) % 3 === 0 ? "#008080" : "#e2e8f0"}
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                  ))}
                </React.Fragment>
              ))}
            </svg>
            <div className="text-[11px] font-mono text-slate-500 mt-2">
              Pre-coated 12 x 8 Break-Apart Strip Wells &bull; 96 Determinations
            </div>
          </div>

          {/* Core Specs Highlights */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
              <span className="font-mono text-[10px] text-slate-400 font-bold block uppercase">Analytical Sensitivity</span>
              <span className="font-bold text-primary mt-0.5 block">{target.sensitivity}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
              <span className="font-mono text-[10px] text-slate-400 font-bold block uppercase">Detection Range</span>
              <span className="font-bold text-primary mt-0.5 block">{target.detectionRange}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
              <span className="font-mono text-[10px] text-slate-400 font-bold block uppercase">Species Specificity</span>
              <span className="font-bold text-primary mt-0.5 block">{target.species}</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
              <span className="font-mono text-[10px] text-slate-400 font-bold block uppercase">Assay Incubation</span>
              <span className="font-bold text-primary mt-0.5 block">{target.duration}</span>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Information & Procurement Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                Validated Target
              </span>
              <span className="font-mono text-xs text-slate-500">
                HSN Code: 3822 00 90 &bull; DSIR 5% Concessional GST
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d33] leading-tight">
              {target.name}
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {target.description}
            </p>
          </div>

          {/* Pricing & Proforma Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div>
                <span className="text-xs text-slate-500 font-medium block">Commercial Pricing</span>
                <span className="text-lg font-black text-[#0b1d33]">Price on Request</span>
                <span className="text-xs text-emerald-800 font-bold block">4-Business-Hour INR Proforma SLA</span>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-slate-500 block">Stock & Dispatch Hub</span>
                <span className="text-xs font-bold text-slate-800">Kochi, Kerala (Express Air Logistics)</span>
              </div>
            </div>

            {/* Pack Size Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1.5">
                Pack Size Configuration:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPackSize("96 Tests (1 Plate)")}
                  className={`p-3 text-left border rounded-lg transition-all ${
                    packSize === "96 Tests (1 Plate)"
                      ? "border-accent bg-white shadow-sm ring-2 ring-accent/20"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-xs text-primary">96 Tests (1 Plate)</div>
                  <div className="text-[11px] text-slate-500">Standard single project volume</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPackSize("5 x 96 Tests (5 Plates Bulk)")}
                  className={`p-3 text-left border rounded-lg transition-all ${
                    packSize === "5 x 96 Tests (5 Plates Bulk)"
                      ? "border-accent bg-white shadow-sm ring-2 ring-accent/20"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold text-xs text-primary">5 x 96 Tests (Bulk)</div>
                  <div className="text-[11px] text-slate-500">Core facility & cohort screening</div>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {/* Quantity */}
              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-10 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center font-mono font-bold text-xs">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-10 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-extrabold py-2.5 px-4 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Add to Quote Cart</span>
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2.5 px-3 rounded-lg shadow transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>💬 WhatsApp Desk (+91 9061381010)</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              🔒 Order booking confirmed upon <strong>Advance Payment only</strong> (or official Institutional PO wherever necessary). Includes lot-specific Certificate of Analysis and SDS.
            </p>
          </div>

          {/* Biological Significance */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
            <h2 className="font-extrabold text-sm text-[#0b1d33]">
              Biological Significance & Target Background
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {target.significance}
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <section className="mb-12">
        <h2 className="text-lg font-extrabold text-[#0b1d33] mb-4">
          Immunoassay Analytical Parameters & Kit Components
        </h2>
        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-700 w-1/3">Target Biomarker</td>
                  <td className="p-3.5 font-mono text-primary font-bold">{target.target}</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-700">Validated Sample Matrices</td>
                  <td className="p-3.5 text-slate-600">{target.sampleType}</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-700">Assay Chemistry & Format</td>
                  <td className="p-3.5 text-slate-600">{target.assayType}</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-700">Lower Limit of Detection (LLOD)</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-800">{target.sensitivity}</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-700">Standard Calibration Curve Range</td>
                  <td className="p-3.5 font-mono text-slate-800">{target.detectionRange}</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-700">Storage & Shipping Temperature</td>
                  <td className="p-3.5 text-slate-600">2–8°C Cold-Chain Storage &bull; Shipped with Insulated Ice Packs</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-700">Statutory Tax & Procurement Classification</td>
                  <td className="p-3.5 font-mono text-slate-700">HSN Code: 3822 00 90 &bull; DSIR 5% Concessional GST Eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related ELISA Targets for Internal Link Equity */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-extrabold text-[#0b1d33]">
            Related Biomarker & Cytokine ELISA Kits
          </h2>
          <Link href="/elisa-finder" className="text-xs font-bold text-accent hover:underline">
            View All 13,137 Targets &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {relatedTargets.map((rt) => (
            <Link
              key={rt.slug}
              href={`/elisa/${rt.slug}`}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-accent hover:shadow-md transition-all group block"
            >
              <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold">
                {rt.species} &bull; Cat #{rt.catNo}
              </span>
              <h3 className="font-bold text-xs text-primary group-hover:text-accent mt-2 line-clamp-1">
                {rt.name}
              </h3>
              <div className="text-[11px] text-slate-500 mt-1">
                LOD: <span className="font-mono font-bold text-slate-700">{rt.sensitivity}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
