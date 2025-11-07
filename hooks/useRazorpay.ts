"use client";

import { useCallback } from "react";

interface RazorpayOptions {
  amount: number;
  currency?: string;
  courseId: string;
  courseTitle: string;
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const useRazorpay = () => {
  const loadRazorpayScript = useCallback(() => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const initializePayment = useCallback(
    async ({ amount, currency = "INR", courseId, courseTitle, onSuccess, onFailure }: RazorpayOptions) => {
      try {
        // Load Razorpay script
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          throw new Error("Failed to load Razorpay SDK");
        }

        // Create order on backend
        const orderResponse = await fetch("/api/razorpay/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            currency,
            courseId,
            courseTitle,
          }),
        });

        const orderData = await orderResponse.json();

        if (!orderData.success) {
          throw new Error(orderData.message || "Failed to create order");
        }

        // Configure Razorpay options
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "TechForTechie",
          description: `Enrollment for ${courseTitle}`,
          order_id: orderData.orderId,
          handler: async function (response: any) {
            try {
              // Verify payment on backend
              const verifyResponse = await fetch("/api/razorpay/verify-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const verifyData = await verifyResponse.json();

              if (verifyData.success) {
                onSuccess?.(verifyData);
              } else {
                onFailure?.(new Error(verifyData.message || "Payment verification failed"));
              }
            } catch (error) {
              onFailure?.(error);
            }
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#3b82f6",
          },
          modal: {
            ondismiss: function () {
              onFailure?.(new Error("Payment cancelled by user"));
            },
          },
        };

        // Open Razorpay checkout
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        onFailure?.(error);
      }
    },
    [loadRazorpayScript]
  );

  return { initializePayment };
};
