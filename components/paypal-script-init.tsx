"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function PayPalScriptInit() {
  const initPayPalButtons = () => {
    if (typeof window !== "undefined" && window.paypal) {
      const planIds = ["P-6E915052EG030082GM5G56LA", "P-5VK48173KT205742BM6RYWFA", "P-1KK140556F573134KM5G5WCQ"]

      planIds.forEach((planId) => {
        const container = document.getElementById(`paypal-button-container-${planId}`)
        if (container) {
          window.paypal
            .Buttons({
              style: {
                shape: "rect",
                color: "black",
                layout: "vertical",
                label: "paypal",
              },
              createSubscription: (data, actions) =>
                actions.subscription.create({
                  plan_id: planId,
                }),
              onApprove: (data) => {
                alert("Thank you for your subscription! Your Subscription ID is: " + data.subscriptionID)
              },
            })
            .render(`#paypal-button-container-${planId}`)
        }
      })
    }
  }

  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal) {
      initPayPalButtons()
    }
  }, [])

  return (
    <Script
      id="paypal-script"
      strategy="afterInteractive"
      src="https://www.paypal.com/sdk/js?client-id=AX_8QiXsmnhX9jBZoE-iwUiJo3ZG78HFTvfV7GVOhsVvMTleSF6-lbLgrsBQ9qbXqrsHizT1GghTC36f&vault=true&intent=subscription"
      onLoad={initPayPalButtons}
    />
  )
}
