"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function PayPalScriptInit() {
  useEffect(() => {
    // This code will run on the client side after the component mounts
    if (typeof window !== "undefined" && window.paypal) {
      // First button
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "black",
            layout: "vertical",
            label: "paypal",
          },
          createSubscription: (data: any, actions: any) =>
            actions.subscription.create({
              plan_id: "P-6E915052EG030082GM5G56LA",
            }),
          onApprove: (data: any) => {
            alert("Thank you for your subscription! Your Subscription ID is: " + data.subscriptionID)
          },
        })
        .render("#paypal-button-container-P-6E915052EG030082GM5G56LA")

      // Second button
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "black",
            layout: "vertical",
            label: "paypal",
          },
          createSubscription: (data: any, actions: any) =>
            actions.subscription.create({
              plan_id: "P-5VK48173KT205742BM6RYWFA",
            }),
          onApprove: (data: any) => {
            alert("Thank you for your subscription! Your Subscription ID is: " + data.subscriptionID)
          },
        })
        .render("#paypal-button-container-P-5VK48173KT205742BM6RYWFA")

      // Third button
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "black",
            layout: "vertical",
            label: "paypal",
          },
          createSubscription: (data: any, actions: any) =>
            actions.subscription.create({
              plan_id: "P-1KK140556F573134KM5G5WCQ",
            }),
          onApprove: (data: any) => {
            alert("Thank you for your subscription! Your Subscription ID is: " + data.subscriptionID)
          },
        })
        .render("#paypal-button-container-P-1KK140556F573134KM5G5WCQ")
    }
  }, [])

  return (
    <Script
      id="paypal-script"
      strategy="afterInteractive"
      src="https://www.paypal.com/sdk/js?client-id=AX_8QiXsmnhX9jBZoE-iwUiJo3ZG78HFTvfV7GVOhsVvMTleSF6-lbLgrsBQ9qbXqrsHizT1GghTC36f&vault=true&intent=subscription"
    />
  )
}
