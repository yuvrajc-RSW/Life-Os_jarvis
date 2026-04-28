"use client";

import Link from "next/link";
import { useState } from "react";

const steps = ["Account", "Profile", "Done"];

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
    setError("");
  }

  function next(e: React.FormEvent) {
    e.preventDefault();
    if (step === 0) {
      if (!form.email || !form.password) { setError("Email aur password zaroori hai."); return; }
      if (form.password.length < 8) { setError("Password kam se kam 8 characters ka hona chahiye."); return; }
      setStep(1);
    } else if (step === 1) {
      if (!form.name.trim()) { setError("Apna naam daalo."); return; }
      setLoading(true);
      setTimeout(() => { setStep(2); setLoading(false); }, 1000);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36, textDecoration: "none" }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2563EB,#6366F1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>LO</span>
        </div>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#111827", letterSpacing: "-0.3px" }}>
          LifeOS <span style={{ color: "#6366F1" }}>+ Jarvis</span>
        </span>
      </Link>

      {/* Card */}
      <div style={{ width: "100%", maxWidth: 440, background: "#fff", borderRadius: 20, border: "1.5px solid #E5E7EB", boxShadow: "0 4px 24px rgba(37,99,235,0.08)", padding: "40px 36px" }}>

        {/* Step indicator */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 32 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: i <= step ? "linear-gradient(135deg,#2563EB,#6366F1)" : "#F3F4F6",
                color: i <= step ? "#fff" : "#9CA3AF",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, flexShrink: 0,
                transition: "background 0.3s",
              }}>
                {i < step ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: 12, color: i <= step ? "#2563EB" : "#9CA3AF", fontWeight: i === step ? 600 : 400, marginLeft: 6 }}>{s}</span>
              {i < steps.length - 1 && <div style={{ width: 32, height: 1, background: i < step ? "#2563EB" : "#E5E7EB", margin: "0 8px", flexShrink: 0 }} />}
            </div>
          ))}
        </div>

        {/* Step 0 — Account */}
        {step === 0 && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#EEF2FF", borderRadius: 12, padding: "12px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 22 }}>🤖</span>
              <p style={{ fontSize: 13, color: "#4F46E5", margin: 0, lineHeight: 1.5 }}>
                Hi 👋 Main Jarvis hoon. Aapka account banate hain — sirf 2 minute lagenge!
              </p>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6, letterSpacing: "-0.4px" }}>Account banayein</h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 24 }}>Free mein shuru karo — koi credit card nahi</p>

            <form onSubmit={next} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label htmlFor="signup-email" style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Email address</label>
                <input id="signup-email" type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="aap@example.com"
                  style={{ width: "100%", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#E5E7EB")} />
              </div>
              <div>
                <label htmlFor="signup-password" style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Password</label>
                <input id="signup-password" type="password" value={form.password} onChange={e => update("password", e.target.value)} placeholder="••••••••  (min 8 characters)"
                  style={{ width: "100%", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#E5E7EB")} />
              </div>
              {error && <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#EF4444" }}>{error}</div>}
              <button id="signup-next-1" type="submit" style={{ background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", fontWeight: 700, fontSize: 15, padding: 13, borderRadius: 10, border: "none", cursor: "pointer", boxShadow: "0 2px 12px rgba(37,99,235,0.25)" }}>
                Aage badho →
              </button>
            </form>
          </>
        )}

        {/* Step 1 — Profile */}
        {step === 1 && (
          <>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6, letterSpacing: "-0.4px" }}>Aapka naam kya hai?</h1>
            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 24 }}>Jarvis aapko is naam se bulaega 🙂</p>
            <form onSubmit={next} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label htmlFor="signup-name" style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Aapka naam</label>
                <input id="signup-name" type="text" value={form.name} onChange={e => update("name", e.target.value)} placeholder="Jaise: Rahul, Priya..."
                  style={{ width: "100%", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#E5E7EB")} autoFocus />
              </div>
              {error && <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#EF4444" }}>{error}</div>}
              <button id="signup-next-2" type="submit" disabled={loading} style={{ background: loading ? "#93C5FD" : "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", fontWeight: 700, fontSize: 15, padding: 13, borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer" }}>
                {loading ? "Ek second..." : "Account banana →"}
              </button>
            </form>
          </>
        )}

        {/* Step 2 — Success */}
        {step === 2 && (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#2563EB,#6366F1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 28 }}>✅</div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 10, letterSpacing: "-0.4px" }}>
              Welcome, {form.name}! 🎉
            </h1>
            <div style={{ background: "#EEF2FF", borderRadius: 12, padding: "14px 18px", marginBottom: 24, textAlign: "left" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontSize: 18 }}>🤖</span>
                <p style={{ fontSize: 13, color: "#4F46E5", margin: 0, lineHeight: 1.6 }}>
                  Hi {form.name} 👋 Main Jarvis hoon.<br />
                  Main aapki daily life ko thoda easy banane ke liye hoon. Aap jab chaho, mujhse pooch sakte ho.
                </p>
              </div>
            </div>
            <Link href="/onboarding/welcome" id="signup-go-onboarding" style={{
              display: "block", background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", fontWeight: 700, fontSize: 15,
              padding: 14, borderRadius: 10, textDecoration: "none", boxShadow: "0 2px 12px rgba(37,99,235,0.25)",
            }}>
              Jarvis se milein →
            </Link>
          </div>
        )}

        {step < 2 && (
          <p style={{ textAlign: "center", fontSize: 14, color: "#6B7280", marginTop: 24 }}>
            Pehle se account hai?{" "}
            <Link href="/login" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>Login karein</Link>
          </p>
        )}
      </div>
    </div>
  );
}
