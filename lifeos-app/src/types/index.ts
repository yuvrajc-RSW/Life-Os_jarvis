/**
 * LifeOS + Jarvis — Shared TypeScript Types
 * Covers all 12 product sections from CLAUDE.md
 */

// ── Users & Auth ─────────────────────────────────────────

export type UserRole = "family_head" | "member" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: string;
}

// ── Family ────────────────────────────────────────────────

export type MemberStatus = "active" | "invited" | "pending";

export interface FamilyMember {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: MemberStatus;
  avatarUrl?: string;
}

// ── Expenses ─────────────────────────────────────────────

export type ExpenseCategory =
  | "food"
  | "travel"
  | "medical"
  | "grocery"
  | "entertainment"
  | "utilities"
  | "rent"
  | "other";

export interface Expense {
  id: string;
  amount: number;
  category: ExpenseCategory;
  description: string;
  memberId?: string;
  date: string;
  createdAt: string;
}

// ── Reminders ────────────────────────────────────────────

export type ReminderFrequency = "once" | "daily" | "weekly" | "monthly";

export interface Reminder {
  id: string;
  title: string;
  dueDate: string;
  frequency: ReminderFrequency;
  isActive: boolean;
  memberId?: string;
}

// ── Insights & Predictions ───────────────────────────────

export interface Insight {
  id: string;
  type: "trend" | "forecast" | "risk" | "suggestion";
  title: string;
  summary: string;
  category?: ExpenseCategory;
  confidence: number; // 0–1
  generatedAt: string;
}

export interface Prediction {
  month: string;          // "2025-05"
  predictedAmount: number;
  actualAmount?: number;  // null if future
  category: ExpenseCategory;
  basedOnMonths: number;  // e.g. 6
}

// ── Jarvis AI ────────────────────────────────────────────

export type JarvisMessageRole = "user" | "jarvis";
export type JarvisState = "idle" | "typing" | "responding" | "error";

export interface JarvisMessage {
  id: string;
  role: JarvisMessageRole;
  content: string;
  timestamp: string;
  suggestedActions?: JarvisAction[];
}

export interface JarvisAction {
  label: string;         // e.g. "View reason" / "Ignore"
  variant: "primary" | "secondary" | "ghost";
  actionKey: string;     // e.g. "view_reason" | "ignore"
}

export interface JarvisConversation {
  id: string;
  messages: JarvisMessage[];
  state: JarvisState;
  startedAt: string;
}

// ── Billing ──────────────────────────────────────────────

export type PlanType = "free" | "pro" | "family";
export type PaymentStatus = "success" | "failed" | "pending";

export interface Subscription {
  plan: PlanType;
  status: "active" | "cancelled" | "trial";
  renewsAt: string;
  paymentStatus: PaymentStatus;
}

// ── Dashboard ────────────────────────────────────────────

export interface DashboardSummary {
  totalExpensesThisMonth: number;
  savingsThisMonth: number;
  pendingReminders: number;
  jarvisSuggestion?: Insight;
  hasAlert: boolean;
}
