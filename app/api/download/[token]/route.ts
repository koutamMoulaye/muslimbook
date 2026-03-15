import { NextRequest, NextResponse } from "next/server";
import { validateToken, markTokenUsed } from "@/lib/tokens";
import fs from "fs";
import path from "path";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  if (!token) {
    return new NextResponse("Token manquant", { status: 400 });
  }

  const entry = validateToken(token);

  if (!entry) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="fr">
      <head><meta charset="UTF-8"><title>Lien expiré</title>
      <style>body{font-family:Georgia,serif;background:#fdf6e3;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:20px;}
      .box{background:#fff;border-radius:16px;padding:40px;max-width:500px;box-shadow:0 8px 30px rgba(0,0,0,0.1);}
      h1{color:#c8a96e;} p{color:#4a4a4a;line-height:1.8;}
      a{color:#1a7a6e;font-weight:600;}</style></head>
      <body><div class="box">
      <div style="font-size:3rem">⏰</div>
      <h1>Lien expiré ou invalide</h1>
      <p>Ce lien de téléchargement n'est plus valide.<br/>
      Contactez-nous sur WhatsApp pour obtenir un nouveau lien.</p>
      <p><a href="https://wa.me/22606673333">💬 Contacter sur WhatsApp →</a></p>
      </div></body></html>
      `,
      { status: 410, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  const pdfPath = path.join(process.cwd(), "private", "ebook.pdf");

  if (!fs.existsSync(pdfPath)) {
    console.error("Fichier PDF introuvable:", pdfPath);
    return new NextResponse("Fichier non disponible. Contactez le support.", {
      status: 404,
    });
  }

  markTokenUsed(token);

  const pdfBuffer = fs.readFileSync(pdfPath);

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Comment-parler-a-Allah-pendant-les-epreuves.pdf"',
      "Content-Length": String(pdfBuffer.length),
      "Cache-Control": "no-store, no-cache",
    },
  });
}
