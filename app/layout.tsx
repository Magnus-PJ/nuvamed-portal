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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
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
