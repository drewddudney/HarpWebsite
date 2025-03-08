interface Window {
  iFrameResize: (
    options: {
      checkOrigin: boolean
      heightCalculationMethod: string
      warningTimeout?: number
      log?: boolean
      scrolling?: boolean
      sizeWidth?: boolean
      autoResize?: boolean
      minHeight?: number
      onResized?: (data: { height: number }) => void
    },
    target?: HTMLIFrameElement,
  ) => void
}

