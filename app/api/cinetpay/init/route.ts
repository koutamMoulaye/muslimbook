import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const transactionId = `TXN-${uuidv4().replace(/-/g, "").slice(0, 16).toUpperCase()}`;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const payload = {
      apikey: process.env.CINETPAY_API_KEY,
      site_id: process.env.CINETPAY_SITE_ID,
      transaction_id: transactionId,
      amount: 5000,
      currency: "XOF",
      description: "Comment parler à Allah pendant les épreuves – Ebook",
      customer_email: email,
      notify_url: `${baseUrl}/api/cinetpay/notify`,
      return_url: `${baseUrl}?payment=success`,
      channels: "ALL",
      metadata: JSON.stringify({ email }),
    };

    const response = await fetch(
      "https://api-checkout.cinetpay.com/v2/payment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.code !== "201") {
      return NextResponse.json(
        { error: data.message ?? "Erreur CinetPay" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      paymentUrl: data.data.payment_url,
      transactionId,
    });
  } catch (err) {
    console.error("CinetPay init error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
