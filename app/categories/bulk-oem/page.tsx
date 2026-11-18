"use client";

import React from "react";
import Link from "next/link";

export default function BulkOemServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-xs text-slate-500 flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="font-bold text-primary">Bulk Raw Materials, Custom Kitting & Contract Services</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-primary text-white rounded-lg p-8 mb-8 border border-white/10">
        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-800 px-2.5 py-0.5 rounded uppercase tracking-wider mb-3 inline-block">
          OEM & B2B Solutions Desk
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Bulk Reagents, Kerala Custom Kitting & Contract Services
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed mb-4">
          Direct OEM bulk supply for diagnostic kit manufacturers in India, custom protocol kitting assembled at our Kerala facility, and contract biomanufacturing services (plasmid production, lentivirus packaging, and exosome bioprocessing).
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
          <span>Make-in-India Assembly & Kitting Compliance</span>
          <span>&bull;</span>
          <span>Industrial Liter-Scale Supply</span>
          <span>&bull;</span>
          <span>Custom Non-Disclosure Agreements (NDA) Supported</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-xs">
        {/* OEM 1: Bulk Materials */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-bold text-accent mb-2">01 · OEM RAW MATERIALS</div>
            <h3 className="text-base font-extrabold text-primary mb-2">Industrial Bulk Reagents</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Supply for Indian diagnostic manufacturers, central molecular testing labs, and assay developers requiring consistent lot-to-lot performance without branded packaging markups:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>&bull; <strong>Silica Magnetic Beads:</strong> 1 µm uniform iron oxide cores (50 mL to 10 Liters)</li>
              <li>&bull; <strong>Exosome Precipitation Polymers:</strong> Bulk stock solutions for EV harvest</li>
              <li>&bull; <strong>Lysis & Alkaline Buffers:</strong> P1, P2, P3, and high-salt wash buffers</li>
              <li>&bull; <strong>Lyophilized Proteinase K & Enzymes:</strong> High-activity molecular biology grade</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-6">
            <Link
              href="/quote-cart?service=bulk-reagents"
              className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded block text-center transition-colors"
            >
              Request Bulk Pricing &amp; COA
            </Link>
          </div>
        </div>

        {/* OEM 2: Custom Kitting in Kerala */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-bold text-accent mb-2">02 · LOCAL ASSEMBLY</div>
            <h3 className="text-base font-extrabold text-primary mb-2">Custom Kitting in Kerala</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Kits formulated, aliquoted, quality-checked, and packaged in our Kerala logistics hub from imported bulk components:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>&bull; <strong>Make-in-India Preference:</strong> Qualifies for central institutional tender compliance requiring domestic assembly</li>
              <li>&bull; <strong>Custom Reaction Numbers:</strong> 25, 50, 250, or 1,000 reaction box sizes</li>
              <li>&bull; <strong>Private Labeling:</strong> OEM branding and customized protocol manuals</li>
              <li>&bull; <strong>Batch Reservation:</strong> Reserved warehouse stock for longitudinal clinical cohorts</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-6">
            <Link
              href="/quote-cart?service=custom-kitting"
              className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded block text-center transition-colors"
            >
              Inquire About Custom Kitting
            </Link>
          </div>
        </div>

        {/* OEM 3: Contract Services */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="font-mono text-xs font-bold text-accent mb-2">03 · CONTRACT BIOMANUFACTURING</div>
            <h3 className="text-base font-extrabold text-primary mb-2">Contract Bioprocess Services</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Specialized bioprocess services executed under rigorous ISO guidelines by Luminous BioSciences:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>&bull; <strong>Plasmid Biomanufacturing:</strong> Milligram to gram-scale transfection/GMP plasmids</li>
              <li>&bull; <strong>Lentiviral Packaging:</strong> High-titer pseudotyped lentivirus production</li>
              <li>&bull; <strong>Exosome Contract Purification:</strong> Tangential flow filtration & characterization</li>
              <li>&bull; <strong>Gene Synthesis & Subcloning:</strong> Custom expression vector engineering</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-6">
            <Link
              href="/quote-cart?service=contract-services"
              className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded block text-center transition-colors"
            >
              Discuss Service Specifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
