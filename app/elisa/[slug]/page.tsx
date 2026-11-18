import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOP_ELISA_TARGETS, getElisaBySlug } from "@/lib/elisaData";
import ElisaProductClient from "@/components/ElisaProductClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOP_ELISA_TARGETS.map((target) => ({
    slug: target.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const target = getElisaBySlug(slug);

  if (!target) {
    return {
      title: "ELISA Kit Not Found | Nuvamed Diagnostics",
    };
  }

  const title = `${target.target} ELISA Kit (${target.species}) | India | Nuvamed`;
  const description = `Pre-coated 96-test ${target.name} with ${target.sensitivity} sensitivity. HSN 3822 00 90, DSIR 5% GST. Official 4-hour INR proforma from Nuvamed.`;

  return {
    title: title.substring(0, 60),
    description: description.substring(0, 160),
    keywords: [
      `${target.target} ELISA kit price India`,
      `${target.name}`,
      `Luminous BioSciences ${target.catNo}`,
      `${target.species} ${target.target} immunoassay`,
      "HSN 38220090",
      "DSIR 5% GST",
    ],
    alternates: {
      canonical: `https://www.nuvamed.co.in/elisa/${slug}`,
    },
    openGraph: {
      title: title.substring(0, 60),
      description: description.substring(0, 160),
      url: `https://www.nuvamed.co.in/elisa/${slug}`,
      type: "website",
      images: [
        {
          url: "https://www.nuvamed.co.in/opengraph-image",
          width: 1200,
          height: 630,
          alt: target.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title.substring(0, 60),
      description: description.substring(0, 160),
      images: ["https://www.nuvamed.co.in/opengraph-image"],
    },
  };
}

export default async function ElisaProductPage({ params }: Props) {
  const { slug } = await params;
  const target = getElisaBySlug(slug);

  if (!target) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://www.nuvamed.co.in/elisa/${slug}#product`,
        name: target.name,
        image: "https://www.nuvamed.co.in/opengraph-image",
        description: target.description,
        sku: target.catNo,
        mpn: target.catNo,
        brand: {
          "@type": "Brand",
          name: "Luminous BioSciences",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "18500",
          price: "18500",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Nuvamed Diagnostics LLP Limited",
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 7,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
          },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "INR",
            },
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: "IN",
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 1,
                maxValue: 2,
                unitCode: "DAY",
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 2,
                maxValue: 4,
                unitCode: "DAY",
              },
            },
          },
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
            name: "ELISA Finder",
            item: "https://www.nuvamed.co.in/elisa-finder",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: target.name,
            item: `https://www.nuvamed.co.in/elisa/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ElisaProductClient target={target} />
    </>
  );
}
