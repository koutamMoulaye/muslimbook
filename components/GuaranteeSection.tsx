const trustItems = [
  { icon: "🔒", label: "Paiement sécurisé", sub: "Transactions chiffrées" },
  { icon: "📩", label: "Livraison instantanée", sub: "Par email immédiatement" },
  { icon: "💯", label: "Garanti 7 jours", sub: "Remboursement sans question" },
];

export default function GuaranteeSection() {
  return (
    <section style={{ background: "#fdf6e3", padding: "72px 24px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Main guarantee card */}
        <div style={{
          background: "linear-gradient(135deg, #0f2d3d 0%, #1a4a5e 100%)",
          borderRadius: "24px",
          padding: "clamp(28px, 5vw, 48px) clamp(20px, 5vw, 40px)",
          textAlign: "center",
          boxShadow: "0 12px 50px rgba(15,45,61,0.3)",
          marginBottom: "32px",
        }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>💯</div>
          <h3 style={{ fontFamily: "Georgia, serif", color: "#f0c060", fontSize: "1.8rem", fontWeight: 800, margin: "0 0 14px" }}>
            Satisfait ou Remboursé
          </h3>
          <p style={{ color: "#c8dde6", lineHeight: 1.85, fontSize: "1rem", maxWidth: "480px", margin: "0 auto 20px" }}>
            Si ce livre ne vous apporte pas de valeur, contactez-nous dans les{" "}
            <strong style={{ color: "#f0c060" }}>7 jours suivant l&apos;achat</strong>{" "}
            pour un remboursement complet — sans question posée.
          </p>
          <a
            href="https://wa.me/22790905317"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#25D366",
              color: "white",
              borderRadius: "50px",
              padding: "12px 28px",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            }}
          >
            💬 Nous contacter sur WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(120px, 100%), 1fr))", gap: "16px" }}>
          {trustItems.map((item, i) => (
            <div key={i} style={{
              background: "white",
              border: "2px solid #e8d5a3",
              borderRadius: "16px",
              padding: "20px 16px",
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{item.icon}</div>
              <p style={{ color: "#0f2d3d", fontWeight: 700, fontSize: "0.85rem", margin: "0 0 4px" }}>{item.label}</p>
              <p style={{ color: "#9ca3af", fontSize: "0.75rem", margin: 0 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
