import { ImageResponse } from "next/og";

export const alt = "DEMA | Digital Enterprise Management Association";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A3A5C",
          color: "#FAFAFA",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            background: "#DF3D2C",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          D
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}>
            DEMA
          </div>
          <div style={{ fontSize: 28, fontWeight: 300, maxWidth: 800 }}>
            Digital Enterprise Management Association at UTM
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
