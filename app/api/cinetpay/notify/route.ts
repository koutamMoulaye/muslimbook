import { NextRequest, NextResponse } from "next/server";
import { sendBookEmail } from "@/lib/sendBookEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("CinetPay notification:", body);

    const { cpm_trans_status, cpm_custom, cpm_trans_id } = body;

    if (cpm_trans_status !== "00") {
      return NextResponse.json({ message: "Paiement non confirmé" });
    }

    let email: string | undefined;
    try {
      const metadata = JSON.parse(cpm_custom ?? "{}");
      email = metadata.email;
    } catch {
      email = undefined;
    }

    if (!email) {
      console.error("Email introuvable dans metadata CinetPay");
      return NextResponse.json(
        { error: "Email introuvable" },
        { status: 400 }
      );
    }

    await sendBookEmail(email, cpm_trans_id ?? "cinetpay");

    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (err) {
    console.error("CinetPay notify error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok" });
}
