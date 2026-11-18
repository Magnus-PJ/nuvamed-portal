import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteDrawer from "@/components/QuoteDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nuvamed Diagnostics | Luminous BioSciences India Channel | cfDNA, Exosome & Mycoplasma Kits",
  description:
    "Direct authorized supply channel by Nuvamed Diagnostics LLP Limited for US-manufactured Luminous BioSciences products in India. MagDNA cfDNA kits, exosome isolation reagents, universal mycoplasma qPCR, and 13,000+ ELISA kits. Delivery across India with lot COA, HSN 3822 00 90, and DSIR 5% GST.",
  keywords: [
    "Nuvamed Diagnostics",
    "Nuvamed Diagnostics LLP Limited",
    "cfDNA extraction kit India",
    "exosome isolation kit price",
    "mycoplasma qPCR detection kit",
    "HSN 38220090",
    "DSIR 5% GST",
    "Luminous BioSciences distributor India",
  ],
  metadataBase: new URL("https://www.nuvamed.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nuvamed Diagnostics | Luminous BioSciences India Reagents & Kits",
    description: "US-manufactured kits delivered across India in 2–3 weeks by Nuvamed Diagnostics LLP Limited. Official GST proforma invoices in 4 hours.",
    url: "https://www.nuvamed.co.in",
    siteName: "Nuvamed Diagnostics LLP Limited",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvamed Diagnostics | Luminous BioSciences India Reagents & Kits",
    description: "Authorized India supply channel by Nuvamed Diagnostics LLP Limited for US-manufactured cfDNA, exosome, and mycoplasma testing kits.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nuvamed.co.in/#organization",
      name: "Nuvamed Diagnostics LLP Limited",
      url: "https://www.nuvamed.co.in",
      email: "nuvameddx@gmail.com",
      description:
        "Direct authorized India distribution channel for US-manufactured Luminous BioSciences products, cfDNA extraction kits, exosome isolation tools, and mycoplasma qPCR assays.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nuvamed.co.in/#website",
      url: "https://www.nuvamed.co.in",
      name: "Nuvamed Diagnostics",
      publisher: {
        "@id": "https://www.nuvamed.co.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.nuvamed.co.in/elisa-finder?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <QuoteDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
