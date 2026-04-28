/**
 * LifeOS + Jarvis — Design Tokens (JS/TS)
 * Mirror of globals.css — use these in components and hooks.
 */

export const colors = {
  // Brand
  primary:       "#2563EB",
  primaryHover:  "#1D4ED8",
  primaryLight:  "#DBEAFE",
  indigo:        "#6366F1",
  indigoHover:   "#4F46E5",
  indigoLight:   "#EEF2FF",

  // Neutrals
  bg:            "#F9FAFB",
  surface:       "#FFFFFF",
  border:        "#E5E7EB",
  textPrimary:   "#111827",
  textSecondary: "#6B7280",
  textMuted:     "#9CA3AF",

  // Semantic
  success:       "#22C55E",
  warning:       "#F59E0B",
  error:         "#EF4444",
  info:          "#3B82F6",
} as const;

export const radius = {
  btn:    "10px",
  input:  "8px",
  card:   "14px",
  bubble: "18px",
} as const;

export const spacing = {
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "32px",
  6: "48px",
} as const;

export const duration = {
  fast: 150,
  base: 200,
  slow: 250,
} as const;

export const jarvisPanel = {
  width:  "360px",
  height: "520px",
} as const;

// Chart line styles per CLAUDE.md spec
export const chartStyles = {
  solidLine:  { strokeDasharray: "none",  label: "Historical data" },
  dottedLine: { strokeDasharray: "6 3",   label: "Prediction" },
} as const;
