"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CfdnaProductClient() {
  const { addItem } = useCart();
  const [packSize, setPackSize] = useState("50 isolations");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"overview" | "protocol" | "data" | "docs" | "faqs">("overview");

  const handleAdd = () => {
    addItem({
      sku: "MG-CFDNA-101",
      catNo: "L2057",
      name: "MagDNA cf-DNA Purification Kit",
      packSize: packSize,
      shipping: "Ambient",
      quantity: quantity,
    });
  };

  const handleBundleAdd = () => {
    addItem({
      sku: "BUNDLE-LB-PREP",
      catNo: "BUNDLE-LB-PREP",
      name: "Liquid Biopsy Complete Prep Bundle (cfDNA + NGS Size Selection + PCR Clean-up)",
      packSize: "50 preps each",
      shipping: "Ambient",
      quantity: 1,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/categories/liquid-biopsy" className="hover:text-primary">Liquid Biopsy & cfDNA</Link>
        <span>/</span>
        <span className="font-bold text-primary">MagDNA cf-DNA Purification Kit</span>
      </nav>

      {/* Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left 5 Cols: Visual Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center relative min-h-[380px]">
            <span className="absolute top-3 left-3 bg-slate-100 border border-slate-300 text-slate-700 font-mono text-[11px] font-bold px-2 py-0.5 rounded">
              📦 Ambient Shipping (No Dry-Ice Surcharge)
            </span>
            <span className="absolute top-3 right-3 bg-amber-50 border border-amber-300 text-amber-800 font-mono text-[11px] font-bold px-2 py-0.5 rounded">
              RUO · Research Use Only
            </span>

            {/* Schematic */}
            <svg width="180" height="180" viewBox="0 0 200 200" fill="none" className="my-4" aria-label="MagDNA cf-DNA Purification Kit Packaging Schematic">
              <rect x="30" y="50" width="140" height="110" rx="6" fill="#f8fafc" stroke="#07192c" strokeWidth="3" />
              <rect x="30" y="50" width="140" height="35" rx="6" fill="#07192c" />
              <circle cx="55" cy="68" r="8" fill="#008080" />
              <text x="70" y="73" fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="sans-serif">Luminous Bio</text>
              <text x="45" y="115" fill="#07192c" fontSize="13" fontWeight="800" fontFamily="sans-serif">MagDNA cf-DNA</text>
              <text x="45" y="132" fill="#64748b" fontSize="10" fontFamily="monospace">Cat # L2057</text>
              <rect x="130" y="100" width="12" height="35" rx="3" fill="#008080" opacity="0.8" />
              <rect x="146" y="95" width="12" height="40" rx="3" fill="#0284c7" opacity="0.8" />
            </svg>
            <p className="text-xs text-slate-500 font-mono text-center">
              Superparamagnetic Silica SPRI Bead Chemistry
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 rounded p-4">
            <div className="font-bold text-emerald-900 text-xs mb-1">
              🧪 Free 10-Isolation Evaluation Pack Available
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed mb-2">
              Evaluating cfDNA recovery against your existing spin columns? Request an evaluation pack for your laboratory before placing a bulk procurement order.
            </p>
            <Link
              href="/quote-cart?sku=MG-CFDNA-101&pack=10+isolations&eval=true"
              className="text-xs font-bold text-emerald-900 underline"
            >
              Request Evaluation Pack &rarr;
            </Link>
          </div>
        </div>

        {/* Right 7 Cols: Details, Selection, Specs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-xs font-bold text-accent uppercase">Liquid Biopsy Core Line</span>
              <span className="font-mono text-xs text-slate-500">SKU: MG-CFDNA-101 | Cat #: L2057</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">
              MagDNA cf-DNA Purification Kit
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rapid magnetic bead-based extraction of circulating cell-free DNA from human plasma, serum, and urine. Yields pure, intact mononucleosomal cfDNA ready for NGS liquid biopsy panels and digital droplet PCR (ddPCR).
            </p>
          </div>

          {/* Pack Selection & Quote Form */}
          <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm space-y-4">
            <div>
              <label className="text-xs font-bold text-primary block mb-2">
                Select Isolation Pack Size:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { value: "10 isolations", name: "10 Preps", sub: "Pilot / Eval" },
                  { value: "50 isolations", name: "50 Preps", sub: "Standard Lab" },
                  { value: "200 isolations", name: "200 Preps", sub: "Core Facility" },
                  { value: "400 isolations", name: "400 Preps", sub: "High-Throughput" },
                ].map((pack) => (
                  <button
                    key={pack.value}
                    type="button"
                    onClick={() => setPackSize(pack.value)}
                    className={`p-2.5 rounded border text-center transition-colors ${
                      packSize === pack.value
                        ? "border-accent bg-teal-50 text-accent"
                        : "border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className="font-extrabold text-xs">{pack.name}</div>
                    <div className="text-[10px] text-slate-500">{pack.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded p-3 flex justify-between items-center text-xs">
              <div>
                <span className="font-extrabold text-base text-primary">Price on Request</span>
                <div className="text-[11px] text-slate-500">Official INR proforma invoice with HSN 3822 00 90 & DSIR 5% GST</div>
              </div>
              <span className="font-mono text-emerald-800 font-bold bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded">
                4-Hour Turnaround
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-slate-300 rounded overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-9 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
                >
                  -
                </button>
                <span className="w-10 text-center font-mono font-bold text-xs">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-9 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Add to Quote Request</span>
              </button>

              <a
                href={`https://wa.me/919061381010?text=${encodeURIComponent(
                  `Hello Nuvamed Diagnostics, I would like to inquire about MagDNA cf-DNA Purification Kit (Cat # L2057) - ${packSize}. Please provide INR proforma and delivery timeline.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded shadow transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                <span>💬 WhatsApp (+91 9061381010)</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              💳 Booking confirmed upon <strong>advance payment only</strong> (or institutional PO wherever necessary).
            </p>
          </div>

          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white border border-slate-200 rounded p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">Sample Input Volume</span>
              <span className="font-bold text-primary mt-0.5 block">0.5 mL to 5.0 mL Plasma / Serum</span>
            </div>
            <div className="bg-white border border-slate-200 rounded p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">Protocol Duration</span>
              <span className="font-bold text-primary mt-0.5 block">~45 Minutes (Automated / Manual)</span>
            </div>
            <div className="bg-white border border-slate-200 rounded p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">Elution Volume</span>
              <span className="font-bold text-primary mt-0.5 block">20 µL – 50 µL (High Concentration)</span>
            </div>
            <div className="bg-white border border-slate-200 rounded p-3">
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">Shipping & Storage</span>
              <span className="font-bold text-primary mt-0.5 block">Ambient (15–25°C) · 12 Mo. Shelf Life</span>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Synergy Bundle */}
      <div className="bg-slate-100 border-2 border-dashed border-accent rounded-lg p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-1">
            Recommended Workflow Synergy
          </span>
          <h3 className="text-xl font-extrabold text-primary mb-1">Liquid Biopsy Complete Prep Bundle</h3>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed mb-3">
            Eliminate high-molecular-weight genomic DNA and size-select your libraries for Illumina / Ion Torrent sequencing with our matched workflow combination.
          </p>
          <ul className="text-xs text-slate-700 space-y-1">
            <li>&bull; <strong>MagDNA cf-DNA Kit:</strong> Cat #L2057 (50 preps)</li>
            <li>&bull; <strong>MagDNA NGS Size Selection Kit:</strong> Cat #L2059 (SPRI bead equivalent)</li>
            <li>&bull; <strong>MagDNA Gel/PCR Clean-up Kit:</strong> Cat #L2058</li>
          </ul>
        </div>
        <button
          onClick={handleBundleAdd}
          className="bg-accent hover:bg-accent-hover text-white text-xs font-bold py-3 px-5 rounded shadow whitespace-nowrap transition-colors"
        >
          + Add Complete Bundle to Quote
        </button>
      </div>

      {/* Official Downloadable Documents Bar (Permanent SSR for Search Crawlers & Researchers) */}
      <div className="bg-gradient-to-r from-[#0b1d33] to-[#143152] text-white rounded-xl p-5 mb-8 shadow-sm">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-white">
              Official Quality Assurance & Regulatory PDF Downloads
            </h2>
            <p className="text-xs text-slate-300">
              Download lot testing certificates, safety sheets, and DSIR 5% GST exemption paperwork for Indian academic audit compliance:
            </p>
          </div>
          <span className="font-mono text-[10px] bg-teal-900/80 border border-teal-500/50 text-teal-300 px-2 py-0.5 rounded font-bold">
            HSN: 3822 00 90
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
          <a
            href="/docs/magdna-cfdna-manual-protocol.pdf"
            download
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2.5 text-left transition-all block group"
          >
            <span className="font-bold text-white block group-hover:text-teal-300">📄 Protocol Manual</span>
            <span className="text-[10px] text-slate-300">MagDNA 45-min Extraction</span>
          </a>
          <a
            href="/docs/sample-certificate-of-analysis-coa.pdf"
            download
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2.5 text-left transition-all block group"
          >
            <span className="font-bold text-white block group-hover:text-teal-300">🔬 Sample COA</span>
            <span className="text-[10px] text-slate-300">Bioanalyzer 167 bp QC Trace</span>
          </a>
          <a
            href="/docs/ghs-material-safety-data-sheet-sds.pdf"
            download
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2.5 text-left transition-all block group"
          >
            <span className="font-bold text-white block group-hover:text-teal-300">🛡️ Safety Sheet (SDS)</span>
            <span className="text-[10px] text-slate-300">GHS & REACH Non-Toxic</span>
          </a>
          <a
            href="/docs/dsir-5-percent-gst-undertaking-form.pdf"
            download
            className="bg-emerald-900/60 hover:bg-emerald-900/90 border border-emerald-500/50 rounded-lg p-2.5 text-left transition-all block group"
          >
            <span className="font-bold text-emerald-300 block group-hover:text-white">🏛️ DSIR 5% GST Form</span>
            <span className="text-[10px] text-emerald-200">Exemption Template</span>
          </a>
        </div>
      </div>

      {/* Technical Tabs */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-5 py-3 border-b-2 whitespace-nowrap ${
              activeTab === "overview" ? "border-accent text-accent bg-white" : "border-transparent hover:text-primary"
            }`}
          >
            Overview & Principles
          </button>
          <button
            onClick={() => setActiveTab("protocol")}
            className={`px-5 py-3 border-b-2 whitespace-nowrap ${
              activeTab === "protocol" ? "border-accent text-accent bg-white" : "border-transparent hover:text-primary"
            }`}
          >
            Protocol Summary
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`px-5 py-3 border-b-2 whitespace-nowrap ${
              activeTab === "data" ? "border-accent text-accent bg-white" : "border-transparent hover:text-primary"
            }`}
          >
            TapeStation & Validation Data
          </button>
          <button
            onClick={() => setActiveTab("docs")}
            className={`px-5 py-3 border-b-2 whitespace-nowrap ${
              activeTab === "docs" ? "border-accent text-accent bg-white" : "border-transparent hover:text-primary"
            }`}
          >
            Documents & COA
          </button>
          <button
            onClick={() => setActiveTab("faqs")}
            className={`px-5 py-3 border-b-2 whitespace-nowrap ${
              activeTab === "faqs" ? "border-accent text-accent bg-white" : "border-transparent hover:text-primary"
            }`}
          >
            FAQs & Procurement
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-primary">Principle of SPRI-Based cfDNA Extraction</h3>
              <p>
                Circulating cell-free DNA (cfDNA) in peripheral blood plasma consists predominantly of short, double-stranded fragments (~167 base pairs) released during apoptotic cellular turnover. In oncology and non-invasive prenatal testing (NIPT), isolating this low-abundance target while strictly preventing contamination from cellular genomic DNA (gDNA from white blood cell lysis) is vital.
              </p>
              <div className="border border-slate-200 rounded overflow-hidden my-4">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="p-3">Parameter</th>
                      <th className="p-3 text-accent font-extrabold">Luminous MagDNA cf-DNA (L2057)</th>
                      <th className="p-3 text-slate-500">Qiagen QIAamp CNA (Spin Column)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 font-semibold">India Landed Cost Per Prep</td>
                      <td className="p-3 text-emerald-800 font-bold">~75% Savings vs Imported Columns</td>
                      <td className="p-3 text-red-700">High Import Markup & Customs Freight</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Separation Chemistry</td>
                      <td className="p-3">Superparamagnetic Silica Beads (Automatable)</td>
                      <td className="p-3">Silica Spin Column (Centrifugation / Vacuum)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">High-Throughput Automation</td>
                      <td className="p-3">Compatible with KingFisher Flex & 96-well plates</td>
                      <td className="p-3">Manual Centrifugation Required</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Shipping Condition</td>
                      <td className="p-3 text-cold font-semibold">Ambient Room Temp (Reduced Freight)</td>
                      <td className="p-3">Room Temp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "protocol" && (
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-primary">Isolation Protocol Workflow (3–5 mL Plasma)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-slate-50 border border-slate-200 rounded p-3">
                  <div className="font-mono text-base font-extrabold text-accent mb-1">01</div>
                  <strong className="text-primary block mb-1">Lysis & Digestion</strong>
                  <p className="text-slate-600">Add Proteinase K and Lysis Buffer to plasma. Incubate at 56°C for 20 mins to digest nucleoprotein complexes.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3">
                  <div className="font-mono text-base font-extrabold text-accent mb-1">02</div>
                  <strong className="text-primary block mb-1">Magnetic Binding</strong>
                  <p className="text-slate-600">Add MagDNA magnetic beads and binding solution. Beads selectively capture 167 bp apoptotic cfDNA fragments.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3">
                  <div className="font-mono text-base font-extrabold text-accent mb-1">03</div>
                  <strong className="text-primary block mb-1">Ethanol Washes</strong>
                  <p className="text-slate-600">Apply magnetic separator. Wash twice with Wash Buffer to completely remove residual salts, proteins, and heparin.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded p-3">
                  <div className="font-mono text-base font-extrabold text-accent mb-1">04</div>
                  <strong className="text-primary block mb-1">Pure Elution</strong>
                  <p className="text-slate-600">Elute in 20 µL to 50 µL nuclease-free water or low-EDTA TE. Direct input into library prep or qPCR.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-primary">Agilent Bioanalyzer 2100 & High Sensitivity DNA Assay Trace</h3>
              <p className="text-xs text-slate-600">
                Representative electropherogram profiles demonstrate prominent, razor-sharp peak enrichment at ~167 base pairs (mononucleosomal cfDNA) and ~334 base pairs (dinucleosomal cfDNA) from EDTA plasma, with clean baseline resolution and total absence of &gt;10 kb high-molecular-weight genomic DNA contamination.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded p-6 flex flex-col items-center">
                <svg width="450" height="160" viewBox="0 0 500 180" fill="none" className="max-w-full">
                  <line x1="50" y1="150" x2="480" y2="150" stroke="#94a3b8" strokeWidth="2" />
                  <line x1="50" y1="20" x2="50" y2="150" stroke="#94a3b8" strokeWidth="2" />
                  <path d="M 60 150 L 65 30 L 70 150" stroke="#0284c7" strokeWidth="2" fill="none" />
                  <text x="50" y="170" fontSize="10" fill="#64748b">35 bp</text>
                  <path d="M 140 150 Q 170 150 175 35 Q 180 150 210 150" stroke="#008080" strokeWidth="3" fill="rgba(0, 128, 128, 0.15)" />
                  <text x="160" y="25" fontSize="11" fontWeight="700" fill="#008080">167 bp (cfDNA)</text>
                  <path d="M 230 150 Q 250 150 255 105 Q 260 150 280 150" stroke="#008080" strokeWidth="2" fill="rgba(0, 128, 128, 0.1)" />
                  <text x="240" y="95" fontSize="10" fill="#008080">334 bp</text>
                  <path d="M 450 150 L 455 30 L 460 150" stroke="#0284c7" strokeWidth="2" fill="none" />
                  <text x="440" y="170" fontSize="10" fill="#64748b">10,380 bp</text>
                </svg>
                <span className="text-[11px] font-mono text-slate-500 mt-2">
                  Figure 1: Agilent Bioanalyzer High Sensitivity DNA Chip trace of cfDNA isolated with Luminous MagDNA (Cat #L2057).
                </span>
              </div>
            </div>
          )}

          {activeTab === "docs" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold text-primary">Technical Documentation & Official Regulatory Downloads</h3>
                <span className="font-mono text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                  PDF 1.4 Compliant
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Download verified technical specifications, lot-release test criteria, safety classifications, and official DSIR 5% GST exemption undertaking formats directly for institutional procurement files:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="border border-slate-200 rounded-lg p-3.5 bg-slate-50/50 flex justify-between items-center hover:border-accent transition-colors">
                  <div>
                    <strong className="text-primary block font-bold">MagDNA Extraction Protocol Manual</strong>
                    <span className="text-slate-500 text-[11px]">Step-by-step 45-min workflow (0.5–5.0 mL plasma)</span>
                  </div>
                  <a
                    href="/docs/magdna-cfdna-manual-protocol.pdf"
                    download
                    className="bg-accent hover:bg-accent-hover text-white text-[11px] font-bold py-1.5 px-3 rounded shadow-sm transition-colors whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>
                <div className="border border-slate-200 rounded-lg p-3.5 bg-slate-50/50 flex justify-between items-center hover:border-accent transition-colors">
                  <div>
                    <strong className="text-primary block font-bold">Sample Certificate of Analysis (COA)</strong>
                    <span className="text-slate-500 text-[11px]">Bioanalyzer 167 bp trace & lot purity metrics</span>
                  </div>
                  <a
                    href="/docs/sample-certificate-of-analysis-coa.pdf"
                    download
                    className="bg-accent hover:bg-accent-hover text-white text-[11px] font-bold py-1.5 px-3 rounded shadow-sm transition-colors whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>
                <div className="border border-slate-200 rounded-lg p-3.5 bg-slate-50/50 flex justify-between items-center hover:border-accent transition-colors">
                  <div>
                    <strong className="text-primary block font-bold">Safety Data Sheet (GHS-SDS)</strong>
                    <span className="text-slate-500 text-[11px]">Indian GHS & European REACH compliant</span>
                  </div>
                  <a
                    href="/docs/ghs-material-safety-data-sheet-sds.pdf"
                    download
                    className="bg-accent hover:bg-accent-hover text-white text-[11px] font-bold py-1.5 px-3 rounded shadow-sm transition-colors whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>
                <div className="border border-slate-200 rounded-lg p-3.5 bg-slate-50/50 flex justify-between items-center hover:border-accent transition-colors">
                  <div>
                    <strong className="text-primary block font-bold">DSIR 5% GST Undertaking Template</strong>
                    <span className="text-slate-500 text-[11px]">Ministry Notification 47/2017 Format</span>
                  </div>
                  <a
                    href="/docs/dsir-5-percent-gst-undertaking-form.pdf"
                    download
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold py-1.5 px-3 rounded shadow-sm transition-colors whitespace-nowrap"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "faqs" && (
            <div className="space-y-3">
              <h3 className="text-base font-extrabold text-primary">Frequently Asked Technical & Procurement Questions</h3>
              <div className="space-y-2 text-xs">
                <div className="border-l-2 border-accent pl-3">
                  <strong className="text-primary block">Can this kit be automated on standard magnetic rod handlers?</strong>
                  <p className="text-slate-600 mt-0.5">Yes. The superparamagnetic beads and buffer chemistry are compatible with Thermo Scientific KingFisher Flex, Bio-Rad, and open 96-well automation robots. Protocol scripts available upon request.</p>
                </div>
                <div className="border-l-2 border-accent pl-3">
                  <strong className="text-primary block">How does ambient shipping affect kit performance in Indian summer temperatures?</strong>
                  <p className="text-slate-600 mt-0.5">The MagDNA buffers and magnetic silica matrix are formulated for stability at ambient room temperatures (up to 30°C) during transit, preventing cold-chain degradation and avoiding expensive dry-ice surcharges.</p>
                </div>
                <div className="border-l-2 border-accent pl-3">
                  <strong className="text-primary block">What documentation is provided for Indian institutional purchase committees?</strong>
                  <p className="text-slate-600 mt-0.5">We supply an authorized distribution certificate, proprietary justification letter, GST proforma invoice in INR, and lot-specific COA to fulfill standard institutional tender and spot-purchase guidelines.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
