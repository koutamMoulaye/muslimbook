import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendBookEmail } from "@/lib/sendBookEmail";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-signature") ?? "";
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET ?? "";

    // Vérification de la signature
    const hmac = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (hmac !== signature) {
      console.error("Signature LemonSqueezy invalide");
      return NextResponse.json({ error: "Signature invalide" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const eventName = payload.meta?.event_name ?? "";

    console.log("LemonSqueezy event:", eventName);

    if (eventName !== "order_created") {
      return NextResponse.json({ message: "Événement ignoré" });
    }

    const order = payload.data?.attributes;
    const email: string = order?.user_email;
    const orderId: string = String(payload.data?.id ?? "lemonsqueezy");

    if (!email) {
      return NextResponse.json({ error: "Email introuvable" }, { status: 400 });
    }

    await sendBookEmail(email, orderId);

    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (err) {
    console.error("LemonSqueezy webhook error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
