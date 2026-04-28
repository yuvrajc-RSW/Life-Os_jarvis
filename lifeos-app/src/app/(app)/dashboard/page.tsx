"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── Mock Data ───────────────────────────────────────── */
const mockUser = { name: "Rahul" };
const mockSummary = {
  totalExpenses: 24800,
  budget: 30000,
  savings: 5200,
  pendingReminders: 2,
};
const mockInsights = [
  { id: "1", category: "Food", trend: "up", delta: "+18%", msg: "Food spending pichle month se zyada hai." },
  { id: "2", category: "Travel", trend: "up", delta: "+12%", msg: "Travel mein thoda increase dikh raha hai." },
  { id: "3", category: "Medical", trend: "stable", delta: "0%", msg: "Medical expenses stable hain." },
];
const mockExpenses = [
  { id: "1", desc: "Swiggy Order", category: "Food", amount: 340, date: "Aaj" },
  { id: "2", desc: "Metro Card Recharge", category: "Travel", amount: 500, date: "Kal" },
  { id: "3", desc: "Electricity Bill", category: "Utilities", amount: 1200, date: "2 din pehle" },
  { id: "4", desc: "Apollo Pharmacy", category: "Medical", amount: 890, date: "3 din pehle" },
];
const mockReminders = [
  { id: "1", title: "Rent pay karna hai", due: "5 May", urgent: true },
  { id: "2", title: "Car insurance renew", due: "10 May", urgent: false },
];

/* ─── Sub-components ──────────────────────────────────── */
function NavBar({ onJarvisOpen }: { onJarvisOpen: () => void }) {
  return (
    <nav style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E5E7EB", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: 60 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#2563EB,#6366F1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>LO</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>LifeOS <span style={{ color: "#6366F1" }}>+ Jarvis</span></span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto" }}>
          {[
            { label: "Dashboard", href: "/dashboard", active: true },
            { label: "Insights", href: "/insights" },
            { label: "Expenses", href: "/expenses" },
            { label: "Family", href: "/family" },
            { label: "Reminders", href: "/reminders" },
            { label: "Settings", href: "/settings" },
          ].map(l => (
            <Link key={l.label} href={l.href} style={{
              fontSize: 13, fontWeight: l.active ? 600 : 500,
              color: l.active ? "#2563EB" : "#6B7280",
              padding: "6px 12px", borderRadius: 8, textDecoration: "none",
              background: l.active ? "#DBEAFE" : "transparent",
            }}>{l.label}</Link>
          ))}
          <button onClick={onJarvisOpen} id="open-jarvis-btn" style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff",
            border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer",
            boxShadow: "0 2px 8px rgba(37,99,235,0.25)", marginLeft: 8,
          }}>
            🤖 Jarvis
          </button>
        </div>
      </div>
    </nav>
  );
}

function StatCard({ label, value, sub, accent }: { label: string; value: string; sub?: string; accent: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "22px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
      <p style={{ fontSize: 13, color: "#6B7280", fontWeight: 500, marginBottom: 8 }}>{label}</p>
      <p style={{ fontSize: 26, fontWeight: 700, color: accent, letterSpacing: "-0.5px", marginBottom: 4 }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: "#9CA3AF" }}>{sub}</p>}
    </div>
  );
}

const categoryColors: Record<string, string> = {
  Food: "#F59E0B", Travel: "#6366F1", Utilities: "#2563EB", Medical: "#22C55E", Other: "#9CA3AF",
};

/* ─── Jarvis Chat Panel ───────────────────────────────── */
function JarvisPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ id: string; role: "jarvis" | "user"; text: string }[]>([
    { id: "0", role: "jarvis", text: `Good morning 🙂\nAaj koi urgent issue nahi hai.\nBas ek chhota suggestion hai.\n\nIs week thoda extra spending ho raha hai — main reason dikha doon?` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), role: "user" as const, text: input };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        id: (Date.now() + 1).toString(),
        role: "jarvis" as const,
        text: "Is month expenses thode high lag rahe hain.\nFood aur travel categories me pichle 3 months se zyada spend hua hai.\nAgar chaho, main exact breakdown dikha sakta hoon.",
      }]);
    }, 1400);
  }

  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 200,
      width: 360, height: 520,
      background: "#fff", borderRadius: 20,
      border: "1.5px solid #E5E7EB",
      boxShadow: "0 8px 40px rgba(37,99,235,0.15)",
      display: "flex", flexDirection: "column",
      animation: "slideUp 0.2s ease both",
    }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#2563EB,#6366F1)", borderRadius: "18px 18px 0 0", padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
        <div>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, margin: 0 }}>Jarvis</p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, margin: 0 }}>Aapka AI assistant</p>
        </div>
        <button onClick={onClose} style={{ marginLeft: "auto", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", borderRadius: 8, width: 28, height: 28, cursor: "pointer", fontSize: 14 }}>✕</button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {messages.map(m => (
          <div key={m.id} style={{ display: "flex", gap: 8, flexDirection: m.role === "user" ? "row-reverse" : "row", alignItems: "flex-start" }}>
            {m.role === "jarvis" && (
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 14 }}>🤖</div>
            )}
            <div style={{
              background: m.role === "user" ? "#2563EB" : "#F3F4F6",
              color: m.role === "user" ? "#fff" : "#111827",
              borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              padding: "10px 13px", fontSize: 13, lineHeight: 1.6, maxWidth: "82%",
              whiteSpace: "pre-line",
            }}>
              {m.text}
              {m.role === "jarvis" && m.id === "0" && (
                <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                  <button style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 7, padding: "6px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>View reason</button>
                  <button style={{ background: "transparent", color: "#6B7280", border: "1px solid #E5E7EB", borderRadius: 7, padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>Ignore</button>
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🤖</div>
            <div style={{ background: "#F3F4F6", borderRadius: "14px 14px 14px 4px", padding: "12px 16px", display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 0.2, 0.4].map((d, i) => (
                <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#9CA3AF", display: "inline-block", animation: `blink 1.2s ${d}s infinite` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: "10px 12px 12px", borderTop: "1px solid #F3F4F6", display: "flex", gap: 8 }}>
        <input
          id="jarvis-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Jarvis se poochho..."
          style={{ flex: 1, background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "9px 13px", fontSize: 13, color: "#111827", outline: "none" }}
          onFocus={e => (e.target.style.borderColor = "#2563EB")}
          onBlur={e => (e.target.style.borderColor = "#E5E7EB")}
        />
        <button onClick={sendMessage} id="jarvis-send-btn" style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#2563EB,#6366F1)", border: "none", color: "#fff", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>↑</button>
      </div>

      <style>{`
        @keyframes blink { 0%,80%,100%{opacity:.2;transform:scale(.9)} 40%{opacity:1;transform:scale(1.1)} }
        @keyframes slideUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────── */
export default function DashboardPage() {
  const [jarvisOpen, setJarvisOpen] = useState(false);
  const spentPct = Math.round((mockSummary.totalExpenses / mockSummary.budget) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB", fontFamily: "Inter, system-ui, sans-serif" }}>
      <NavBar onJarvisOpen={() => setJarvisOpen(true)} />

      {/* Jarvis proactive suggestion banner */}
      <div style={{ background: "linear-gradient(135deg,#2563EB,#6366F1)", padding: "14px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>🤖</span>
          <p style={{ color: "rgba(255,255,255,0.95)", fontSize: 13, margin: 0, flex: 1 }}>
            <strong>Jarvis:</strong> Good morning, {mockUser.name} 🙂 Is week thoda extra spending ho raha hai — kya main reason dikha doon?
          </p>
          <button onClick={() => setJarvisOpen(true)} style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "none", borderRadius: 8, padding: "6px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
            Haan, dikha do
          </button>
          <button style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "none", fontSize: 18, cursor: "pointer", padding: "0 4px" }}>✕</button>
        </div>
      </div>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>

        {/* Page header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#111827", letterSpacing: "-0.5px", marginBottom: 4 }}>
            Namaste, {mockUser.name} 👋
          </h1>
          <p style={{ fontSize: 14, color: "#6B7280" }}>Yahan aapki is month ki life ka full picture hai.</p>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 28 }}>
          <StatCard label="Is month ka kharcha" value={`₹${mockSummary.totalExpenses.toLocaleString("en-IN")}`} sub={`Budget: ₹${mockSummary.budget.toLocaleString("en-IN")}`} accent="#111827" />
          <StatCard label="Bachaye hain" value={`₹${mockSummary.savings.toLocaleString("en-IN")}`} sub="Is month" accent="#22C55E" />
          <StatCard label="Budget used" value={`${spentPct}%`} sub={spentPct > 80 ? "⚠️ Thoda zyada hai" : "On track 🙂"} accent={spentPct > 80 ? "#F59E0B" : "#2563EB"} />
          <StatCard label="Pending reminders" value={`${mockSummary.pendingReminders}`} sub="Dekhna mat bhoolo" accent="#6366F1" />
        </div>

        {/* Budget progress bar */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "20px 24px", marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Monthly Budget Progress</span>
            <span style={{ fontSize: 13, color: "#6B7280" }}>₹{mockSummary.totalExpenses.toLocaleString("en-IN")} / ₹{mockSummary.budget.toLocaleString("en-IN")}</span>
          </div>
          <div style={{ height: 8, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${spentPct}%`, borderRadius: 99, background: spentPct > 80 ? "linear-gradient(90deg,#F59E0B,#EF4444)" : "linear-gradient(90deg,#2563EB,#6366F1)", transition: "width 0.6s ease" }} />
          </div>
          <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 8 }}>
            {spentPct > 80
              ? `⚠️ Budget ka ${spentPct}% use ho gaya — Jarvis se tips maango.`
              : `✅ Budget ka ${spentPct}% use hua — sab theek hai.`}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Spending by category */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>Category Insights</h2>
              <span style={{ fontSize: 11, background: "#EEF2FF", color: "#6366F1", borderRadius: 6, padding: "3px 8px", fontWeight: 600 }}>AI Powered</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {mockInsights.map(ins => (
                <div key={ins.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${categoryColors[ins.category]}18`, color: categoryColors[ins.category], display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                    {ins.category[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 2px" }}>{ins.category}</p>
                    <p style={{ fontSize: 12, color: "#6B7280", margin: 0 }}>{ins.msg}</p>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: ins.trend === "up" ? "#EF4444" : "#22C55E" }}>{ins.delta}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setJarvisOpen(true)} style={{ width: "100%", marginTop: 16, background: "#EEF2FF", color: "#6366F1", border: "none", borderRadius: 10, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              🤖 Jarvis se poochho
            </button>
          </div>

          {/* Recent expenses */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>Recent Expenses</h2>
              <Link href="/expenses" style={{ fontSize: 12, color: "#2563EB", textDecoration: "none", fontWeight: 600 }}>Sab dekho →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {mockExpenses.map(exp => (
                <div key={exp.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${categoryColors[exp.category] ?? "#9CA3AF"}18`, color: categoryColors[exp.category] ?? "#9CA3AF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                    {exp.category[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 2px" }}>{exp.desc}</p>
                    <p style={{ fontSize: 12, color: "#9CA3AF", margin: 0 }}>{exp.date}</p>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>₹{exp.amount}</span>
                </div>
              ))}
            </div>
            <Link href="/expenses/add" id="add-expense-btn" style={{
              display: "block", textAlign: "center", marginTop: 16,
              background: "linear-gradient(135deg,#2563EB,#6366F1)", color: "#fff",
              borderRadius: 10, padding: 10, fontSize: 13, fontWeight: 600, textDecoration: "none",
            }}>
              + Naya expense add karo
            </Link>
          </div>

          {/* Reminders */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>Upcoming Reminders</h2>
              <Link href="/reminders" style={{ fontSize: 12, color: "#2563EB", textDecoration: "none", fontWeight: 600 }}>Manage →</Link>
            </div>
            {mockReminders.map(rem => (
              <div key={rem.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, background: rem.urgent ? "#FEF2F2" : "#F9FAFB", borderRadius: 10, padding: "12px 14px", border: `1px solid ${rem.urgent ? "#FECACA" : "#F3F4F6"}` }}>
                <span style={{ fontSize: 18 }}>{rem.urgent ? "⚠️" : "🔔"}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#111827", margin: "0 0 2px" }}>{rem.title}</p>
                  <p style={{ fontSize: 12, color: "#6B7280", margin: 0 }}>Due: {rem.due}</p>
                </div>
              </div>
            ))}
            <button onClick={() => setJarvisOpen(true)} style={{ width: "100%", background: "#F9FAFB", color: "#6B7280", border: "1px solid #E5E7EB", borderRadius: 10, padding: "9px", fontSize: 13, cursor: "pointer" }}>
              🤖 Jarvis se reminder add karo
            </button>
          </div>

          {/* Quick actions */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1.5px solid #E5E7EB", padding: "20px 24px" }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 18 }}>Quick Actions</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Add Expense", emoji: "💸", href: "/expenses/add", color: "#2563EB", bg: "#DBEAFE" },
                { label: "Ask Jarvis", emoji: "🤖", href: null, color: "#6366F1", bg: "#EEF2FF" },
                { label: "View Insights", emoji: "📊", href: "/insights", color: "#2563EB", bg: "#DBEAFE" },
                { label: "Add Reminder", emoji: "🔔", href: "/reminders", color: "#6366F1", bg: "#EEF2FF" },
              ].map(a => (
                a.href
                  ? <Link key={a.label} href={a.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, background: a.bg, borderRadius: 12, padding: "18px 12px", textDecoration: "none" }}>
                      <span style={{ fontSize: 24 }}>{a.emoji}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: a.color }}>{a.label}</span>
                    </Link>
                  : <button key={a.label} onClick={() => setJarvisOpen(true)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, background: a.bg, borderRadius: 12, padding: "18px 12px", border: "none", cursor: "pointer" }}>
                      <span style={{ fontSize: 24 }}>{a.emoji}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: a.color }}>{a.label}</span>
                    </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Jarvis Floating Button (when panel closed) */}
      {!jarvisOpen && (
        <button onClick={() => setJarvisOpen(true)} id="jarvis-fab" style={{
          position: "fixed", bottom: 28, right: 28,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg,#2563EB,#6366F1)",
          border: "none", color: "#fff", fontSize: 24, cursor: "pointer",
          boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100,
        }}>
          🤖
        </button>
      )}

      {/* Jarvis Chat Panel */}
      {jarvisOpen && <JarvisPanel onClose={() => setJarvisOpen(false)} />}
    </div>
  );
}
