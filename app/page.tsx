import React from "react";
import Link from "next/link";
import SamplePicker from "@/components/SamplePicker";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nuvamed.co.in/#webpage",
      url: "https://www.nuvamed.co.in",
      name: "Nuvamed Diagnostics | Luminous BioSciences India Channel",
      description:
        "Direct authorized India supply channel for US-manufactured cfDNA, exosome, and mycoplasma testing kits. Official GST proforma invoices in 4 hours.",
      isPartOf: {
        "@id": "https://www.nuvamed.co.in/#website",
      },
      about: {
        "@id": "https://www.nuvamed.co.in/#organization",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the authorized distributor for Luminous BioSciences in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuvamed Diagnostics LLP Limited is the direct authorized supply and distribution channel for Luminous BioSciences USA across India, providing lot-specific COA, cold-chain logistics from Kochi, Kerala, and official INR billing with HSN Code 3822 00 90.",
          },
        },
        {
          "@type": "Question",
          name: "What is the turnaround time for receiving an institutional proforma invoice?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuvamed Diagnostics provides official INR Proforma Invoices within 4 business hours, customized with DSIR 5% Concessional GST exemption or standard 18% GST billing.",
          },
        },
        {
          "@type": "Question",
          name: "How are temperature-sensitive reagents transported across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ambient reagents (such as MagDNA cfDNA kits) ship under standard air transit to avoid unnecessary thermal charges. Cold-chain items (-20°C and 2-8°C enzymes, antibodies, and media) are shipped with domestic temperature data loggers and insulated dry-ice / blue-ice packaging.",
          },
        },
        {
          "@type": "Question",
          name: "What are the payment and booking terms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Order booking and cold-chain lot reservation are confirmed upon Advance Payment only (or pre-approved Institutional Purchase Orders wherever necessary upon verification).",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* Hero Section: Calming Midnight Slate & Soft Teal Accent */}
      <section className="bg-gradient-to-br from-[#091729] via-[#0d223a] to-[#112a44] text-white py-14 md:py-18 border-b border-slate-800 relative overflow-hidden">
        {/* Soft Ambient Radial Glow (reduces eye strain, adds depth) */}
        <div className="absolute top-0 right-0 w-[550px] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(13,148,136,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Cols */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-teal-300 bg-teal-950/70 border border-teal-800/80 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                <span className="font-bold text-white">Nuvamed Diagnostics</span>
                <span>&bull;</span>
                <span>Authorized India Supply</span>
                <span>&bull;</span>
                <span>US-Manufactured</span>
                <span>&bull;</span>
                <span>Cold-Chain Maintained</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight mb-4 text-white">
                US-Manufactured cfDNA, Exosome & Mycoplasma Testing Kits.
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl font-normal">
                Direct authorized supply channel for Indian biomedical researchers, central genomics facilities, and biopharma quality control laboratories. Featuring superparamagnetic cfDNA purification from 0.5–5.0 mL plasma (~75% cost reduction vs. imported columns), non-ultracentrifugation EV isolation (MISEV 2023 compliant), and universal mycoplasma qPCR (&lt;10 CFU/mL analytical sensitivity). Accompanied by batch-specific COA, safety data sheets, and official institutional PO billing.
              </p>

              {/* Hard Quantitative Stats (Calm on the eyes) */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-700/80 pt-5 mb-7">
                <div>
                  <div className="font-mono text-2xl font-black text-teal-300">~75%</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Cost reduction per cfDNA prep vs imported columns
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-black text-teal-300">&lt; 10 CFU/mL</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Analytical LOD for Mycoplasma qPCR (EP 2.6.7)
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-black text-teal-300">2–3 Weeks</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Air delivery with domestic temperature data loggers
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#lead-lines"
                  className="bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg shadow-md transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Review Technical Specifications</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/quote-cart?type=evaluation"
                  className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg border border-white/20 transition-all hover:-translate-y-0.5"
                >
                  Apply for 15-Lab Pilot Evaluation Pack
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: Institutional RFQ Box (Soft Card Elevation) */}
            <div className="lg:col-span-5 bg-white text-slate-800 border border-slate-200/80 rounded-xl p-6 shadow-card">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <h2 className="font-extrabold text-base text-[#0b1d33]">Institutional RFQ Desk</h2>
                  <p className="text-xs text-slate-500">Official INR proforma invoice with HSN & GST</p>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  4-Hour SLA
                </span>
              </div>

              <form action="/quote-cart" method="GET" className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Principal Investigator / Scientist Name *
                  </label>
                  <input
                    type="text"
                    name="pi_name"
                    required
                    placeholder="Dr. Rajesh Nair"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-accent focus:outline-none bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Institute / University / Company *
                  </label>
                  <input
                    type="text"
                    name="institute"
                    required
                    placeholder="e.g. AIIMS, IISc, RGCB, IIT, Biocon"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-accent focus:outline-none bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Reagent Line / Target of Interest *
                  </label>
                  <input
                    type="text"
                    name="product"
                    required
                    placeholder="e.g. MagDNA cfDNA Kit (L2057), Exosome Isolation (E103)"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-accent focus:outline-none bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Official Email / WhatsApp Phone *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="rnair@rgcb.res.in / +91 98765 43210"
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg focus:border-accent focus:outline-none bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  Generate Official Proforma Invoice
                </button>
                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  🔒 Booking by <strong>Advance Payment only</strong> (or pre-approved Institutional PO wherever necessary) &bull; Concessional 5% DSIR / 18% Compliant Billing &bull; WhatsApp Booking Live Soon.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Priority Winning Lines */}
      <section className="py-14" id="lead-lines">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-1">
              Tier 1 Strategic Categories · Price & Scarcity Advantage in India
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d33]">
              Core Benchtop Reagents & Technical Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
              Evaluated against prevailing Indian landed costs to provide maximum budgetary relief for extramural grant allocations (SERB, DBT, ICMR, CSIR) and commercial diagnostics workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lead 1: cfDNA */}
            <article className="bg-white border border-slate-200/90 rounded-xl p-5 flex flex-col shadow-soft card-hover hover:border-accent">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs font-bold bg-slate-100 text-[#0b1d33] border border-slate-200 px-2 py-0.5 rounded">
                  Cat # L2057 · SKU: MG-CFDNA-101
                </span>
                <span className="font-mono text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                  Storage: 15–25°C
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-[#0b1d33] mb-2">
                MagDNA cf-DNA Purification Kit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                Superparamagnetic SPRI bead chemistry engineered for selective capture of low-abundance 167 bp mononucleosomal fragments from 0.5 mL to 5.0 mL human plasma or serum. Eliminates high-molecular-weight genomic DNA background from leukocyte lysis. Delivers concentrated 20–50 µL elution for direct input into Illumina TruSeq NGS libraries or ddPCR.
              </p>

              <div className="bg-slate-50 border-l-2 border-accent p-3 text-xs text-slate-700 rounded-r mb-4 leading-relaxed">
                <strong>Benchmark vs Qiagen QIAamp CNA:</strong> Delivers approximately <strong>75% cost reduction per isolation</strong> with matching Agilent 2100 Bioanalyzer electropherogram profiles. Compatible with KingFisher Flex automated magnetic rod processors.
              </div>

              <ul className="text-xs text-slate-600 space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                <li>&bull; <strong>Sample Input:</strong> 0.5 mL – 5.0 mL plasma, serum, urine</li>
                <li>&bull; <strong>Fragment Size:</strong> 167 bp mononucleosomal peak</li>
                <li>&bull; <strong>Pack Sizes:</strong> 10 / 50 / 200 / 400 isolations</li>
                <li>&bull; <strong>Shipping:</strong> Ambient Room Temp (Reduced Freight)</li>
              </ul>

              <div className="flex gap-2 mt-auto">
                <Link
                  href="/products/cfdna-purification-kit"
                  className="bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-bold py-2 px-3 rounded-lg text-center flex-1 transition-colors"
                >
                  View TapeStation Trace
                </Link>
                <Link
                  href="/quote-cart?sku=MG-CFDNA-101"
                  className="border border-accent text-accent hover:bg-accent hover:text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </article>

            {/* Lead 2: Exosomes */}
            <article className="bg-white border border-slate-200/90 rounded-xl p-5 flex flex-col shadow-soft card-hover hover:border-accent" id="exosomes">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs font-bold bg-slate-100 text-[#0b1d33] border border-slate-200 px-2 py-0.5 rounded">
                  Cat # E103 / E105 · SKU: MG-EXO-103
                </span>
                <span className="font-mono text-[11px] text-cold bg-cold-light px-2 py-0.5 rounded border border-cold-border font-semibold">
                  Storage: 4°C / -20°C
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-[#0b1d33] mb-2">
                Exosome Isolation & EV Characterization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                Non-ultracentrifugation precipitation reagent isolating intact 30–150 nm extracellular vesicles from serum, plasma, urine, and cell culture supernatant in under 2 hours at 10,000 &times; g. Preserves vesicle surface topography without shear force degradation. Paired with monoclonal anti-CD9, CD63, and polyclonal anti-TSG101 antibodies for MISEV 2023 Western blot validation.
              </p>

              <div className="bg-slate-50 border-l-2 border-accent p-3 text-xs text-slate-700 rounded-r mb-4 leading-relaxed">
                <strong>Benchmark vs Ultracentrifugation:</strong> Bypasses shared central facility ultracentrifuge booking queues. Recovers intact EVs from standard 10–50 mL culture volumes using conventional benchtop microcentrifuges.
              </div>

              <ul className="text-xs text-slate-600 space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                <li>&bull; <strong>Sample Matrices:</strong> Serum (E103), Plasma/Urine (E105), Media (E101)</li>
                <li>&bull; <strong>Direct Downstream:</strong> Exosome Direct RT-PCR Kit (Cat # E1012)</li>
                <li>&bull; <strong>MISEV Markers:</strong> CD9 (LE1024), CD63 (LGB11620), TSG101 (LGB11619)</li>
                <li>&bull; <strong>Shipping:</strong> Insulated Blue Ice Express (4°C)</li>
              </ul>

              <div className="flex gap-2 mt-auto">
                <Link
                  href="/categories/exosomes"
                  className="bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-bold py-2 px-3 rounded-lg text-center flex-1 transition-colors"
                >
                  View 14-Item EV Range
                </Link>
                <Link
                  href="/quote-cart?sku=MG-EXO-103"
                  className="border border-accent text-accent hover:bg-accent hover:text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </article>

            {/* Lead 3: Mycoplasma */}
            <article className="bg-white border border-slate-200/90 rounded-xl p-5 flex flex-col shadow-soft card-hover hover:border-accent" id="mycoplasma">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs font-bold bg-slate-100 text-[#0b1d33] border border-slate-200 px-2 py-0.5 rounded">
                  Cat # LG1903-50T · SKU: MG-QC-1903
                </span>
                <span className="font-mono text-[11px] text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200 font-semibold">
                  Storage: -20°C
                </span>
              </div>

              <h3 className="font-extrabold text-lg text-[#0b1d33] mb-2">
                Universal Mycoplasma qPCR Detection Kit
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                TaqMan hydrolysis probe real-time PCR assay detecting over 100 Mycoplasma, Acholeplasma, and Spiroplasma species with analytical sensitivity &lt; 10 CFU/mL. Formulated with an Internal Amplification Control (IAC) to identify false-negative PCR inhibition in cell culture supernatant and biologics harvest samples. Fully compliant with European Pharmacopoeia (EP 2.6.7) and USP &lt;63&gt; guidelines.
              </p>

              <div className="bg-slate-50 border-l-2 border-accent p-3 text-xs text-slate-700 rounded-r mb-4 leading-relaxed">
                <strong>Turnaround for Cell Therapy QC:</strong> Eliminates 28-day agar culture delays. Yields verified contamination status in under 2 hours for CAR-T manufacturing, mesenchymal stem cell (MSC) expansion, and master cell banking.
              </div>

              <ul className="text-xs text-slate-600 space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                <li>&bull; <strong>Analytical Sensitivity:</strong> &lt; 10 CFU/mL (or 10 copies/reaction)</li>
                <li>&bull; <strong>Species Coverage:</strong> M. fermentans, M. hyorhinis, M. orale + 100+</li>
                <li>&bull; <strong>Kit Pack Size:</strong> 50 reactions (Standard QC Batch)</li>
                <li>&bull; <strong>Shipping:</strong> Validated -20°C Monitored Dry Ice Transit</li>
              </ul>

              <div className="flex gap-2 mt-auto">
                <Link
                  href="/categories/cell-culture-qc"
                  className="bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-bold py-2 px-3 rounded-lg text-center flex-1 transition-colors"
                >
                  Request Official Proforma
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Interactive Sample Matrix */}
      <section className="max-w-7xl mx-auto px-4">
        <SamplePicker />
      </section>

      {/* Institutional Procurement Workflow for India */}
      <section className="bg-white border-y border-slate-200/80 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-1">
              Statutory Compliance & Indian Procurement Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1d33]">
              Structured for Purchase Committees, Tenders & GeM Contracts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
              Eliminating customs clearance delays, foreign currency exchange overhead, and documentation bottlenecks across Indian central and state universities, autonomous institutes, and corporate biopharma.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/60 shadow-soft">
              <div className="font-mono text-xs font-bold text-accent mb-1">STAGE 01</div>
              <h4 className="font-bold text-sm text-[#0b1d33] mb-1">INR Proforma Quotation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Generated within 4 working hours with itemized unit pricing in INR, HSN Code 3822 00 90, GST split, and 30 days price validity.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/60 shadow-soft">
              <div className="font-mono text-xs font-bold text-accent mb-1">STAGE 02</div>
              <h4 className="font-bold text-sm text-[#0b1d33] mb-1">Concessional GST Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supports DSIR 5% Concessional GST invoicing against valid institutional essentiality certificates, or standard 18% B2B tax billing.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/60 shadow-soft">
              <div className="font-mono text-xs font-bold text-accent mb-1">STAGE 03</div>
              <h4 className="font-bold text-sm text-[#0b1d33] mb-1">Institutional Paperwork</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Furnished with Authorized Distributor Certificate, Proprietary Article Certificate (PAC), and GeM vendor registration verification.
              </p>
            </div>

            <div className="border border-slate-200/80 rounded-xl p-4 bg-slate-50/60 shadow-soft">
              <div className="font-mono text-xs font-bold text-accent mb-1">STAGE 04</div>
              <h4 className="font-bold text-sm text-[#0b1d33] mb-1">Thermal Monitored Air Express</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customs clearance under research undertaking at port of entry. Domestic air courier dispatch to Bengaluru, Hyderabad, Delhi NCR, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Evaluation Pack Announcement */}
      <section className="max-w-7xl mx-auto px-4 my-14">
        <div className="bg-gradient-to-r from-[#0b1d33] to-[#122e50] text-white rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-card">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold bg-accent text-white px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
              Principal Investigator Pilot Initiative
            </span>
            <h3 className="text-2xl font-extrabold mb-2">
              Request a 10-Isolation cfDNA or Mycoplasma Evaluation Pack
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Reserved for accredited Indian laboratories (AIIMS, IISc, IITs, RGCB, SCTIMST, THSTI, and private genomics CROs) evaluating yields against incumbent spin columns. Maximum 15 packs allocated across India in exchange for blinded bench validation data.
            </p>
          </div>
          <div>
            <Link
              href="/quote-cart?type=evaluation"
              className="bg-white hover:bg-slate-50 text-[#0b1d33] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-lg shadow block text-center whitespace-nowrap transition-all hover:scale-[1.02]"
            >
              Submit Lab Evaluation Application &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
