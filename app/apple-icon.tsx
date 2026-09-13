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
          gap: 8,
        }}
      >
        <svg width="56" height="52" viewBox="4 0 42 40" fill="none">
          <rect
            x="11.86"
            y="15"
            width="10"
            height="10"
            rx="2"
            fill="#FAFAFA"
            transform="rotate(45 16.86 20)"
          />
          <path
            d="M20 4 L36 20 L20 36"
            fill="none"
            stroke="#FAFAFA"
            strokeWidth="10"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="8"
          />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 3,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.14em",
            lineHeight: 1,
          }}
        >
          <span>D</span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 18,
              width: 12,
            }}
          >
            <div style={{ height: 2, width: "100%", background: "#FAFAFA" }} />
            <div style={{ height: 2, width: "100%", background: "#FAFAFA" }} />
            <div style={{ height: 2, width: "100%", background: "#FAFAFA" }} />
          </div>
          <span>M</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
