import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Graceful Harpist - Professional Harp Music in Austin, Texas"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background: "linear-gradient(to bottom, #d4b98c, #c0a678)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
        textAlign: "center",
        fontFamily: "serif",
      }}
    >
      <div style={{ fontSize: "72px", marginBottom: "20px", fontWeight: "bold" }}>Graceful Harpist</div>
      <div style={{ fontSize: "36px", maxWidth: "80%" }}>
        Professional Harp Music for Weddings and Events in Austin, Texas
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}

