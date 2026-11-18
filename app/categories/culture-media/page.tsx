import type { Metadata } from "next";
import CultureMediaClient from "@/components/CultureMediaClient";

export const metadata: Metadata = {
  title: "NK Cell, CIK & Stem Cell Culture Media | India | Nuvamed",
  description:
    "Serum-free NK Cell expansion kits (2000 mL), CIK media, and GMP mesenchymal stem cell reagents. HSN 3822 00 90. Request official 4-hour INR proforma.",
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
    title: "NK Cell, CIK & Stem Cell Culture Media | India | Nuvamed",
    description: "Serum-free and GMP-grade media for immune cell therapy expansion and stem cell derivation. Authorized distribution by Nuvamed Diagnostics LLP Limited.",
    url: "https://www.nuvamed.co.in/categories/culture-media",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NK Cell, CIK & GMP Stem Cell Culture Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NK Cell, CIK & Stem Cell Culture Media | India | Nuvamed",
    description: "Serum-free NK cell expansion media and GMP stem cell reagents in India. HSN 3822 00 90.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
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
