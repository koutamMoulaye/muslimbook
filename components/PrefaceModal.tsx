"use client";

interface PrefaceModalProps {
  onClose: () => void;
}

export default function PrefaceModal({ onClose }: PrefaceModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
          style={{ fontSize: "1.2rem" }}
          aria-label="Fermer"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
            style={{ background: "linear-gradient(135deg, #1a7a6e, #145f55)" }}>
            <span className="text-white text-xl">🌙</span>
          </div>
          <h2
            style={{ fontFamily: "Georgia, serif", color: "#1a7a6e" }}
            className="text-xl font-bold"
          >
            Extrait de la préface
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-px w-10" style={{ background: "#c8a96e" }} />
            <span style={{ color: "#c8a96e", fontSize: "0.7rem" }}>✦</span>
            <div className="h-px w-10" style={{ background: "#c8a96e" }} />
          </div>
        </div>

        {/* Preface text */}
        <div
          className="rounded-xl p-6 mb-6"
          style={{ background: "#fdf0d5", borderLeft: "4px solid #c8a96e" }}
        >
          <div style={{ color: "#c8a96e", fontSize: "2.5rem", lineHeight: 1, fontFamily: "Georgia, serif" }}>"</div>
          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#3d3020",
              lineHeight: 2,
              fontSize: "0.95rem",
            }}
            className="italic"
          >
            Il est des douleurs que les mots ne permettent plus d&apos;apaiser.
            Des drames que les larmes ne suffisent plus à soulager. Des
            nuits où l&apos;on parle à Dieu sans voix, sans force, sans savoir si
            l&apos;on sera entendu. De tous ces constats, ce livre est né. Dans
            ces creux de l&apos;âme où la foi ne s&apos;éteint pas, mais vacille. Dans
            ces tempêtes intérieures que la vie t&apos;impose, sans prévenir.
            Dans ce besoin d&apos;Allah, pas forcément parce qu&apos;on est pieux,
            mais parce qu&apos;on est brisé.
          </p>
          <br />
          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#3d3020",
              lineHeight: 2,
              fontSize: "0.95rem",
            }}
            className="italic"
          >
            Ce livre est une main tendue à ceux qui n&apos;osent plus parler à Dieu
            parce qu&apos;ils ont trop pleuré, faute d&apos;avoir trouvé des réponses
            à leurs interrogations. Tu n&apos;as pas besoin d&apos;être un savant pour
            parler à Allah, mais d&apos;être vrai, d&apos;être toi-même, tout simplement.
            Car Allah entend tout, voit tout, peu importe ce que tu t&apos;évertues à
            lui cacher.
          </p>
          <br />
          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#3d3020",
              lineHeight: 2,
              fontSize: "0.95rem",
            }}
            className="italic"
          >
            Page après page, tu découvriras comment transformer tes larmes en
            invocations, ta peur en confiance, ton désespoir en force inébranlable.
            <br />
            <span style={{ color: "#1a7a6e", fontWeight: 600, fontStyle: "normal" }}>
              À toi qui souffres, ce livre est pour toi.
            </span>
          </p>
          <div style={{ color: "#c8a96e", fontSize: "2.5rem", lineHeight: 1, fontFamily: "Georgia, serif", textAlign: "right" }}>"</div>
        </div>

        {/* Author */}
        <p className="text-center text-sm mb-6" style={{ color: "#1a7a6e", fontWeight: 600 }}>
          — Nana Fatouma Koutam
        </p>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {
              onClose();
              setTimeout(() => {
                document.getElementById("paiement")?.scrollIntoView({ behavior: "smooth" });
              }, 200);
            }}
            className="btn-primary"
          >
            Obtenir le livre maintenant →
          </button>
        </div>
      </div>
    </div>
  );
}
