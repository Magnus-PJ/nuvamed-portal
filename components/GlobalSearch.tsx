"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

export interface SearchProduct {
  name: string;
  catNo: string;
  category: string;
  link: string;
  sku: string;
  pack: string;
  shipping: string;
  tags?: string;
}

const masterCatalog: SearchProduct[] = [
  // Liquid Biopsy
  {
    name: "MagDNA cf-DNA Purification Kit",
    catNo: "L2057",
    category: "Liquid Biopsy",
    link: "/products/cfdna-purification-kit",
    sku: "MG-CFDNA-101",
    pack: "50 isolations",
    shipping: "Ambient",
    tags: "cfDNA plasma serum urine liquid biopsy cell-free circulating DNA",
  },
  {
    name: "MagDNA NGS Size Selection Kit",
    catNo: "L2059",
    category: "Liquid Biopsy",
    link: "/categories/liquid-biopsy",
    sku: "MG-CFDNA-1059",
    pack: "50 reactions",
    shipping: "Ambient",
    tags: "SPRI beads size selection AMPure XP library cleanup",
  },
  {
    name: "MagDNA Gel & PCR Clean-up Kit",
    catNo: "L2058",
    category: "Liquid Biopsy",
    link: "/categories/liquid-biopsy",
    sku: "MG-CFDNA-1058",
    pack: "50 preps",
    shipping: "Ambient",
    tags: "PCR clean-up gel extraction magnetic beads",
  },

  // Exosomes
  {
    name: "Exosome Isolation Kit, Serum",
    catNo: "E103",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "MG-EXO-103",
    pack: "10 mL",
    shipping: "Cold-Chain",
    tags: "serum exosome isolation EV extracellular vesicles",
  },
  {
    name: "Exosome Isolation Kit, Plasma",
    catNo: "E105",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "MG-EXO-105P",
    pack: "10 mL",
    shipping: "Cold-Chain",
    tags: "plasma exosome isolation EDTA citrate blood",
  },
  {
    name: "Exosome Isolation Kit, Urine",
    catNo: "E105",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "MG-EXO-105U",
    pack: "50 mL",
    shipping: "Cold-Chain",
    tags: "urine exosome isolation kidney biomarker bladder",
  },
  {
    name: "Exosome Isolation Kit, Cell Culture Media",
    catNo: "E101",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "MG-EXO-101",
    pack: "50 mL",
    shipping: "Cold-Chain",
    tags: "culture media exosome supernatant stem cells",
  },
  {
    name: "Exosome Direct RT-PCR Kit",
    catNo: "E1012",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "MG-EXO-1012",
    pack: "50 reactions",
    shipping: "Cold-Chain",
    tags: "exosome RNA RT-PCR direct lysis miRNA",
  },
  {
    name: "Anti-CD9 Monoclonal Antibody (Exosome Marker)",
    catNo: "LE1024",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "AB-CD9",
    pack: "50 µL",
    shipping: "Cold-Chain",
    tags: "CD9 antibody tetraspanin exosome western blot",
  },
  {
    name: "Anti-CD63 Rabbit pAb (Exosome Marker)",
    catNo: "LGB11620",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "AB-CD63",
    pack: "100 µL",
    shipping: "Cold-Chain",
    tags: "CD63 antibody tetraspanin MISEV western blot",
  },
  {
    name: "Anti-TSG101 Rabbit pAb (Exosome Marker)",
    catNo: "LGB11619",
    category: "Exosomes",
    link: "/categories/exosomes",
    sku: "AB-TSG101",
    pack: "100 µL",
    shipping: "Cold-Chain",
    tags: "TSG101 antibody endosome marker western blot",
  },

  // Cell Culture QC / Mycoplasma
  {
    name: "Universal Mycoplasma qPCR Detection Kit (TaqMan)",
    catNo: "LG1903-50T",
    category: "Cell Culture QC",
    link: "/categories/cell-culture-qc",
    sku: "MG-QC-1903",
    pack: "50 reactions",
    shipping: "Cold-Chain",
    tags: "mycoplasma qPCR detection kit real-time EP 2.6.7 CAR-T QC",
  },
  {
    name: "Universal Mycoplasma PCR Detection Kit (Gel-Based)",
    catNo: "LG1900-50T",
    category: "Cell Culture QC",
    link: "/categories/cell-culture-qc",
    sku: "MG-QC-1900",
    pack: "50 reactions",
    shipping: "Cold-Chain",
    tags: "mycoplasma conventional PCR detection gel electrophoresis",
  },

  // Culture Media
  {
    name: "Serum-Free NK Cell Culture Kit 5.0 (Standard)",
    catNo: "LNC0102",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-0102",
    pack: "2,000 mL",
    shipping: "Cold-Chain",
    tags: "NK cell medium natural killer expansion serum-free",
  },
  {
    name: "Serum-Free NK Cell Culture Kit 5.0 (High Performance)",
    catNo: "LNC0104",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-0104",
    pack: "2,000 mL",
    shipping: "Cold-Chain",
    tags: "NK cell kit high performance cytokines immunotherapy",
  },
  {
    name: "Serum-Free CIK Cell Culture Kit (Peripheral Blood)",
    catNo: "LNC0108",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-0108",
    pack: "2,000 mL",
    shipping: "Cold-Chain",
    tags: "CIK cell culture PBMC peripheral blood expansion",
  },
  {
    name: "GMP Grade MSC Serum-Free Medium",
    catNo: "LNC0106",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-0106",
    pack: "500 mL",
    shipping: "Cold-Chain",
    tags: "GMP MSC medium mesenchymal stem cells serum-free",
  },
  {
    name: "HEK293 Medium for Lentivirus Packaging",
    catNo: "LNC0303",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-0303",
    pack: "1,000 mL",
    shipping: "Cold-Chain",
    tags: "HEK293 medium lentivirus packaging suspension transfection",
  },
  {
    name: "GMP Grade Vitrified Freezing Medium (DMSO-free)",
    catNo: "LNC1011",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-1011",
    pack: "100 mL",
    shipping: "Cold-Chain",
    tags: "freezing medium cryopreservation DMSO-free vitrified GMP",
  },
  {
    name: "Miller's LB Broth (Granulated)",
    catNo: "LKL1181EF",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-1181",
    pack: "500 g",
    shipping: "Ambient",
    tags: "LB broth granulated Miller bacterial culture E. coli",
  },
  {
    name: "Terrific Broth (TB Powder)",
    catNo: "LGF1203EF",
    category: "Culture Media",
    link: "/categories/culture-media",
    sku: "MG-MED-1203",
    pack: "500 g",
    shipping: "Ambient",
    tags: "terrific broth TB powder high yield plasmid expression",
  },

  // Cell Therapy
  {
    name: "MSC Osteogenic Differentiation Kit",
    catNo: "LTL0002",
    category: "Cell Therapy",
    link: "/categories/cell-therapy",
    sku: "MG-CT-0002",
    pack: "100 mL",
    shipping: "Cold-Chain",
    tags: "osteogenic differentiation stem cell bone mineralization",
  },
  {
    name: "Gentle Recombinant Digestive Enzyme for Stem Cells",
    catNo: "LNC1004",
    category: "Cell Therapy",
    link: "/categories/cell-therapy",
    sku: "MG-CT-1004",
    pack: "100 mL",
    shipping: "Cold-Chain",
    tags: "trypsin alternative recombinant dissociation enzyme stem cells",
  },

  // DNA/RNA Extraction
  {
    name: "MagDNA Viral DNA Purification Kit",
    catNo: "L2056",
    category: "DNA/RNA",
    link: "/categories/dna-rna-extraction",
    sku: "MG-EX-2056",
    pack: "50 preps",
    shipping: "Ambient",
    tags: "viral DNA purification magnetic beads swabs plasma",
  },
  {
    name: "MagRNA Viral RNA Extraction Kit",
    catNo: "L1051",
    category: "DNA/RNA",
    link: "/categories/dna-rna-extraction",
    sku: "MG-EX-1051",
    pack: "50 reactions",
    shipping: "Ambient",
    tags: "viral RNA extraction respiratory viruses KingFisher",
  },
  {
    name: "Transfection-Grade Plasmid Midiprep Kit (1 mg)",
    catNo: "L2004",
    category: "DNA/RNA",
    link: "/categories/dna-rna-extraction",
    sku: "MG-PL-2004",
    pack: "25 preps",
    shipping: "Ambient",
    tags: "plasmid midiprep endotoxin-free transfection grade 1mg",
  },
  {
    name: "Bulk Silica Superparamagnetic Beads",
    catNo: "LA-1003",
    category: "DNA/RNA",
    link: "/categories/dna-rna-extraction",
    sku: "MG-BULK-1003",
    pack: "50 mL",
    shipping: "Ambient",
    tags: "silica magnetic beads bulk OEM raw materials 1um",
  },

  // ELISA Kits
  {
    name: "Human Interleukin-6 (IL-6) ELISA Kit",
    catNo: "L-EL-H001",
    category: "ELISA",
    link: "/elisa-finder",
    sku: "L-EL-H001",
    pack: "96 tests",
    shipping: "Cold-Chain",
    tags: "IL-6 human interleukin 6 ELISA sandwich cytokine inflammation",
  },
  {
    name: "Human Tumor Necrosis Factor-alpha (TNF-alpha) ELISA Kit",
    catNo: "L-EL-H002",
    category: "ELISA",
    link: "/elisa-finder",
    sku: "L-EL-H002",
    pack: "96 tests",
    shipping: "Cold-Chain",
    tags: "TNF-alpha human tumor necrosis factor ELISA cytokine",
  },
  {
    name: "Human Vascular Endothelial Growth Factor (VEGF) ELISA Kit",
    catNo: "L-EL-H003",
    category: "ELISA",
    link: "/elisa-finder",
    sku: "L-EL-H003",
    pack: "96 tests",
    shipping: "Cold-Chain",
    tags: "VEGF human angiogenesis vascular endothelial ELISA",
  },
  {
    name: "Mouse Tumor Necrosis Factor-alpha (TNF-alpha) ELISA Kit",
    catNo: "L-EL-M001",
    category: "ELISA",
    link: "/elisa-finder",
    sku: "L-EL-M001",
    pack: "96 tests",
    shipping: "Cold-Chain",
    tags: "mouse TNF alpha ELISA rodent biomarker cytokine",
  },
  {
    name: "Rat Insulin-like Growth Factor 1 (IGF-1) ELISA Kit",
    catNo: "L-EL-R001",
    category: "ELISA",
    link: "/elisa-finder",
    sku: "L-EL-R001",
    pack: "96 tests",
    shipping: "Cold-Chain",
    tags: "rat IGF-1 ELISA growth factor rodent serum",
  },

  // Lab Essentials
  {
    name: "1X Phosphate Buffered Saline (PBS, pH 7.4)",
    catNo: "LPBS",
    category: "Lab Essentials",
    link: "/categories/lab-essentials",
    sku: "MG-BUF-PBS",
    pack: "1,000 mL",
    shipping: "Ambient",
    tags: "PBS phosphate buffered saline sterile buffer 1X",
  },
  {
    name: "50X TAE Running Buffer",
    catNo: "LTAE",
    category: "Lab Essentials",
    link: "/categories/lab-essentials",
    sku: "MG-BUF-TAE",
    pack: "1,000 mL",
    shipping: "Ambient",
    tags: "TAE buffer 50X agarose electrophoresis DNA running buffer",
  },
  {
    name: "100 bp DNA Ladder (Ready to Load)",
    catNo: "LG3365",
    category: "Lab Essentials",
    link: "/categories/lab-essentials",
    sku: "MG-LAD-100BP",
    pack: "100 lanes",
    shipping: "Cold-Chain",
    tags: "100bp DNA ladder molecular weight marker electrophoresis",
  },
  {
    name: "Prestained Protein Marker II (10 to 200 kDa)",
    catNo: "LG2058",
    category: "Lab Essentials",
    link: "/categories/lab-essentials",
    sku: "MG-LAD-PROT2",
    pack: "100 lanes",
    shipping: "Cold-Chain",
    tags: "prestained protein ladder marker western blot SDS-PAGE",
  },
];

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { addItem } = useCart();
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.trim().length > 0
    ? masterCatalog.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.catNo.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.tags && item.tags.toLowerCase().includes(q))
        );
      }).slice(0, 8) // Show top 8 hits
    : [];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim().length > 0) {
      if (results.length > 0) {
        router.push(results[0].link);
        setIsOpen(false);
      } else {
        router.push(`/elisa-finder?search=${encodeURIComponent(query)}`);
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-md">
      {/* Search Input Box */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search cfDNA, Exosomes, Media, Cat # (L2057, E103) or 13,000+ ELISA targets..."
          className="w-full text-base sm:text-xs py-2 pl-3.5 pr-20 border border-slate-200 rounded-lg focus:outline-none focus:border-accent bg-slate-50/70 focus:bg-white transition-all shadow-inner"
        />

        {query.length > 0 ? (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-14 top-2 text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
            title="Clear search"
          >
            ✕
          </button>
        ) : null}

        <span className="absolute right-2 top-2 text-[10px] font-mono font-bold bg-slate-200/80 text-slate-600 px-1.5 py-0.5 rounded pointer-events-none">
          13,276 SKUs
        </span>
      </div>

      {/* Autocomplete Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-elevated z-50 overflow-hidden text-xs max-h-[460px] flex flex-col">
          <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 flex justify-between items-center text-[11px] text-slate-500">
            <span>
              Found <strong>{results.length}</strong> matching products for &ldquo;{query}&rdquo;
            </span>
            <span className="font-mono text-[10px]">Press Enter or Esc</span>
          </div>

          <div className="overflow-y-auto divide-y divide-slate-100">
            {results.length === 0 ? (
              <div className="p-5 text-center text-slate-500">
                <p className="font-semibold text-slate-700">No direct SKU matches for &ldquo;{query}&rdquo;</p>
                <p className="text-[11px] mt-1">
                  Search across our 13,137 ELISA targets catalog:
                </p>
                <Link
                  href={`/elisa-finder`}
                  onClick={() => setIsOpen(false)}
                  className="mt-2.5 inline-block text-accent font-bold underline text-xs"
                >
                  Search 13,000+ ELISA Kits Portal &rarr;
                </Link>
              </div>
            ) : (
              results.map((item) => (
                <div
                  key={item.sku}
                  className="p-3 hover:bg-slate-50/90 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-mono text-[10px] font-bold text-[#0b1d33] bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                        Cat #{item.catNo}
                      </span>
                      <span className="font-mono text-[10px] text-accent bg-teal-50 px-1.5 py-0.2 rounded font-bold">
                        {item.category}
                      </span>
                    </div>
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="font-bold text-primary hover:text-accent truncate block text-xs"
                    >
                      {item.name}
                    </Link>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Pack: {item.pack} &bull;{" "}
                      <span className={item.shipping.includes("Cold") ? "text-cold font-semibold" : "text-slate-600"}>
                        {item.shipping}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        addItem({
                          sku: item.sku,
                          catNo: item.catNo,
                          name: item.name,
                          packSize: item.pack,
                          shipping: item.shipping,
                          quantity: 1,
                        });
                        setIsOpen(false);
                      }}
                      className="bg-accent hover:bg-accent-hover text-white text-[11px] font-bold py-1 px-2.5 rounded shadow-sm transition-colors whitespace-nowrap"
                    >
                      + Quote
                    </button>
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="text-slate-500 hover:text-primary text-[11px] font-bold p-1"
                    >
                      &rarr;
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center">
            <Link
              href="/elisa-finder"
              onClick={() => setIsOpen(false)}
              className="text-[11px] font-bold text-accent hover:text-accent-hover"
            >
              Browse complete 13,137 ELISA targets index &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
