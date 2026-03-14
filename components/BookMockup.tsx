"use client";

import Image from "next/image";

export default function BookMockup() {
  return (
    <div className="flex justify-center items-center py-4" style={{ position: "relative" }}>
      {/* Halo doré animé */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(160px, 32vw, 210px)",
          height: "24px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(200,169,110,0.55) 0%, transparent 70%)",
          animation: "glowPulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          perspective: "900px",
          width: "clamp(200px, 40vw, 260px)",
          height: "clamp(285px, 57vw, 370px)",
        }}
      >
        <div
          className="book-float"
          style={{
            width: "clamp(200px, 40vw, 260px)",
            height: "clamp(285px, 57vw, 370px)",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
            (e.currentTarget as HTMLDivElement).style.transform = "rotateY(-6deg) rotateX(1deg) translateY(-4px)";
            (e.currentTarget as HTMLDivElement).style.filter = "drop-shadow(20px 28px 36px rgba(0,0,0,0.5))";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
            (e.currentTarget as HTMLDivElement).style.transform = "";
            (e.currentTarget as HTMLDivElement).style.filter = "";
          }}
        >
          {/* Front cover — real image */}
          <div
            style={{
              position: "absolute",
              width: "clamp(200px, 40vw, 260px)",
              height: "clamp(285px, 57vw, 370px)",
              borderRadius: "3px 10px 10px 3px",
              overflow: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/cover.png"
              alt="Comment parler à Allah pendant les épreuves – Nana Fatouma Koutam"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="260px"
            />
          </div>

          {/* Book spine */}
          <div
            style={{
              position: "absolute",
              width: "24px",
              height: "clamp(285px, 57vw, 370px)",
              background:
                "linear-gradient(180deg, #1a6b7a 0%, #145f6e 50%, #0e4f5c 100%)",
              left: "-24px",
              top: 0,
              transform: "rotateY(90deg)",
              transformOrigin: "right center",
              borderRadius: "3px 0 0 3px",
            }}
          />

          {/* Subtle shine overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "3px 10px 10px 3px",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
