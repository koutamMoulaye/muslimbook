const cards = [
  {
    icon: "🌪️",
    text: "Tu traverses une épreuve et tu ne sais plus comment parler à Allah",
    bg: "#fff8ee",
    accent: "#c8a96e",
    iconBg: "#fdf0d5",
  },
  {
    icon: "💔",
    text: "Tu souffres en silence et tu te sens incompris",
    bg: "#f0faf8",
    accent: "#1a7a6e",
    iconBg: "#d9f0ec",
  },
  {
    icon: "🤲",
    text: "Tu doutes que ta voix atteigne encore les cieux",
    bg: "#fff8ee",
    accent: "#c8a96e",
    iconBg: "#fdf0d5",
  },
  {
    icon: "🕯️",
    text: "Tu veux retrouver la paix intérieure par la foi",
    bg: "#f0faf8",
    accent: "#1a7a6e",
    iconBg: "#d9f0ec",
  },
];

export default function ForWhoSection() {
  return (
    <section style={{ background: "#fdf6e3", padding: "80px 24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ color: "#c8a96e", fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>
            ✦ Ce livre est fait pour toi si...
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", color: "#0f2d3d", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, margin: "0 0 16px" }}>
            Est-ce que tu te reconnais ?
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <div style={{ height: "2px", width: "48px", background: "#c8a96e", borderRadius: "2px" }} />
            <span style={{ color: "#c8a96e" }}>✦</span>
            <div style={{ height: "2px", width: "48px", background: "#c8a96e", borderRadius: "2px" }} />
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px" }}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: card.bg,
                border: `2px solid ${card.accent}`,
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                boxShadow: `0 4px 20px ${card.accent}22`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{
                flexShrink: 0,
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: card.iconBg,
                border: `2px solid ${card.accent}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
              }}>
                {card.icon}
              </div>
              <p style={{ fontFamily: "Georgia, serif", color: "#1a1a1a", lineHeight: 1.75, fontSize: "1rem", fontWeight: 600, margin: 0 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div
          style={{
            marginTop: "48px",
            borderRadius: "20px",
            padding: "clamp(24px, 5vw, 36px) clamp(20px, 5vw, 40px)",
            textAlign: "center",
            background: "linear-gradient(135deg, #0f2d3d 0%, #1a4a5e 100%)",
            boxShadow: "0 8px 40px rgba(15,45,61,0.25)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🌙</div>
          <p style={{ fontFamily: "Georgia, serif", color: "#e8f5f3", lineHeight: 1.9, fontSize: "1.1rem", fontStyle: "italic", margin: 0 }}>
            &ldquo;Tu n&apos;as pas besoin d&apos;être un savant pour parler à Allah,
            <br />
            mais d&apos;être{" "}
            <span style={{ color: "#f0c060", fontWeight: 700, fontStyle: "normal" }}>vrai</span>,
            {" "}d&apos;être{" "}
            <span style={{ color: "#f0c060", fontWeight: 700, fontStyle: "normal" }}>toi-même</span>,
            {" "}tout simplement.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
