"use client";

import { useState } from "react";
import PrefaceModal from "./PrefaceModal";

const chapters = [
  { num: 1, title: "Comprendre le sens des épreuves", page: 10 },
  { num: 2, title: "Comment parler à Allah dans la douleur", page: 17 },
  { num: 3, title: "Parler à Allah quand on a honte", page: 25 },
  { num: 4, title: "Parler à Allah à travers différents actes d'adoration", page: 34 },
  { num: 5, title: "Les erreurs à éviter pendant l'épreuve", page: 44 },
  { num: 6, title: "Les signes qu'Allah t'écoute", page: 51 },
  { num: 7, title: "La patience active : agir sans perdre la foi", page: 57 },
  { num: 8, title: "Le tawakul : confier son âme au Meilleur des planificateurs", page: 64 },
  { num: 9, title: "L'histoire d'Amina, la femme stérile", page: 70 },
  { num: 10, title: "La lettre cachée à Allah", page: 78 },
];

export default function ChapterList() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section style={{ background: "#ffffff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#c8a96e", fontSize: "0.75rem", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>
            ✦ Sommaire
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", color: "#0f2d3d", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, margin: "0 0 16px" }}>
            Ce que tu vas découvrir
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ height: "2px", width: "48px", background: "#c8a96e", borderRadius: "2px" }} />
            <span style={{ color: "#c8a96e" }}>✦</span>
            <div style={{ height: "2px", width: "48px", background: "#c8a96e", borderRadius: "2px" }} />
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            10 chapitres pour transformer tes épreuves en élévation spirituelle
          </p>
        </div>

        {/* Chapter list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {chapters.map((chapter, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                background: i % 2 === 0 ? "#fdf6e3" : "#f0faf8",
                border: `1.5px solid ${i % 2 === 0 ? "#e8d5a3" : "#b7e4d0"}`,
                borderRadius: "14px",
                padding: "14px 18px",
              }}
            >
              {/* Number */}
              <div style={{
                flexShrink: 0,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c8a96e, #a8893e)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 2px 8px rgba(200,169,110,0.4)",
              }}>
                {chapter.num}
              </div>

              {/* Title */}
              <p style={{ fontFamily: "Georgia, serif", color: "#1a1a1a", flex: 1, lineHeight: 1.5, fontWeight: 600, fontSize: "0.97rem", margin: 0 }}>
                {chapter.title}
              </p>

              {/* Page badge */}
              <span style={{
                flexShrink: 0,
                background: "rgba(200,169,110,0.18)",
                color: "#a8893e",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: "50px",
                whiteSpace: "nowrap",
              }}>
                P.{chapter.page}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: "linear-gradient(135deg, #c8a96e, #a8893e)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "14px 32px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(200,169,110,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            📖 Lire un extrait gratuit
          </button>
        </div>
      </div>

      {showModal && <PrefaceModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
