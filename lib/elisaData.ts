export interface ElisaTarget {
  slug: string;
  name: string;
  target: string;
  species: string;
  catNo: string;
  sensitivity: string;
  detectionRange: string;
  sampleType: string;
  assayType: string;
  duration: string;
  description: string;
  significance: string;
}

export const TOP_ELISA_TARGETS: ElisaTarget[] = [
  {
    slug: "human-il-6",
    name: "Human IL-6 ELISA Kit (Interleukin-6)",
    target: "Interleukin-6 (IL-6)",
    species: "Human",
    catNo: "LB-EL-H-IL6",
    sensitivity: "1.5 pg/mL",
    detectionRange: "4.69 – 300 pg/mL",
    sampleType: "Serum, EDTA/Heparin Plasma, Cell Culture Supernatants",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours (Ambient / 37°C)",
    description: "High-sensitivity quantitative sandwich ELISA kit engineered for the precise measurement of human IL-6 in clinical research, immunology, and oncology investigations.",
    significance: "Crucial pro-inflammatory cytokine and primary biomarker for systemic inflammation, cytokine release syndrome (CRS), autoimmune pathologies, and metabolic dysfunction."
  },
  {
    slug: "human-tnf-alpha",
    name: "Human TNF-alpha ELISA Kit",
    target: "Tumor Necrosis Factor Alpha (TNF-α)",
    species: "Human",
    catNo: "LB-EL-H-TNFA",
    sensitivity: "3.2 pg/mL",
    detectionRange: "7.81 – 500 pg/mL",
    sampleType: "Serum, Plasma, Tissue Homogenates",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "Robust, high-affinity immunoassay for measuring human TNF-alpha across academic research, sepsis studies, and anti-inflammatory drug screening.",
    significance: "Master regulator of inflammation and apoptosis; key biomarker in rheumatoid arthritis, inflammatory bowel disease (IBD), and acute infectious responses."
  },
  {
    slug: "human-vegf",
    name: "Human VEGF-A ELISA Kit",
    target: "Vascular Endothelial Growth Factor A (VEGF-A)",
    species: "Human",
    catNo: "LB-EL-H-VEGF",
    sensitivity: "4.5 pg/mL",
    detectionRange: "15.6 – 1,000 pg/mL",
    sampleType: "Serum, Plasma, Cell Lysates",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~3 Hours",
    description: "Validated sandwich immunoassay for quantifying free circulating human VEGF-A in angiogenesis, diabetic retinopathy, and tumor microenvironment studies.",
    significance: "Primary driver of physiological and pathological angiogenesis; critical benchmark marker for anti-VEGF therapeutic monitoring in oncology and ophthalmology."
  },
  {
    slug: "human-bdnf",
    name: "Human BDNF ELISA Kit",
    target: "Brain-Derived Neurotrophic Factor (BDNF)",
    species: "Human",
    catNo: "LB-EL-H-BDNF",
    sensitivity: "12 pg/mL",
    detectionRange: "31.2 – 2,000 pg/mL",
    sampleType: "Serum, Platelet-Poor Plasma, CSF",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~3 Hours",
    description: "Highly specific ELISA kit designed for neurobiology and psychiatric research, accurately measuring mature human BDNF with minimal pro-BDNF cross-reactivity.",
    significance: "Essential neurotrophin supporting neuronal survival, synaptic plasticity, memory consolidation, and neurodegenerative disease progression (Alzheimer's and Parkinson's)."
  },
  {
    slug: "mouse-il-10",
    name: "Mouse IL-10 ELISA Kit",
    target: "Murine Interleukin-10 (IL-10)",
    species: "Mouse",
    catNo: "LB-EL-M-IL10",
    sensitivity: "5.1 pg/mL",
    detectionRange: "15.6 – 1,000 pg/mL",
    sampleType: "Mouse Serum, Plasma, Spleen Cell Culture",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "Sensitive murine cytokine immunoassay for pre-clinical academic drug models, autoimmune investigations, and infectious disease immunology.",
    significance: "Primary anti-inflammatory cytokine produced by Treg cells; essential for terminating inflammatory cascades in murine colitis, sepsis, and transplant rejection models."
  },
  {
    slug: "human-il-1-beta",
    name: "Human IL-1 beta ELISA Kit",
    target: "Interleukin-1 Beta (IL-1β)",
    species: "Human",
    catNo: "LB-EL-H-IL1B",
    sensitivity: "1.8 pg/mL",
    detectionRange: "3.91 – 250 pg/mL",
    sampleType: "Serum, Plasma, Synovial Fluid, Supernatants",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "High-precision immunoassay for quantifying human IL-1 beta release downstream of NLRP3 inflammasome activation.",
    significance: "Key mediator of autoinflammatory syndromes, pyroptotic cell death, arthritis pathogenesis, and cardiovascular plaque inflammation."
  },
  {
    slug: "human-caspase-3",
    name: "Human Caspase-3 ELISA Kit",
    target: "Caspase-3 (Active / Pro-form)",
    species: "Human",
    catNo: "LB-EL-H-CASP3",
    sensitivity: "0.15 ng/mL",
    detectionRange: "0.312 – 20 ng/mL",
    sampleType: "Cell Lysates, Tissue Homogenates",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "Quantitative determination of caspase-3 levels in apoptotic cell lysates, anticancer drug testing, and ischemic tissue damage models.",
    significance: "The primary executioner caspase responsible for proteolytic cleavage during programmed cell death (apoptosis)."
  },
  {
    slug: "human-cd44",
    name: "Human CD44 ELISA Kit",
    target: "CD44 Antigen / HCAM",
    species: "Human",
    catNo: "LB-EL-H-CD44",
    sensitivity: "0.08 ng/mL",
    detectionRange: "0.156 – 10 ng/mL",
    sampleType: "Serum, Plasma, Urine, Supernatants",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "Specific immunoassay for measuring soluble CD44 in cancer stem cell biology, metastasis research, and arthritis pathophysiology.",
    significance: "Major cell-surface receptor for hyaluronic acid; widely utilized marker for tumor-initiating cancer stem cells (CSCs) and metastatic dissemination."
  },
  {
    slug: "human-egfr",
    name: "Human EGFR ELISA Kit",
    target: "Epidermal Growth Factor Receptor (EGFR / ErbB1)",
    species: "Human",
    catNo: "LB-EL-H-EGFR",
    sensitivity: "15 pg/mL",
    detectionRange: "62.5 – 4,000 pg/mL",
    sampleType: "Serum, Plasma, Cell Lysates",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~3 Hours",
    description: "Quantitative measurement of extracellular EGFR domain in oncology, targeted tyrosine kinase inhibitor (TKI) research, and epithelial biology.",
    significance: "Transmembrane receptor tyrosine kinase heavily implicated in non-small cell lung cancer (NSCLC), glioblastoma, and colorectal malignancies."
  },
  {
    slug: "human-ferritin",
    name: "Human Ferritin ELISA Kit",
    target: "Ferritin (Heavy / Light Chain Complex)",
    species: "Human",
    catNo: "LB-EL-H-FER",
    sensitivity: "0.6 ng/mL",
    detectionRange: "1.56 – 100 ng/mL",
    sampleType: "Serum, Heparin Plasma",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2 Hours",
    description: "High-throughput immunoassay for measuring circulating human ferritin in iron metabolism, ferroptosis, and acute hyperinflammatory syndromes.",
    significance: "Universal marker for systemic iron reserves and an acute phase reactant elevated in macrophage activation syndrome (MAS) and severe infection."
  },
  {
    slug: "human-procalcitonin",
    name: "Human Procalcitonin (PCT) ELISA Kit",
    target: "Procalcitonin (PCT)",
    species: "Human",
    catNo: "LB-EL-H-PCT",
    sensitivity: "18 pg/mL",
    detectionRange: "31.25 – 2,000 pg/mL",
    sampleType: "Serum, EDTA Plasma",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2 Hours",
    description: "High-specificity immunoassay designed for sepsis research, bacterial infection biomarker monitoring, and critical care laboratory studies.",
    significance: "Gold standard diagnostic biomarker for differentiating severe systemic bacterial sepsis from viral infection."
  },
  {
    slug: "mouse-ifn-gamma",
    name: "Mouse IFN-gamma ELISA Kit",
    target: "Murine Interferon Gamma (IFN-γ)",
    species: "Mouse",
    catNo: "LB-EL-M-IFNG",
    sensitivity: "3.8 pg/mL",
    detectionRange: "7.81 – 500 pg/mL",
    sampleType: "Mouse Serum, Plasma, Supernatants",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "Highly cited murine IFN-gamma immunoassay for studying Th1 immune responses, intracellular pathogens, and tumor immunology models.",
    significance: "Key effector cytokine of cytotoxic CD8+ T cells and NK cells essential for antiviral defense and antitumor immunity in pre-clinical mouse models."
  },
  {
    slug: "human-mmp-9",
    name: "Human MMP-9 ELISA Kit",
    target: "Matrix Metallopeptidase 9 (MMP-9 / Gelatinase B)",
    species: "Human",
    catNo: "LB-EL-H-MMP9",
    sensitivity: "0.05 ng/mL",
    detectionRange: "0.156 – 10 ng/mL",
    sampleType: "Serum, Heparin Plasma, Synovial Fluid",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2.5 Hours",
    description: "Measurement of total human MMP-9 in extracellular matrix degradation, atherosclerosis, and tumor invasion studies.",
    significance: "Zinc-dependent endopeptidase critical for extracellular matrix remodeling, vascular aneurysms, and cancer cell extravasation."
  },
  {
    slug: "human-tgf-beta-1",
    name: "Human TGF-beta-1 ELISA Kit",
    target: "Transforming Growth Factor Beta 1 (TGF-β1)",
    species: "Human",
    catNo: "LB-EL-H-TGFB1",
    sensitivity: "8.2 pg/mL",
    detectionRange: "15.6 – 1,000 pg/mL",
    sampleType: "Acid-Activated Serum, Plasma, Supernatants",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~3 Hours",
    description: "Quantitative immunoassay measuring active human TGF-beta 1 following standard acid activation and neutralization protocols.",
    significance: "Potent pleiotropic cytokine governing immune tolerance, regulatory T cell induction, tissue fibrosis, and epithelial-to-mesenchymal transition (EMT)."
  },
  {
    slug: "human-insulin",
    name: "Human Insulin ELISA Kit",
    target: "Insulin",
    species: "Human",
    catNo: "LB-EL-H-INS",
    sensitivity: "0.18 mIU/L",
    detectionRange: "0.5 – 35 mIU/L",
    sampleType: "Serum, Plasma",
    assayType: "Quantitative Sandwich ELISA (Pre-coated 96 wells)",
    duration: "~2 Hours",
    description: "High-specificity insulin immunoassay with zero proinsulin cross-reactivity for metabolic syndrome, diabetic pathophysiology, and pancreatic islet studies.",
    significance: "Central endocrine hormone governing glucose homeostasis, lipid metabolism, and insulin resistance pathogenesis."
  }
];

export function getElisaBySlug(slug: string): ElisaTarget | undefined {
  return TOP_ELISA_TARGETS.find(t => t.slug === slug);
}
