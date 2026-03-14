"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPayment = () => {
    document.getElementById("paiement")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="sticky-cta md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500 leading-none mb-0.5">📖 Comment parler à Allah</p>
          <p className="font-bold text-sm" style={{ color: "#1a7a6e" }}>5 000 FCFA / 7,50€</p>
        </div>
        <button
          onClick={scrollToPayment}
          className="btn-primary flex-shrink-0"
          style={{ fontSize: "0.85rem", padding: "10px 18px" }}
        >
          Obtenir maintenant →
        </button>
      </div>
    </div>
  );
}
