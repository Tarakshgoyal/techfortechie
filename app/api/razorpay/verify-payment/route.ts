import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json();

    // Create signature to verify
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest("hex");

    // Verify signature
    if (razorpay_signature === expectedSign) {
      return NextResponse.json(
        {
          success: true,
          message: "Payment verified successfully",
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid signature",
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to verify payment",
      },
      { status: 500 }
    );
  }
}
