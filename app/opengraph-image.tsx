import { ImageResponse } from "next/og";

export const alt = "Nuvamed Diagnostics - Authorized India Supply Channel for Luminous BioSciences USA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #091729, #0d223a, #143152)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "14px",
              background: "#0d9488",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "28px",
            }}
          >
            ND
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "white" }}>
              Nuvamed Diagnostics LLP Limited
            </div>
            <div style={{ fontSize: "16px", color: "#2dd4bf", letterSpacing: "1px", textTransform: "uppercase" }}>
              Authorized India Supply Channel · Luminous BioSciences USA
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "900px" }}>
          <div style={{ fontSize: "48px", fontWeight: 900, lineHeight: 1.15, color: "#ffffff" }}>
            US-Manufactured cfDNA, Exosome & Mycoplasma Testing Kits
          </div>
          <div style={{ fontSize: "22px", color: "#cbd5e1", lineHeight: 1.4 }}>
            Direct supply for Indian biomedical research institutes, central genomics facilities, and biopharma QC labs.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex", gap: "30px" }}>
            <span>📦 HSN: 3822 00 90</span>
            <span>⚡ 4-Hour Proforma SLA</span>
            <span>📍 Logistics Hub: Kochi, Kerala</span>
          </div>
          <div style={{ color: "#2dd4bf", fontWeight: 700 }}>www.nuvamed.co.in</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
