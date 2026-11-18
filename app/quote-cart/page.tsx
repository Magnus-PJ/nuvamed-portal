import type { Metadata } from "next";
import QuoteCartClient from "@/components/QuoteCartClient";

export const metadata: Metadata = {
  title: "Institutional RFQ & Official Proforma Invoice Generator | Nuvamed Diagnostics",
  description:
    "Generate official formal INR proforma quotes with HSN Code 3822 00 90, DSIR 5% Concessional GST calculation, 4-hour turnaround SLA, and lot-matched COA. Nuvamed Diagnostics LLP Limited.",
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
    title: "Institutional RFQ & Official Proforma Invoice Generator | Nuvamed Diagnostics",
    description: "Official INR proforma quotes in 4 business hours for Indian academic, healthcare, and biopharma laboratories.",
    url: "https://www.nuvamed.co.in/quote-cart",
    type: "website",
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
