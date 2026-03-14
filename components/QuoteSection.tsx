export default function QuoteSection() {
  return (
    <section style={{ background: "linear-gradient(135deg, #1a7a6e 0%, #145f55 100%)" }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-yellow-300/60" />
          <span className="text-yellow-300 text-2xl">🌙</span>
          <div className="h-px w-16 bg-yellow-300/60" />
        </div>

        {/* Opening quote */}
        <div
          style={{ color: "#c8a96e", fontSize: "5rem", lineHeight: 1, fontFamily: "Georgia, serif" }}
          className="mb-2 leading-none"
        >
          "
        </div>

        <blockquote
          style={{ fontFamily: "Georgia, serif", color: "#e8f5f3" }}
          className="text-xl md:text-2xl leading-relaxed font-light italic"
        >
          Il est des douleurs que les mots ne permettent plus d&apos;apaiser.
          <br className="hidden md:block" />
          Des drames que les larmes ne suffisent plus à soulager.
          <br className="hidden md:block" />
          <span
            className="font-semibold not-italic"
            style={{ color: "#f0c060", display: "block", marginTop: "12px", fontSize: "1.1em" }}
          >
            Ce livre est une main tendue à ceux qui n&apos;osent plus parler à Dieu.
          </span>
        </blockquote>

        {/* Closing quote */}
        <div
          style={{ color: "#c8a96e", fontSize: "5rem", lineHeight: 1, fontFamily: "Georgia, serif" }}
          className="mt-2 leading-none"
        >
          "
        </div>

        <p style={{ color: "rgba(232,245,243,0.55)" }} className="text-sm mt-6 italic">
          — Extrait de la préface
        </p>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-16 bg-yellow-300/60" />
          <span className="text-yellow-300/60 text-sm">✦</span>
          <div className="h-px w-16 bg-yellow-300/60" />
        </div>
      </div>
    </section>
  );
}
