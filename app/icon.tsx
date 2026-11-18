import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#091729",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2dd4bf",
          borderRadius: 6,
          fontWeight: 900,
          border: "1.5px solid #0d9488",
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    }
  );
}
