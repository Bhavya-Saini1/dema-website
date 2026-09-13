import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#DF3D2C",
          color: "#FAFAFA",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "0.08em",
        }}
      >
        DEMA
      </div>
    ),
    { ...size },
  );
}
