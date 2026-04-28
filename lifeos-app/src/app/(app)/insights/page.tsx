"use client";
import Link from "next/link";
import { useState } from "react";

const months = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
const actual =  [18200, 22400, 19800, 26100, 24300, 24800];
const predict = [null,  null,  null,  null,  null,  26500, 27800, 29000];
const predMonths = ["Apr", "May", "Jun", "Jul"];

const insights = [
  { id: "1", type: "risk",       emoji: "⚠️", title: "Food spending high hai",       body: "Pichle 3 months se food category mein average se 18% zyada kharcha ho raha hai.", action: "Alert set karein" },
  { id: "2", type: "forecast",   emoji: "📈", title: "May mein zyada kharcha hoga",  body: "Seasonal pattern ke hisaab se May mein ₹26,500 tak ka kharcha predicted hai.", action: "Budget plan karein" },
  { id: "3", type: "suggestion", emoji: "💡", title: "Travel budget optimize karein", body: "Travel mein 12% reduction karein toh savings ₹8,000+ per month ho sakti hai.", action: "Jarvis se poochho" },
];

const MAX_BAR = 30000;

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "forecast" | "risk">("overview");
  const [explainOpen, setExplainOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Navbar */}
      <nav style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 60, gap: 8 }}>
          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#2563EB,#6366F1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 11 }}>LO</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>LifeOS <span style={{ color: "#6366F1" }}>+ Jarvis</span></span>
          </Link>
          <span style={{ color: "#E5E7EB", margin: "0 8px" }}>›</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#2563EB" }}>Insights & Predictions</span>
          <div style={{ marginLeft: "auto" }}>
            <Link href="/dashboard" style={{ fontSize: 13, color: "#6B7280", textDecoration: "none", padding: "6px 12px", borderRadius: 8 }}>← Dashboard</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <h1 style={{ fontSize: 26, fontWeight: 700, color: "#111827", letterSpacing: "-0.5px", margin: 0 }}>Insights & Predictions</h1>
            <span style={{ fontSize: 11, background: "#EEF2FF", color: "#6366F1", borderRadius: 6, padding: "3px 8px", fontWeight: 600 }}>AI Powered</span>
          </div>
          <p style={{ fontSize: 14, color: "#6B7280" }}>Aapke pichle 6 months ke data pe based — transparent aur honest. 🙂</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28, background: "#F3F4F6", borderRadius: 12, padding: 4, width: "fit-content" }}>
          {(["overview", "forecast", "risk"] as const).map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{ padding: "8px 20px", borderRadius: 9, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600, background: activeTab === t ? "#fff" : "transparent", color: activeTab === t ? "#2563EB" : "#6B7280", boxShadow: activeTab === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none", transition: "all 0.15s", textTransform: "capitalize" }}>
              {t === "overview" ? "📊 Overview" : t === "forecast" ? "📈 Forecast" : "⚠️ Risk Alerts"}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Monthly bar chart */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "24px", gridColumn: "1 / -1" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Monthly Spending — Last 6 Months</h2>
                  <p style={{ fontSize: 13, color: "#9CA3AF", margin: 0 }}>Aapke actual kharche</p>
                </div>
                <button onClick={() => setExplainOpen(true)} style={{ fontSize: 12, color: "#6366F1", background: "#EEF2FF", border: "none", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontWeight: 600 }}>
                  🤖 Ye kaise calculate hua?
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 16, height: 160 }}>
                {months.map((m, i) => (
                  <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}>₹{(actual[i] / 1000).toFixed(0)}k</span>
                    <div style={{ width: "100%", borderRadius: "6px 6px 0 0", background: i === 5 ? "linear-gradient(180deg,#2563EB,#6366F1)" : "#DBEAFE", height: `${(actual[i] / MAX_BAR) * 130}px`, transition: "height 0.6s ease" }} />
                    <span style={{ fontSize: 12, color: i === 5 ? "#2563EB" : "#9CA3AF", fontWeight: i === 5 ? 700 : 400 }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight cards */}
            {insights.map(ins => (
              <div key={ins.id} style={{ background: "#fff", borderRadius: 16, border: `1.5px solid ${ins.type === "risk" ? "#FED7AA" : "#E5E7EB"}`, padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>{ins.emoji}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>{ins.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 14 }}>{ins.body}</p>
                <p style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 14, fontStyle: "italic" }}>Based on your data — pichle 6 months ka analysis</p>
                <button style={{ background: ins.type === "risk" ? "#FEF2F2" : "#EEF2FF", color: ins.type === "risk" ? "#EF4444" : "#6366F1", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  {ins.action} →
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Forecast Tab */}
        {activeTab === "forecast" && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
              <div>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Spending Forecast — Next 3 Months</h2>
                <p style={{ fontSize: 13, color: "#9CA3AF", margin: 0 }}>Dotted = prediction &nbsp;|&nbsp; Solid = actual &nbsp; (CLAUDE.md spec)</p>
              </div>
              <button onClick={() => setExplainOpen(true)} style={{ fontSize: 12, color: "#6366F1", background: "#EEF2FF", border: "none", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontWeight: 600 }}>Ye kaise aaya?</button>
            </div>

            {/* Combined chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 180, marginBottom: 16 }}>
              {months.map((m, i) => (
                <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 11, color: "#6B7280" }}>₹{(actual[i] / 1000).toFixed(0)}k</span>
                  <div style={{ width: "100%", borderRadius: "6px 6px 0 0", background: "linear-gradient(180deg,#2563EB,#6366F1)", height: `${(actual[i] / MAX_BAR) * 150}px` }} />
                  <span style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}>{m}</span>
                </div>
              ))}
              {["May","Jun","Jul"].map((m, i) => (
                <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 11, color: "#6366F1" }}>₹{((26500 + i * 1250) / 1000).toFixed(1)}k</span>
                  <div style={{ width: "100%", borderRadius: "6px 6px 0 0", background: "repeating-linear-gradient(180deg,#6366F1 0px,#6366F1 4px,transparent 4px,transparent 8px)", border: "2px dashed #6366F1", borderBottom: "none", height: `${((26500 + i * 1250) / MAX_BAR) * 150}px`, opacity: 0.7 }} />
                  <span style={{ fontSize: 11, color: "#6366F1", fontWeight: 700 }}>{m}*</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 16, height: 10, borderRadius: 3, background: "linear-gradient(90deg,#2563EB,#6366F1)" }} /><span style={{ fontSize: 12, color: "#6B7280" }}>Actual spending</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 16, height: 10, borderRadius: 3, border: "2px dashed #6366F1" }} /><span style={{ fontSize: 12, color: "#6B7280" }}>Predicted (AI estimate)</span></div>
            </div>

            <div style={{ background: "#EEF2FF", borderRadius: 12, padding: "14px 18px" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontSize: 18 }}>🤖</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#4F46E5", margin: "0 0 4px" }}>Jarvis ka note:</p>
                  <p style={{ fontSize: 13, color: "#6366F1", margin: 0, lineHeight: 1.6 }}>
                    Ye estimate pichle 6 months ke data pe based hai. Maine income, fixed expenses aur seasonal pattern consider kiya hai. Ye exact future nahi hai — bas ek planning help hai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Risk Tab */}
        {activeTab === "risk" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { level: "medium", emoji: "🟡", title: "Food spending — 3 months se high", detail: "Average ₹6,200/month vs normal ₹5,250/month. 18% increase.", suggestion: "Kya main food category ke liye alert set kar doon?" },
              { level: "low",    emoji: "🟢", title: "Medical expenses — stable hain", detail: "Last 3 months mein koi unusual spike nahi. Medicines thoda increase zaroor hua hai.", suggestion: "Monthly reminder chahiye?" },
              { level: "medium", emoji: "🟡", title: "Travel spending — thoda zyada", detail: "Travel mein 12% increase dikh raha hai — summer season ka effect.", suggestion: "Budget limit set karein?" },
            ].map(r => (
              <div key={r.title} style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{r.emoji}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>{r.title}</h3>
                  <p style={{ fontSize: 13, color: "#6B7280", margin: "0 0 12px", lineHeight: 1.6 }}>{r.detail}</p>
                  <div style={{ background: "#F9FAFB", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, color: "#374151" }}>🤖 {r.suggestion}</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 7, padding: "6px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Haan</button>
                      <button style={{ background: "transparent", color: "#9CA3AF", border: "1px solid #E5E7EB", borderRadius: 7, padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>No problem</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Prediction Explain Modal — Flow 6 */}
      {explainOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(17,24,39,0.5)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }} onClick={() => setExplainOpen(false)}>
          <div style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", maxWidth: 440, width: "100%" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
              <span style={{ fontSize: 28 }}>🤖</span>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", margin: 0 }}>Ye prediction kaise aaya?</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {[
                { emoji: "📅", text: "Pichle 6 months ke data pe based hai" },
                { emoji: "💸", text: "Income, fixed expenses aur seasonal patterns consider kiye" },
                { emoji: "📊", text: "Food, travel, medical categories individually analyze ki gayi" },
              ].map(p => (
                <div key={p.text} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#F9FAFB", borderRadius: 10, padding: "12px 14px" }}>
                  <span style={{ fontSize: 18 }}>{p.emoji}</span>
                  <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{p.text}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#EEF2FF", borderRadius: 10, padding: "12px 16px", marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#4F46E5", margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                Ye exact future nahi hai — bas ek planning help hai. Aap apna feedback de sakte ho aur main improve karta rahunga.
              </p>
            </div>
            <button onClick={() => setExplainOpen(false)} style={{ width: "100%", background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Samajh gaya, shukriya 🙂
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
