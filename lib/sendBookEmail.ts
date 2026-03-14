import { getResend } from "./resend";
import { createDownloadToken } from "./tokens";

export async function sendBookEmail(email: string, orderId: string) {
  const token = createDownloadToken(email, orderId);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const downloadUrl = `${baseUrl}/api/download/${token}`;

  const { data, error } = await getResend().emails.send({
    from: process.env.EMAIL_FROM ?? "onboarding@resend.dev",
    to: email,
    subject:
      "📖 Voici votre livre – Comment parler à Allah pendant les épreuves",
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Votre livre est prêt</title>
</head>
<body style="margin:0;padding:0;background:#fdf6e3;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#fdf6e3;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.1);max-width:100%;">
          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a7a6e,#145f55);padding:40px 32px;text-align:center;">
              <div style="font-size:3rem;margin-bottom:8px;">🌙</div>
              <h1 style="color:#fff;margin:0;font-size:1.6rem;font-weight:700;line-height:1.4;">
                Comment parler à Allah<br/>pendant les épreuves
              </h1>
              <p style="color:#c8e6e3;margin:8px 0 0;font-size:1rem;">
                Nana Fatouma Koutam
              </p>
            </td>
          </tr>
          <!-- BODY -->
          <tr>
            <td style="padding:40px 32px;">
              <p style="font-size:1.1rem;color:#2d2d2d;line-height:1.8;margin:0 0 20px;">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p style="font-size:1.05rem;color:#2d2d2d;line-height:1.8;margin:0 0 16px;">
                Assalamu alaykum wa rahmatullahi wa barakatuhu,
              </p>
              <p style="font-size:1rem;color:#4a4a4a;line-height:1.8;margin:0 0 20px;">
                Alhamdulillah, votre commande a été confirmée avec succès. Votre livre est prêt à être téléchargé.
                Qu'Allah vous accorde une lecture bénie et que ce livre soit une lumière dans vos épreuves.
              </p>

              <!-- CTA BUTTON -->
              <div style="text-align:center;margin:32px 0;">
                <a href="${downloadUrl}"
                   style="background:linear-gradient(135deg,#1a7a6e,#145f55);color:#fff;padding:18px 40px;border-radius:50px;font-size:1.1rem;font-weight:700;text-decoration:none;display:inline-block;box-shadow:0 4px 15px rgba(26,122,110,0.4);">
                  📥 Télécharger mon livre
                </a>
              </div>

              <div style="background:#fdf0d5;border-left:4px solid #c8a96e;border-radius:8px;padding:20px;margin:24px 0;">
                <p style="margin:0;font-size:0.9rem;color:#6b5a3e;line-height:1.6;">
                  ⚠️ <strong>Important :</strong> Ce lien de téléchargement est valable <strong>48 heures</strong>.
                  Passé ce délai, contactez-nous sur WhatsApp.
                </p>
              </div>

              <!-- MESSAGE AUTEURE -->
              <div style="border-top:1px solid #e8d5a3;padding-top:24px;margin-top:24px;">
                <p style="font-size:0.95rem;color:#4a4a4a;line-height:1.8;font-style:italic;">
                  "Tu n'as pas besoin d'être un savant pour parler à Allah, mais d'être vrai, d'être toi-même,
                  tout simplement. Car Allah entend tout, voit tout, peu importe ce que tu t'évertues à lui cacher."
                </p>
                <p style="font-size:0.9rem;color:#1a7a6e;font-weight:600;margin:8px 0 0;">
                  — Nana Fatouma Koutam
                </p>
              </div>

              <!-- WHATSAPP HELP -->
              <div style="text-align:center;margin-top:32px;padding:20px;background:#f0f9f8;border-radius:12px;">
                <p style="margin:0 0 12px;font-size:0.9rem;color:#4a4a4a;">
                  Un problème avec votre téléchargement ?
                </p>
                <a href="https://wa.me/22790905317"
                   style="background:#25D366;color:#fff;padding:12px 24px;border-radius:50px;font-size:0.9rem;font-weight:600;text-decoration:none;display:inline-block;">
                  💬 Contacter sur WhatsApp
                </a>
              </div>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td style="background:#f5e6c8;padding:20px 32px;text-align:center;">
              <p style="margin:0;font-size:0.8rem;color:#8a7a5a;line-height:1.6;">
                Jazakum Allahu khayran de votre confiance.<br/>
                <a href="https://wa.me/22790905317" style="color:#1a7a6e;text-decoration:none;">+227 90 90 53 17</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  });

  if (error) {
    console.error("Erreur envoi email:", error);
    throw new Error(`Échec envoi email: ${error.message}`);
  }

  return data;
}
