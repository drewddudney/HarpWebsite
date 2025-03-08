"use client"
import Script from "next/script"

export function DubsadoForm() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      {/* Load the iframe resizer script */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
        strategy="afterInteractive"
      />

      {/* The iframe for the Dubsado form */}
      <iframe
        src="https://hello.dubsado.com/public/form/view/62df59991edbd76373b7ac66"
        frameBorder="0"
        style={{ width: "1px", minWidth: "100%" }}
        title="Contact Form"
        className="min-h-[1000px] w-full"
      />

      {/* Script to initialize the iframe resizer */}
      <Script id="iframe-resizer-init" strategy="afterInteractive">
        {`
          setTimeout(function(){
            if (typeof iFrameResize === 'function') {
              iFrameResize({
                checkOrigin: false, 
                heightCalculationMethod: "taggedElement",
                scrolling: false
              });
            }
          }, 300);
        `}
      </Script>
    </div>
  )
}

