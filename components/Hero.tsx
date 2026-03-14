"use client";

import BookMockup from "./BookMockup";

export default function Hero() {
  const scrollToPayment = () => {
    document.getElementById("paiement")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0b1f2e 0%, #0f2d3d 35%, #1a4a5e 65%, #1e6070 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(60px, 8vw, 80px) clamp(16px, 4vw, 24px) 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,169,110,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,122,110,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Dune silhouette at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%23fdf6e3' fill-opacity='1' d='M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,58.7C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'%3E%3C/path%3E%3C/svg%3E\") no-repeat bottom",
          backgroundSize: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Stars decoration */}
      {["10%,15%", "85%,8%", "5%,55%", "92%,42%", "55%,5%"].map((pos, i) => {
        const [l, t] = pos.split(",");
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: l,
              top: t,
              color: "rgba(200,169,110,0.5)",
              fontSize: i % 2 === 0 ? "1.2rem" : "0.8rem",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            ✦
          </div>
        );
      })}

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT — Text */}
          <div className="text-center md:text-left order-2 md:order-1">

            {/* Pill badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(200,169,110,0.15)",
                border: "1px solid rgba(200,169,110,0.4)",
                borderRadius: "50px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#c8a96e", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.5px" }}>
                📩 Livraison instantanée par email
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                color: "rgba(200,169,110,0.85)",
                fontSize: "0.8rem",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "14px",
              }}
            >
              Pour ceux qui souffrent en silence
            </p>

            {/* Main title */}
            <h1
              style={{
                fontFamily: "Georgia, serif",
                color: "#ffffff",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: "8px",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              Comment parler à{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f0c060, #c8a96e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Allah
              </span>
            </h1>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                color: "#e0e8f0",
                fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: "6px",
              }}
            >
              pendant les épreuves
            </h1>

            {/* Author */}
            <p
              style={{
                color: "rgba(200,210,220,0.75)",
                fontSize: "1rem",
                fontStyle: "italic",
                marginBottom: "32px",
              }}
            >
              — Nana Fatouma Koutam
            </p>

            {/* Price badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "14px 24px",
                marginBottom: "32px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>
                  Prix unique
                </div>
                <div style={{ color: "#f0c060", fontSize: "1.7rem", fontWeight: 800, lineHeight: 1 }}>
                  5 000 FCFA
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginTop: "2px" }}>
                  / 7,50€ Europe
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="items-center md:items-start" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <button
                onClick={scrollToPayment}
                style={{
                  background: "linear-gradient(135deg, #f0c060 0%, #c8a96e 100%)",
                  color: "#1a1a1a",
                  padding: "16px 40px",
                  borderRadius: "50px",
                  fontWeight: 800,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 6px 30px rgba(240,192,96,0.45)",
                  letterSpacing: "0.3px",
                  transition: "all 0.3s ease",
                  width: "100%",
                  maxWidth: "360px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 35px rgba(240,192,96,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 30px rgba(240,192,96,0.45)";
                }}
              >
                Obtenir le livre maintenant →
              </button>

              {/* Trust row */}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {[
                  { icon: "💯", label: "Satisfait ou remboursé" },
                  { icon: "🔒", label: "Paiement sécurisé" },
                ].map((item, i) => (
                  <span key={i} style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(200,210,220,0.65)", fontSize: "0.82rem" }}>
                    <span>{item.icon}</span> {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Book */}
          <div className="order-1 md:order-2 flex justify-center">
            <BookMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
