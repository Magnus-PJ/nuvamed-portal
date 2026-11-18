"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";

const sampleData = {
  plasma: {
    title: "MagDNA cf-DNA Purification Kit",
    catNo: "L2057",
    sku: "MG-CFDNA-101",
    input: "0.5 mL – 5.0 mL Plasma",
    elution: "20–50 µL Concentrated Elution",
    shipping: "Ambient",
    shipText: "📦 Ambient Transit (15–25°C)",
    link: "/products/cfdna-purification-kit",
    pack: "50 isolations",
  },
  serum: {
    title: "Exosome Isolation Kit, Serum",
    catNo: "E103",
    sku: "MG-EXO-103",
    input: "5 mL / 10 mL / 50 mL Serum",
    elution: "Pellet Resuspension in 1X PBS",
    shipping: "Cold-Chain",
    shipText: "❄️ Insulated Blue Ice (4°C)",
    link: "/categories/exosomes",
    pack: "10 mL",
  },
  urine: {
    title: "Exosome Isolation Kit, Urine",
    catNo: "E105",
    sku: "MG-EXO-105U",
    input: "20 mL / 50 mL / 200 mL Clean Urine",
    elution: "Centrifugal Concentration",
    shipping: "Cold-Chain",
    shipText: "❄️ Insulated Blue Ice (4°C)",
    link: "/categories/exosomes",
    pack: "50 mL",
  },
  media: {
    title: "Exosome Isolation Kit, Cell Culture Media",
    catNo: "E101",
    sku: "MG-EXO-101",
    input: "20 mL / 50 mL / 200 mL Supernatant",
    elution: "Pellet Resuspension",
    shipping: "Cold-Chain",
    shipText: "❄️ Insulated Blue Ice (4°C)",
    link: "/categories/exosomes",
    pack: "50 mL",
  },
  qc: {
    title: "Universal Mycoplasma qPCR Detection Kit",
    catNo: "LG1903-50T",
    sku: "MG-QC-1903",
    input: "Cell Pellet or 100 µL Supernatant",
    elution: "TaqMan MasterMix Included",
    shipping: "Cold-Chain",
    shipText: "🧊 Monitored -20°C Dry Ice",
    link: "/categories/cell-culture-qc",
    pack: "50 reactions",
  },
  biofluids: {
    title: "Exosome Isolation Kit, Other Body Fluids",
    catNo: "E104",
    sku: "MG-EXO-104",
    input: "5 mL / 10 mL / 25 mL Saliva, CSF, Milk",
    elution: "Micro-Pellet Resuspension",
    shipping: "Cold-Chain",
    shipText: "❄️ Insulated Blue Ice (4°C)",
    link: "/categories/exosomes",
    pack: "10 mL",
  },
};

type SampleKey = keyof typeof sampleData;

export default function SamplePicker() {
  const [selected, setSelected] = useState<SampleKey>("plasma");
  const { addItem } = useCart();
  const current = sampleData[selected];

  return (
    <div className="bg-white border border-slate-200/80 rounded-xl p-6 shadow-soft my-10">
      <div className="mb-4">
        <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-1">
          Sample-to-Reagent Selection Matrix
        </span>
        <h3 className="text-xl font-extrabold text-[#0b1d33]">
          Select Your Laboratory Biological Specimen
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Review verified isolation reagents, input volumes, and storage requirements mapped to your matrix.
        </p>
      </div>

      {/* Pill buttons (Soft, comfortable rounded style) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: "plasma", label: "Human Plasma (EDTA / Citrate)" },
          { key: "serum", label: "Serum (Clot Activator)" },
          { key: "urine", label: "Clean-Catch Urine" },
          { key: "media", label: "Cell Culture Supernatant" },
          { key: "qc", label: "Cell Harvest / QC Pellet" },
          { key: "biofluids", label: "Saliva, CSF & Breast Milk" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSelected(item.key as SampleKey)}
            className={`text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all ${
              selected === item.key
                ? "bg-[#0b1d33] text-white border-[#0b1d33] shadow-sm"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Display Card */}
      <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 flex flex-wrap justify-between items-center gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs bg-white px-2.5 py-0.5 rounded-md border border-slate-200 font-bold text-[#0b1d33]">
              Cat #{current.catNo} ({current.sku})
            </span>
            <span className="text-xs font-semibold text-cold font-mono">{current.shipText}</span>
          </div>
          <h4 className="font-extrabold text-base text-[#0b1d33] mb-1">{current.title}</h4>
          <div className="text-xs text-slate-600 flex flex-wrap gap-3">
            <span><strong>Input Volume:</strong> {current.input}</span>
            <span>&bull;</span>
            <span><strong>Yield / Recovery:</strong> {current.elution}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              addItem({
                sku: current.sku,
                catNo: current.catNo,
                name: current.title,
                packSize: current.pack,
                shipping: current.shipping,
                quantity: 1,
              })
            }
            className="bg-accent hover:bg-accent-hover text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all hover:scale-[1.02]"
          >
            + Add to Quote
          </button>
          <Link
            href={current.link}
            className="border border-slate-300 hover:border-[#0b1d33] text-slate-700 hover:text-[#0b1d33] text-xs font-bold px-3.5 py-2 rounded-lg bg-white transition-all shadow-sm"
          >
            View Specs &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
