import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import ForWhoSection from "@/components/ForWhoSection";
import ChapterList from "@/components/ChapterList";
import PaymentSection from "@/components/PaymentSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <ForWhoSection />
      <ChapterList />
      <PaymentSection />
      <GuaranteeSection />

      {/* Footer */}
      <footer
        className="py-8 px-4 text-center text-sm"
        style={{ background: "#1a7a6e", color: "rgba(255,255,255,0.7)" }}
      >
        <p className="mb-2">
          <span className="font-semibold text-white">Comment parler à Allah pendant les épreuves</span>
          {" "}— Nana Fatouma Koutam
        </p>
        <p className="text-xs">
          Contact :{" "}
          <a
            href="https://wa.me/22790905317"
            className="text-yellow-300 hover:underline"
          >
            WhatsApp +227 90 90 53 17
          </a>
        </p>
      </footer>

      <StickyMobileCTA />
    </main>
  );
}
