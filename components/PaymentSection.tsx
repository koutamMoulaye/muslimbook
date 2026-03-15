"use client";

import { useState } from "react";
import Image from "next/image";

const contactRows = [
  {
    label: "Wave",
    number: "+226 06 67 33 33",
    logo: "/wave-logo.png",
    logoBg: "#1A6BFF",
    logoW: 52,
    logoH: 22,
  },
  {
    label: "Orange Money",
    number: "+226 06 67 33 33",
    logo: "/orangemoney-logo.svg",
    logoBg: "transparent",
    logoW: 60,
    logoH: 22,
  },
  {
    label: "Nita",
    number: "+226 06 67 33 33",
    logo: "/nita-logo.svg",
    logoBg: "transparent",
    logoW: 48,
    logoH: 22,
  },
  {
    label: "Zeyna",
    number: "+226 06 67 33 33",
    logo: "/zeyna-logo.svg",
    logoBg: "transparent",
    logoW: 52,
    logoH: 22,
  },
];

/* Badge "version suivante" réutilisable */
function ComingSoonBadge() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #fef3c7, #fde68a)",
      border: "1.5px solid #f59e0b",
      borderRadius: "12px",
      padding: "10px 14px",
      display: "flex",
      alignItems: "flex-start",
      gap: "8px",
      marginTop: "4px",
    }}>
      <span style={{ fontSize: "1rem", flexShrink: 0 }}>🚧</span>
      <p style={{ margin: 0, fontSize: "0.78rem", color: "#92400e", lineHeight: 1.6 }}>
        <strong>Bientôt disponible</strong> — Ce mode de paiement sera actif dans la prochaine version.{" "}
        <span style={{ fontWeight: 700 }}>En attendant, utilise le virement manuel</span> (colonne à droite) — c&apos;est rapide et sécurisé.
      </p>
    </div>
  );
}

export default function PaymentSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCinetPay = async () => {
    if (!email || !email.includes("@")) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/cinetpay/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        setError(data.error ?? "Erreur lors de l'initialisation du paiement.");
      }
    } catch {
      setError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const lemonSqueezyUrl = process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL ?? "#";

  return (
    <section
      id="paiement"
      style={{ background: "linear-gradient(170deg, #0f2d3d 0%, #1a4a5e 100%)", padding: "80px clamp(12px, 4vw, 24px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ color: "#f0c060", fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>
            ✦ Commander
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", color: "#ffffff", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, margin: "0 0 12px" }}>
            Choisis ton mode de paiement
          </h2>
          <p style={{ color: "rgba(200,220,230,0.7)", fontSize: "0.95rem" }}>
            🔒 Paiement sécurisé &nbsp;•&nbsp; 📩 Livraison instantanée par email &nbsp;•&nbsp; 💬 Envoi WhatsApp après paiement manuel
          </p>
        </div>

        {/* 3 Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>

          {/* ── BLOC A : LemonSqueezy ── EN PREMIER */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            opacity: 0.85,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ background: "#3b5bdb", color: "white", fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", borderRadius: "50px", letterSpacing: "0.5px" }}>
                🌍 Europe & International
              </span>
              <span style={{ background: "#fef3c7", color: "#92400e", fontSize: "0.68rem", fontWeight: 700, padding: "3px 10px", borderRadius: "50px", border: "1px solid #f59e0b" }}>
                🚧 Version suivante
              </span>
            </div>

            <div>
              <h3 style={{ fontFamily: "Georgia, serif", color: "#0f2d3d", fontSize: "1.3rem", fontWeight: 800, margin: "0 0 4px" }}>
                Carte bancaire
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: 0 }}>
                Visa · Mastercard · Apple Pay · Google Pay
              </p>
            </div>

            <div style={{ background: "#f0f4ff", border: "2px dashed #3b5bdb", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
              <span style={{ color: "#3b5bdb", fontWeight: 800, fontSize: "1.6rem" }}>7,50 €</span>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["VISA", "Mastercard", "Apple Pay", "Google Pay"].map((logo) => (
                <span key={logo} style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "4px 10px", fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af" }}>
                  {logo}
                </span>
              ))}
            </div>

            <ComingSoonBadge />

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                display: "block",
                background: "#d1d5db",
                color: "#9ca3af",
                borderRadius: "50px",
                padding: "14px 20px",
                fontSize: "0.9rem",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none",
                cursor: "not-allowed",
                marginTop: "auto",
              }}
            >
              Disponible prochainement →
            </a>
          </div>

          {/* ── BLOC B : Virement Manuel ── RECOMMANDÉ AFRIQUE */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 12px 50px rgba(26,122,110,0.3)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            border: "2px solid #1a7a6e",
            position: "relative",
          }}>
            {/* Badge recommandé */}
            <div style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #f0c060, #c8a96e)",
              color: "#1a1a1a",
              fontSize: "0.72rem",
              fontWeight: 800,
              padding: "4px 18px",
              borderRadius: "50px",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 10px rgba(200,169,110,0.5)",
              letterSpacing: "0.5px",
            }}>
              ⭐ MÉTHODE RECOMMANDÉE
            </div>

            <div style={{ marginTop: "8px" }}>
              <span style={{ background: "#1a7a6e", color: "white", fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", borderRadius: "50px", letterSpacing: "0.5px" }}>
                🌍 Afrique de l&apos;Ouest
              </span>
            </div>

            <div>
              <h3 style={{ fontFamily: "Georgia, serif", color: "#0f2d3d", fontSize: "1.3rem", fontWeight: 800, margin: "0 0 4px" }}>
                Virement Manuel
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: 0 }}>
                Wave · Orange Money · Nita · Zeyna
              </p>
            </div>

            {/* Contact rows avec logos */}
            <div style={{ background: "#fffbf0", border: "1px solid #e8d5a3", borderRadius: "12px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {contactRows.map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
                  <div style={{
                    borderRadius: "6px",
                    overflow: "hidden",
                    background: row.logoBg !== "transparent" ? row.logoBg : undefined,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}>
                    <Image
                      src={row.logo}
                      alt={row.label}
                      width={row.logoW}
                      height={row.logoH}
                      style={{ display: "block", objectFit: "contain" }}
                    />
                  </div>
                  <span style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.85rem)", fontWeight: 800, color: "#1a7a6e", whiteSpace: "nowrap" }}>
                    {row.number}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div style={{ background: "#fdf0d5", borderRadius: "10px", padding: "12px 14px", fontSize: "0.8rem", color: "#6b5a3e", lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 3px", fontWeight: 700 }}>Comment procéder :</p>
              <p style={{ margin: 0 }}>1. Virer le montant exact (5 000 FCFA)</p>
              <p style={{ margin: 0 }}>2. Envoyer le reçu en photo sur WhatsApp</p>
              <p style={{ margin: 0 }}>3. Recevoir le livre par <strong>email ou WhatsApp</strong> sous 24h</p>
            </div>

            <a
              href="https://wa.me/22606673333"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#25D366",
                color: "white",
                borderRadius: "50px",
                padding: "14px 20px",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
                marginTop: "auto",
              }}
            >
              💬 Envoyer le reçu sur WhatsApp →
            </a>
          </div>

          {/* ── BLOC B : CinetPay ── */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            opacity: 0.85,
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ background: "#1a7a6e", color: "white", fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", borderRadius: "50px", letterSpacing: "0.5px" }}>
                🌍 Afrique de l&apos;Ouest
              </span>
              <span style={{ background: "#fef3c7", color: "#92400e", fontSize: "0.68rem", fontWeight: 700, padding: "3px 10px", borderRadius: "50px", border: "1px solid #f59e0b" }}>
                🚧 Version suivante
              </span>
            </div>

            <div>
              <h3 style={{ fontFamily: "Georgia, serif", color: "#0f2d3d", fontSize: "1.3rem", fontWeight: 800, margin: "0 0 4px" }}>
                Mobile Money
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: 0 }}>
                Orange Money · Wave · MTN · Moov
              </p>
            </div>

            <div style={{ background: "#f0faf5", border: "2px dashed #1a7a6e", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
              <span style={{ color: "#1a7a6e", fontWeight: 800, fontSize: "1.6rem" }}>5 000 FCFA</span>
            </div>

            <ComingSoonBadge />

            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#9ca3af", marginBottom: "6px" }}>
                Votre adresse email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                disabled
                style={{
                  width: "100%",
                  border: "2px solid #e5e7eb",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#9ca3af",
                  background: "#f9fafb",
                  cursor: "not-allowed",
                }}
              />
            </div>

            {error && <p style={{ color: "#ef4444", fontSize: "0.8rem", margin: 0 }}>{error}</p>}

            <button
              onClick={handleCinetPay}
              disabled
              style={{
                background: "#d1d5db",
                color: "#9ca3af",
                border: "none",
                borderRadius: "50px",
                padding: "14px 20px",
                fontSize: "0.9rem",
                fontWeight: 700,
                cursor: "not-allowed",
                marginTop: "auto",
              }}
            >
              {loading ? "Chargement..." : "Disponible prochainement →"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
