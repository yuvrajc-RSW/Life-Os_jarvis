"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setError("Email aur password dono chahiye."); return; }
    setError("");
    setLoading(true);
    // TODO: connect real auth
    setTimeout(() => { setLoading(false); window.location.href = "/dashboard"; }, 1200);
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
      <div style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: 20, border: "1.5px solid #E5E7EB", boxShadow: "0 4px 24px rgba(37,99,235,0.08)", padding: "40px 36px" }}>

        {/* Jarvis greeting */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#EEF2FF", borderRadius: 12, padding: "12px 16px", marginBottom: 28 }}>
          <span style={{ fontSize: 22 }}>🤖</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#6366F1", margin: 0 }}>Jarvis</p>
            <p style={{ fontSize: 13, color: "#4F46E5", margin: 0, lineHeight: 1.4 }}>Wapas aa gaye! 😊 Login karein aur main ready hoon.</p>
          </div>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 6, letterSpacing: "-0.5px" }}>Login karein</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 28 }}>Apna account access karein</p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

          {/* Email */}
          <div>
            <label htmlFor="login-email" style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Email address</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="aap@example.com"
              style={{ width: "100%", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
              onFocus={e => (e.target.style.borderColor = "#2563EB")}
              onBlur={e => (e.target.style.borderColor = "#E5E7EB")}
            />
          </div>

          {/* Password */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <label htmlFor="login-password" style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>Password</label>
              <Link href="/forgot-password" style={{ fontSize: 12, color: "#2563EB", textDecoration: "none", fontWeight: 500 }}>Bhool gaye?</Link>
            </div>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: "100%", background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "#111827", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
              onFocus={e => (e.target.style.borderColor = "#2563EB")}
              onBlur={e => (e.target.style.borderColor = "#E5E7EB")}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#EF4444" }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            id="login-submit"
            type="submit"
            disabled={loading}
            style={{
              background: loading ? "#93C5FD" : "linear-gradient(135deg,#2563EB,#6366F1)",
              color: "#fff", fontWeight: 700, fontSize: 15,
              padding: "13px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 2px 12px rgba(37,99,235,0.25)",
              transition: "opacity 0.15s",
            }}
          >
            {loading ? "Login ho raha hai..." : "Login karein →"}
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 14, color: "#6B7280", marginTop: 24 }}>
          Naya account?{" "}
          <Link href="/signup" style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>Sign up karein</Link>
        </p>
      </div>

      <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 24, textAlign: "center" }}>
        By logging in, you agree to our{" "}
        <Link href="/terms" style={{ color: "#6B7280" }}>Terms</Link> &amp;{" "}
        <Link href="/privacy" style={{ color: "#6B7280" }}>Privacy Policy</Link>
      </p>
    </div>
  );
}
