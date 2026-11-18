import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1d33] text-slate-400 text-xs pt-12 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-accent text-white font-black text-sm flex items-center justify-center rounded-md shadow-sm">
                ND
              </div>
              <span className="text-white font-extrabold text-sm tracking-tight">
                Nuvamed Diagnostics LLP Limited
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-3">
              Direct authorized supply, technical support, and cold-chain distribution by Nuvamed Diagnostics LLP Limited for US-manufactured Luminous BioSciences products across Indian academic institutes, diagnostics centers, and biopharma facilities.
            </p>
            <div className="space-y-1 font-mono text-[11px] text-slate-300">
              <div>📍 Regional Logistics Hub: Kochi, Kerala, India</div>
              <div>📧 Direct Procurement Desk: <a href="mailto:nuvameddx@gmail.com" className="text-teal-300 underline">nuvameddx@gmail.com</a></div>
              <div>📞 Technical Support & WhatsApp: +91 94000 00000</div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Priority Lead Lines</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/cfdna-purification-kit" className="hover:text-white transition-colors">
                  MagDNA cf-DNA Kit (Cat # L2057)
                </Link>
              </li>
              <li>
                <Link href="/categories/exosomes" className="hover:text-white transition-colors">
                  Exosome Isolation Kits (Serum / Plasma / Urine)
                </Link>
              </li>
              <li>
                <Link href="/categories/exosomes#antibodies" className="hover:text-white transition-colors">
                  MISEV Marker Antibodies (CD9, CD63, TSG101)
                </Link>
              </li>
              <li>
                <Link href="/categories/cell-culture-qc" className="hover:text-white transition-colors">
                  Universal Mycoplasma qPCR Kit (Cat # LG1903)
                </Link>
              </li>
              <li>
                <Link href="/elisa-finder" className="hover:text-white transition-colors">
                  13,137 Target ELISA Finder
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Procurement & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/quote-cart" className="hover:text-white transition-colors">
                  Institutional Proforma Generator
                </Link>
              </li>
              <li>
                <Link href="/quote-cart?type=evaluation" className="hover:text-white transition-colors">
                  15-Lab Pilot Evaluation Application
                </Link>
              </li>
              <li>
                <span className="text-slate-400">DSIR 5% Concessional GST Certificate Guide</span>
              </li>
              <li>
                <span className="text-slate-400">Proprietary Article Certificate (PAC) Format</span>
              </li>
              <li>
                <span className="text-slate-400">GeM (Government e-Marketplace) Vendor Listing</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Domestic Dispatch Hubs</h4>
            <p className="text-slate-400 leading-relaxed mb-3">
              Regular temperature-monitored domestic express air cargo shipments to research clusters:
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="bg-white/10 px-2 py-1 rounded text-slate-300">Bengaluru</span>
              <span className="bg-white/10 px-2 py-1 rounded text-slate-300">Hyderabad</span>
              <span className="bg-white/10 px-2 py-1 rounded text-slate-300">Pune / Mumbai</span>
              <span className="bg-white/10 px-2 py-1 rounded text-slate-300">Delhi NCR</span>
              <span className="bg-white/10 px-2 py-1 rounded text-slate-300">Chennai</span>
              <span className="bg-white/10 px-2 py-1 rounded text-slate-300">Kochi / Trivandrum</span>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6 leading-relaxed text-slate-300 text-xs">
          <strong>Regulatory & Quality Notice:</strong> Products distributed through this portal are intended strictly <em>FOR RESEARCH USE ONLY (RUO)</em>. Not for use in clinical diagnostic or human therapeutic procedures. Lot-specific Certificates of Analysis (COA) and Safety Data Sheets (GHS-SDS) are included with each lot. Distribution agreement executed pursuant to standard terms of sale with Luminous BioSciences USA. HSN Classification: 3822 00 90.
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-white/10 text-slate-400 text-[11px]">
          <div>&copy; 2026 Nuvamed Diagnostics LLP Limited. All rights reserved. Regional Logistics Hub: Kochi, Kerala, India.</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-200">Home</Link>
            <Link href="/products/cfdna-purification-kit" className="hover:text-slate-200">cfDNA Reagents</Link>
            <Link href="/quote-cart" className="hover:text-slate-200">Quote Portal</Link>
            <a href="mailto:nuvameddx@gmail.com" className="hover:text-slate-200">nuvameddx@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
