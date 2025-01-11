'use client'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

import { useEffect } from 'react'

interface AdSenseProps {
  adClient: string
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
}

export function AdSense({ adClient, adSlot, adFormat = 'auto', fullWidthResponsive = true }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  )
}
