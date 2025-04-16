'use client'

import { useEffect } from 'react'

interface PayPalButtonsProps {
  planId: string
}

export default function PayPalButtons({ planId }: PayPalButtonsProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.paypal) {
      window.paypal
        .Buttons({
          style: {
            shape: 'rect',
            color: 'black',
            layout: 'vertical',
            label: 'paypal',
          },
          createSubscription: (data: any, actions: any) =>
            actions.subscription.create({
              plan_id: planId,
            }),
          onApprove: (data: any) => {
            alert('Thank you for your subscription! Your Subscription ID is: ' + data.subscriptionID)
          },
        })
        .render(`#paypal-button-container-${planId}`)
    }
  }, [planId])

  return (
    <div
      id={`paypal-button-container-${planId}`}
      className="paypal-button-container mt-6 w-full min-h-[150px]"
      data-plan-id={planId}
    ></div>
  )
}