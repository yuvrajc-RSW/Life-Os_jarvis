"use client";
import Link from "next/link";
import { useState } from "react";

export default function OnboardingWelcomePage() {
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [notifs, setNotifs] = useState(true);

  const next = () => setStep(s => Math.min(s + 1, 4));
  const back = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Progress dots */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: i === step ? 24 : 8, height: 8, borderRadius: 99, background: i === step ? "#2563EB" : i < step ? "#6366F1" : "#E5E7EB", transition: "all 0.3s" }} />
        ))}
      </div>

      <div style={{ width: "100%", maxWidth: 480, background: "#fff", borderRadius: 24, border: "1.5px solid #E5E7EB", boxShadow: "0 4px 32px rgba(37,99,235,0.09)", padding: "40px 36px" }}>

        {/* Step 0 — Jarvis intro */}
        {step === 0 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 80, height: 80, borderRadius: 24, background: "linear-gradient(135deg,#2563EB,#6366F1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 24px" }}>🤖</div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 12 }}>Hi 👋 Main Jarvis hoon.</h1>
            <div style={{ background: "#EEF2FF", borderRadius: 14, padding: "16px 18px", marginBottom: 24, textAlign: "left" }}>
              <p style={{ fontSize: 14, color: "#4F46E5", lineHeight: 1.7, margin: 0 }}>
                Main aapki daily life ko thoda easy banane ke liye hoon.<br /><br />
                Expenses, reminders, ya future planning — jab chaho pooch sakte ho.<br /><br />
                <strong>Main aapka assistant hoon — boss nahi. 🙂</strong>
              </p>
            </div>
            <button onClick={next} style={{ width: "100%", background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", fontWeight: 700, fontSize: 15, padding: 14, borderRadius: 12, border: "none", cursor: "pointer" }}>
              Shuru karte hain →
            </button>
          </div>
        )}

        {/* Step 1 — User type */}
        {step === 1 && (
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Aap primarily kaun hain?</h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>Jarvis aapke liye personalize ho jaega 🙂</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {[
                { id: "individual", emoji: "🧑", title: "Individual", sub: "Sirf apne liye track karna hai" },
                { id: "family_head", emoji: "👨‍👩‍👧", title: "Family Head", sub: "Apni family ka kharcha manage karna hai" },
                { id: "couple", emoji: "💑", title: "Couple", sub: "Partner ke saath milke plan karna hai" },
              ].map(t => (
                <button key={t.id} onClick={() => setUserType(t.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: userType === t.id ? "#EEF2FF" : "#F9FAFB", border: `1.5px solid ${userType === t.id ? "#6366F1" : "#E5E7EB"}`, borderRadius: 12, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 22 }}>{t.emoji}</span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: "#111827", margin: "0 0 2px" }}>{t.title}</p>
                    <p style={{ fontSize: 12, color: "#6B7280", margin: 0 }}>{t.sub}</p>
                  </div>
                  {userType === t.id && <span style={{ marginLeft: "auto", color: "#6366F1" }}>✓</span>}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={back} style={{ flex: 1, background: "#F9FAFB", color: "#6B7280", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>← Wapas</button>
              <button onClick={next} disabled={!userType} style={{ flex: 2, background: userType ? "linear-gradient(135deg,#2563EB,#6366F1)" : "#F3F4F6", color: userType ? "#fff" : "#9CA3AF", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: userType ? "pointer" : "not-allowed" }}>Aage →</button>
            </div>
          </div>
        )}

        {/* Step 2 — Name */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Aapka naam kya hai?</h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>Jarvis aapko isi naam se janega 🙂</p>
            <input id="onboarding-name" value={name} onChange={e => setName(e.target.value)} placeholder="Jaise: Rahul, Priya..." autoFocus
              style={{ width: "100%", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "12px 16px", fontSize: 15, color: "#111827", outline: "none", boxSizing: "border-box", marginBottom: 24 }}
              onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#E5E7EB")} />
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={back} style={{ flex: 1, background: "#F9FAFB", color: "#6B7280", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>← Wapas</button>
              <button onClick={next} disabled={!name.trim()} style={{ flex: 2, background: name.trim() ? "linear-gradient(135deg,#2563EB,#6366F1)" : "#F3F4F6", color: name.trim() ? "#fff" : "#9CA3AF", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: name.trim() ? "pointer" : "not-allowed" }}>Aage →</button>
            </div>
          </div>
        )}

        {/* Step 3 — Income */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Monthly income range?</h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>Sirf planning ke liye — koi data share nahi hoga 🔒</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {["Under ₹30,000", "₹30,000 – ₹60,000", "₹60,000 – ₹1,00,000", "₹1,00,000+", "Batana nahi chahta"].map(r => (
                <button key={r} onClick={() => setIncome(r)} style={{ padding: "12px 16px", textAlign: "left", fontSize: 14, background: income === r ? "#EEF2FF" : "#F9FAFB", border: `1.5px solid ${income === r ? "#6366F1" : "#E5E7EB"}`, borderRadius: 10, cursor: "pointer", color: income === r ? "#4F46E5" : "#374151", fontWeight: income === r ? 600 : 400 }}>
                  {income === r ? "✓ " : ""}{r}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={back} style={{ flex: 1, background: "#F9FAFB", color: "#6B7280", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>← Wapas</button>
              <button onClick={next} disabled={!income} style={{ flex: 2, background: income ? "linear-gradient(135deg,#2563EB,#6366F1)" : "#F3F4F6", color: income ? "#fff" : "#9CA3AF", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: income ? "pointer" : "not-allowed" }}>Aage →</button>
            </div>
          </div>
        )}

        {/* Step 4 — Permissions + finish */}
        {step === 4 && (
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Notifications chahiye?</h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>Jarvis sirf tab notify karega jab zaroori ho — over-notify nahi karega 🙂</p>
            <div style={{ background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 14, padding: "4px 16px", marginBottom: 24 }}>
              {["Weekly spending summary", "Reminder alerts", "Jarvis AI suggestions", "Monthly insights"].map(label => (
                <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #F3F4F6" }}>
                  <span style={{ fontSize: 14, color: "#374151" }}>{label}</span>
                  <div onClick={() => setNotifs(v => !v)} style={{ width: 40, height: 22, borderRadius: 99, background: notifs ? "#2563EB" : "#E5E7EB", cursor: "pointer", display: "flex", alignItems: "center", padding: "0 2px", transition: "background 0.2s" }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", transform: notifs ? "translateX(18px)" : "translateX(0)", transition: "transform 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={back} style={{ flex: 1, background: "#F9FAFB", color: "#6B7280", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>← Wapas</button>
              <Link href="/dashboard" id="onboarding-finish-btn" style={{ flex: 2, background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Dashboard kholein ✅
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
