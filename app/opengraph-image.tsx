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
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap", import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
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
      }}
    >
      <div style={{ fontSize: "72px", marginBottom: "20px" }}>Graceful Harpist</div>
      <div style={{ fontSize: "36px", maxWidth: "80%" }}>
        Professional Harp Music for Weddings and Events in Austin, Texas
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse width and height.
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: await interSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  )
}

