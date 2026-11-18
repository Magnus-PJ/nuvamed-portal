import type { Metadata } from "next";
import QuoteCartClient from "@/components/QuoteCartClient";

export const metadata: Metadata = {
  title: "Institutional Quote & Proforma Generator | Nuvamed",
  description:
    "Generate formal INR proforma quotes with HSN 3822 00 90, DSIR 5% GST split, and 4-hour SLA. Advance payment only or approved institutional PO.",
  keywords: [
    "institutional quote request life sciences India",
    "DSIR 5% GST proforma invoice",
    "HSN 38220090 quote",
    "GeM biomedical quotation",
    "Nuvamed Diagnostics RFQ",
  ],
  alternates: {
    canonical: "https://www.nuvamed.co.in/quote-cart",
  },
  openGraph: {
    title: "Institutional Quote & Proforma Generator | Nuvamed",
    description: "Official INR proforma quotes in 4 business hours for Indian academic, healthcare, and biopharma laboratories.",
    url: "https://www.nuvamed.co.in/quote-cart",
    type: "website",
    images: [
      {
        url: "https://www.nuvamed.co.in/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Institutional RFQ & Official Proforma Invoice Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Institutional Quote & Proforma Generator | Nuvamed",
    description: "Generate formal INR proforma quotes with HSN 3822 00 90 and DSIR 5% GST in 4 hours.",
    images: ["https://www.nuvamed.co.in/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
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
          name: "Institutional RFQ Portal",
          item: "https://www.nuvamed.co.in/quote-cart",
        },
      ],
    },
  ],
};

export default function QuoteCartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QuoteCartClient />
    </>
  );
}
