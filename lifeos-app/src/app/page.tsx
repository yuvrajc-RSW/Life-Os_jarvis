"use client";

import Link from "next/link";

/* ─── inline SVG icons ─────────────────────────────────── */
const IconBrain = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

/* ─── data ─────────────────────────────────────────────── */
const features = [
  {
    icon: <IconBrain />,
    title: "Jarvis AI — Aapka Personal Assistant",
    body: "Calm aur helpful. Jarvis sirf suggest karta hai — command nahi deta. Hinglish mein baat karta hai, jaise ek dost.",
    accent: "#2563EB",
    bg: "#DBEAFE",
  },
  {
    icon: <IconChart />,
    title: "Smart Predictions & Insights",
    body: "6 months ke data se future spending forecast karta hai. Solid line = actual, dotted = prediction. Always transparent.",
    accent: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    icon: <IconUsers />,
    title: "Family Dashboard",
    body: "Poori family ka ek hi view. Medical, grocery, travel — sab ek jagah. Parents ke liye separate tracking.",
    accent: "#2563EB",
    bg: "#DBEAFE",
  },
  {
    icon: <IconBell />,
    title: "Smart Reminders",
    body: "\"Mujhe rent yaad dilana har month\" — bas itna bolo. Jarvis set kar deta hai without any forms.",
    accent: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    icon: <IconShield />,
    title: "Non-Judgmental by Design",
    body: "Koi shame nahi, koi lecture nahi. Aapki financial life aapki hai. Jarvis bas data dikhata hai, judge nahi karta.",
    accent: "#2563EB",
    bg: "#DBEAFE",
  },
];

const testimonials = [
  { name: "Priya S.", text: "Pehli baar ek AI assistant laga jo boss nahi banta.", stars: 5 },
  { name: "Rohit M.", text: "Hinglish mein baat karna bahut natural lagta hai.", stars: 5 },
  { name: "Ananya K.", text: "Family dashboard ne sab kuch easy kar diya.", stars: 5 },
];

/* ─── component ────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F9FAFB", fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* ── Navbar ── */}
      <nav style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "linear-gradient(135deg, #2563EB 0%, #6366F1 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>LO</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 17, color: "#111827", letterSpacing: "-0.3px" }}>
              LifeOS <span style={{ color: "#6366F1" }}>+ Jarvis</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Link href="/pricing" style={{ color: "#6B7280", fontSize: 14, fontWeight: 500, padding: "8px 14px", borderRadius: 8, textDecoration: "none" }}>
              Pricing
            </Link>
            <Link href="/about" style={{ color: "#6B7280", fontSize: 14, fontWeight: 500, padding: "8px 14px", borderRadius: 8, textDecoration: "none" }}>
              About
            </Link>
            <Link href="/(auth)/login" style={{ color: "#2563EB", fontSize: 14, fontWeight: 600, padding: "8px 14px", borderRadius: 8, textDecoration: "none" }}>
              Login
            </Link>
            <Link href="/(auth)/signup" style={{
              background: "linear-gradient(135deg, #2563EB 0%, #6366F1 100%)",
              color: "#fff", fontSize: 14, fontWeight: 600,
              padding: "9px 20px", borderRadius: 10, textDecoration: "none",
              boxShadow: "0 2px 8px rgba(37,99,235,0.25)",
              transition: "box-shadow 0.2s",
            }}>
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ padding: "96px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Soft gradient blobs */}
        <div style={{
          position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 500,
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: 80, left: "10%",
          width: 300, height: 300,
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#EEF2FF", borderRadius: 100, padding: "6px 16px",
            marginBottom: 28,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366F1", display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#6366F1" }}>
              AI-Powered Personal &amp; Family Dashboard
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700,
            color: "#111827", lineHeight: 1.15, marginBottom: 24,
            letterSpacing: "-1.5px",
          }}>
            Aapki Life ka{" "}
            <span style={{
              background: "linear-gradient(135deg, #2563EB 0%, #6366F1 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              Calm AI Assistant
            </span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.7, marginBottom: 40, maxWidth: 580, margin: "0 auto 40px" }}>
            Jarvis aapki daily life ko easy banata hai — expenses track karo, predictions dekho,
            family manage karo. <strong style={{ color: "#111827" }}>Hinglish mein. Bina lecture ke.</strong>
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/onboarding/welcome" style={{
              background: "linear-gradient(135deg, #2563EB 0%, #6366F1 100%)",
              color: "#fff", fontWeight: 700, fontSize: 16,
              padding: "14px 32px", borderRadius: 12, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,99,235,0.30)",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Shuru karo — Free hai
              <span style={{ fontSize: 18 }}>→</span>
            </Link>
            <Link href="/about" style={{
              background: "#fff", color: "#374151", fontWeight: 600, fontSize: 16,
              padding: "14px 32px", borderRadius: 12, textDecoration: "none",
              border: "1.5px solid #E5E7EB",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Jarvis se milein 👋
            </Link>
          </div>

          {/* Trust note */}
          <p style={{ fontSize: 13, color: "#9CA3AF", marginTop: 24 }}>
            No credit card required · India-first · Hinglish UI
          </p>
        </div>
      </section>

      {/* ── Jarvis Chat Preview Card ── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{
          maxWidth: 480, margin: "0 auto",
          background: "#fff", borderRadius: 20,
          boxShadow: "0 8px 40px rgba(37,99,235,0.10), 0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid #E5E7EB",
          overflow: "hidden",
        }}>
          {/* Chat header */}
          <div style={{
            background: "linear-gradient(135deg, #2563EB 0%, #6366F1 100%)",
            padding: "16px 20px", display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>🤖</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Jarvis</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>Aapka AI assistant</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>Online</span>
            </div>
          </div>

          {/* Messages */}
          <div style={{ padding: "20px 20px 8px", display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Jarvis greeting */}
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>🤖</div>
              <div>
                <div style={{ background: "#F3F4F6", borderRadius: "14px 14px 14px 4px", padding: "10px 14px", fontSize: 14, color: "#111827", lineHeight: 1.5, maxWidth: 280 }}>
                  Hi 👋 Main Jarvis hoon.<br />
                  Main aapki daily life ko thoda easy banane ke liye hoon.
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 4, marginLeft: 4 }}>Just now</div>
              </div>
            </div>

            {/* User message */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <div style={{ background: "#2563EB", color: "#fff", borderRadius: "14px 14px 4px 14px", padding: "10px 14px", fontSize: 14, lineHeight: 1.5 }}>
                  Is month problem kya hai?
                </div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginTop: 4, textAlign: "right", marginRight: 4 }}>Just now</div>
              </div>
            </div>

            {/* Jarvis response */}
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>🤖</div>
              <div>
                <div style={{ background: "#F3F4F6", borderRadius: "14px 14px 14px 4px", padding: "10px 14px", fontSize: 14, color: "#111827", lineHeight: 1.5, maxWidth: 280 }}>
                  Food aur travel me pichle 3 months se zyada spend hua hai.<br />
                  <span style={{ color: "#6B7280", fontSize: 13 }}>Agar chaho, main exact breakdown dikha sakta hoon.</span>
                </div>
                {/* Action buttons */}
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <button style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                    Show breakdown
                  </button>
                  <button style={{ background: "transparent", color: "#6B7280", border: "1px solid #E5E7EB", borderRadius: 8, padding: "7px 14px", fontSize: 13, cursor: "pointer" }}>
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div style={{ padding: "12px 16px 16px", borderTop: "1px solid #F3F4F6", display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ flex: 1, background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "9px 14px", fontSize: 13, color: "#9CA3AF" }}>
              Jarvis se poochho...
            </div>
            <button style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #2563EB, #6366F1)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
              ↑
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "#9CA3AF", marginTop: 16 }}>
          ☝️ Ye sirf preview hai — real Jarvis aapke data pe kaam karta hai
        </p>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "64px 24px", background: "#fff", borderTop: "1px solid #F3F4F6" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#111827", letterSpacing: "-0.8px", marginBottom: 14 }}>
              Sab kuch ek jagah
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 460, margin: "0 auto" }}>
              LifeOS ek calm, intelligent dashboard hai — designed for real Indian families.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{
                background: "#fff", borderRadius: 16, padding: 28,
                border: "1.5px solid #E5E7EB",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(37,99,235,0.10)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: f.bg, color: f.accent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#111827", marginBottom: 10, lineHeight: 1.4 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.65 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: "64px 24px", background: "#F9FAFB" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 700, color: "#111827", marginBottom: 40, letterSpacing: "-0.5px" }}>
            Log kya keh rahe hain
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                background: "#fff", borderRadius: 16, padding: 24,
                border: "1.5px solid #E5E7EB",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: "#F59E0B" }}><IconStar /></span>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.6, marginBottom: 16 }}>&ldquo;{t.text}&rdquo;</p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#6B7280" }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        margin: "0 24px 80px",
        borderRadius: 24,
        background: "linear-gradient(135deg, #2563EB 0%, #6366F1 100%)",
        padding: "64px 40px",
        textAlign: "center",
        maxWidth: 1152, marginLeft: "auto", marginRight: "auto",
        boxShadow: "0 8px 40px rgba(37,99,235,0.25)",
      }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.8px", marginBottom: 16 }}>
          Jarvis se aaj hi milein 👋
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.80)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
          Free mein shuru karo. Koi credit card nahi. Sirf ek calm AI assistant jo aapki help karta hai.
        </p>
        <Link href="/onboarding/welcome" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#fff", color: "#2563EB",
          fontWeight: 700, fontSize: 16,
          padding: "14px 36px", borderRadius: 12, textDecoration: "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}>
          Shuru karo — Free hai →
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid #E5E7EB", padding: "32px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #2563EB, #6366F1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 11 }}>LO</span>
            </div>
            <span style={{ fontWeight: 700, color: "#374151", fontSize: 14 }}>LifeOS + Jarvis</span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy", "Terms", "Contact", "About"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}>
                {l}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#9CA3AF" }}>© 2026 LifeOS. Made with ❤️ in India.</p>
        </div>
      </footer>
    </div>
  );
}
