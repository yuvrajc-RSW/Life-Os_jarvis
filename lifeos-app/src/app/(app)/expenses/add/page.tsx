"use client";
import Link from "next/link";
import { useState } from "react";

const categories = ["Food", "Travel", "Medical", "Grocery", "Utilities", "Rent", "Entertainment", "Other"];

export default function AddExpensePage() {
  const [step, setStep] = useState<"amount" | "category" | "confirm" | "success">("amount");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  const catEmoji: Record<string, string> = {
    Food: "🍔", Travel: "🚗", Medical: "💊", Grocery: "🛒",
    Utilities: "⚡", Rent: "🏠", Entertainment: "🎬", Other: "📦",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 60 }}>
          <Link href="/dashboard" style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}>← Dashboard</Link>
          <span style={{ margin: "0 12px", color: "#E5E7EB" }}>›</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#2563EB" }}>Expense Add Karo</span>
        </div>
      </nav>

      <div style={{ maxWidth: 480, margin: "48px auto", padding: "0 24px" }}>
        {/* Step dots */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 32 }}>
          {["amount", "category", "confirm"].map((s, i) => (
            <div key={s} style={{ width: s === step ? 24 : 8, height: 8, borderRadius: 99, background: s === step ? "#2563EB" : ["amount","category","confirm"].indexOf(step) > i ? "#6366F1" : "#E5E7EB", transition: "all 0.3s" }} />
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 24, border: "1.5px solid #E5E7EB", boxShadow: "0 4px 24px rgba(37,99,235,0.08)", padding: "36px 32px" }}>

          {/* Step 1 — Amount */}
          {step === "amount" && (
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Kitna kharcha hua?</h1>
              <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 28 }}>Amount aur description daalo</p>

              <div style={{ marginBottom: 20 }}>
                <label htmlFor="expense-amount" style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Amount (₹)</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 18, color: "#6B7280", fontWeight: 600 }}>₹</span>
                  <input id="expense-amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0"
                    autoFocus style={{ width: "100%", boxSizing: "border-box", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "14px 14px 14px 36px", fontSize: 22, fontWeight: 700, color: "#111827", outline: "none" }}
                    onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#E5E7EB")} />
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label htmlFor="expense-desc" style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Description <span style={{ color: "#9CA3AF", fontWeight: 400 }}>(optional)</span></label>
                <input id="expense-desc" type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Jaise: Swiggy order, Petrol, Apollo..."
                  style={{ width: "100%", boxSizing: "border-box", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "12px 14px", fontSize: 14, color: "#111827", outline: "none" }}
                  onFocus={e => (e.target.style.borderColor = "#2563EB")} onBlur={e => (e.target.style.borderColor = "#E5E7EB")} />
              </div>

              <button onClick={() => { if (Number(amount) > 0) setStep("category"); }} disabled={!amount || Number(amount) <= 0}
                style={{ width: "100%", background: amount && Number(amount) > 0 ? "linear-gradient(135deg,#2563EB,#6366F1)" : "#F3F4F6", color: amount && Number(amount) > 0 ? "#fff" : "#9CA3AF", border: "none", borderRadius: 10, padding: 14, fontSize: 15, fontWeight: 700, cursor: amount && Number(amount) > 0 ? "pointer" : "not-allowed" }}>
                Category choose karein →
              </button>
            </div>
          )}

          {/* Step 2 — Category */}
          {step === "category" && (
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 6 }}>Kaunsi category?</h1>
              <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 20 }}>Jarvis is se better patterns samjhega 🙂</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
                {categories.map(c => (
                  <button key={c} onClick={() => setCategory(c)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "14px 10px", background: category === c ? "#EEF2FF" : "#F9FAFB", border: `1.5px solid ${category === c ? "#6366F1" : "#E5E7EB"}`, borderRadius: 12, cursor: "pointer", transition: "all 0.15s" }}>
                    <span style={{ fontSize: 22 }}>{catEmoji[c]}</span>
                    <span style={{ fontSize: 13, fontWeight: category === c ? 700 : 500, color: category === c ? "#4F46E5" : "#374151" }}>{c}</span>
                    {category === c && <span style={{ fontSize: 10, color: "#6366F1" }}>✓ Selected</span>}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep("amount")} style={{ flex: 1, background: "#F9FAFB", color: "#6B7280", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>← Wapas</button>
                <button onClick={() => { if (category) setStep("confirm"); }} disabled={!category} style={{ flex: 2, background: category ? "linear-gradient(135deg,#2563EB,#6366F1)" : "#F3F4F6", color: category ? "#fff" : "#9CA3AF", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: category ? "pointer" : "not-allowed" }}>Review karein →</button>
              </div>
            </div>
          )}

          {/* Step 3 — Confirm (Flow 5) */}
          {step === "confirm" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#EEF2FF", borderRadius: 12, padding: "14px 16px", marginBottom: 24 }}>
                <span style={{ fontSize: 20 }}>🤖</span>
                <p style={{ fontSize: 13, color: "#4F46E5", margin: 0, lineHeight: 1.5 }}>
                  <strong>Jarvis:</strong> Confirm kar loon? Ye expense save ho jaega.
                </p>
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 20 }}>Expense review karein</h1>
              <div style={{ background: "#F9FAFB", borderRadius: 14, border: "1.5px solid #E5E7EB", padding: "20px 22px", marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #F3F4F6" }}>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>Amount</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>₹{Number(amount).toLocaleString("en-IN")}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #F3F4F6" }}>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>Category</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>{catEmoji[category]} {category}</span>
                </div>
                {desc && (
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #F3F4F6" }}>
                    <span style={{ fontSize: 13, color: "#6B7280" }}>Description</span>
                    <span style={{ fontSize: 14, color: "#111827" }}>{desc}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
                  <span style={{ fontSize: 13, color: "#6B7280" }}>Date</span>
                  <span style={{ fontSize: 14, color: "#111827" }}>Aaj</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep("category")} style={{ flex: 1, background: "#F9FAFB", color: "#6B7280", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>← Cancel</button>
                <button id="confirm-expense-btn" onClick={() => setStep("success")} style={{ flex: 2, background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Confirm karein ✓</button>
              </div>
            </div>
          )}

          {/* Success */}
          {step === "success" && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 30 }}>✅</div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 10 }}>Done! ✅</h1>
              <div style={{ background: "#EEF2FF", borderRadius: 12, padding: "14px 18px", textAlign: "left", marginBottom: 24 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>🤖</span>
                  <p style={{ fontSize: 13, color: "#4F46E5", margin: 0, lineHeight: 1.6 }}>
                    ₹{Number(amount).toLocaleString("en-IN")} — {category} — save ho gaya 🙂<br />
                    Main aapko weekly update deta rahunga.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => { setStep("amount"); setAmount(""); setDesc(""); setCategory(""); }} style={{ flex: 1, background: "#F9FAFB", color: "#374151", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>+ Aur add karo</button>
                <Link href="/dashboard" style={{ flex: 2, background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>Dashboard →</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
