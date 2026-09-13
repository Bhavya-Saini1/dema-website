import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#DF3D2C",
        }}
      >
        <svg width="22" height="20" viewBox="4 0 42 40" fill="none">
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
      </div>
    ),
    { ...size },
  );
}
