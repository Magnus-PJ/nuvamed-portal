import type { Metadata } from "next";
import CultureMediaClient from "@/components/CultureMediaClient";

export const metadata: Metadata = {
  title: "NK Cell, CIK & GMP Stem Cell Culture Media | India Distributor | Nuvamed",
  description:
    "Serum-free NK Cell kits (LNC0102/4, 2000 mL), CIK expansion media, GMP MSC media, HEK293 lentivirus packaging media, and DMSO-free vitrified freezing media. HSN 3821 00 00 / 3822 00 90, 5% DSIR GST.",
  keywords: [
    "NK cell culture kit India",
    "serum free NK media price",
    "CIK cell culture kit",
    "GMP MSC medium India",
    "DMSO free freezing medium",
    "LNC0102",
    "HSN 38210000",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/categories/culture-media",
  },
  openGraph: {
    title: "NK Cell, CIK & GMP Stem Cell Culture Media | India Distribution Channel",
    description: "Serum-free and GMP-grade media for immune cell therapy expansion and stem cell derivation. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/culture-media",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nuvamed.co.in/categories/culture-media#category",
      name: "Specialized Cell Culture Media & Reagents",
      description: "Serum-free immune cell expansion media, MSC media, lentivirus packaging media, and cryopreservation solutions.",
      url: "https://www.nuvamed.co.in/categories/culture-media",
      provider: {
        "@type": "Organization",
        name: "Nuvamed Diagnostics LLP Limited",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.nuvamed.co.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Culture Media & Stem Cell Formulations",
          item: "https://www.nuvamed.co.in/categories/culture-media",
        },
      ],
    },
  ],
};

export default function CultureMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CultureMediaClient />
    </>
  );
}
