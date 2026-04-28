/**
 * LifeOS + Jarvis — Jarvis Conversation Utilities
 * Implements the Universal Response Framework from CLAUDE.md
 *
 * Every Jarvis reply follows:
 *   1. Summary  (1 line)
 *   2. Reason / Context
 *   3. Suggestion (optional)
 *   4. User Control (CTA buttons)
 */

import type { JarvisAction, JarvisMessage } from "@/types";

// ── Canonical Conversation Scripts (from CLAUDE.md) ──────

export const JARVIS_SCRIPTS = {
  firstGreeting: {
    lines: [
      "Hi 👋 Main Jarvis hoon.",
      "Main aapki daily life ko thoda easy banane ke liye hoon.",
      "Aap jab chaho, mujhse pooch sakte ho — expenses, reminders ya future planning ke baare me.",
    ],
    suggestedPrompts: [
      "Mujhe guide karo",
      "Main kya kya kar sakta hoon?",
      "Aaj ka summary dikhao",
    ],
  },

  dailyCheckin: (hasIssue: boolean) => ({
    lines: hasIssue
      ? [
          "Good morning 🙂",
          "Aaj koi urgent issue nahi hai.",
          "Bas ek chhota suggestion hai.",
          "Is week thoda extra spending ho raha hai — main reason dikha doon?",
        ]
      : [
          "Good morning 🙂",
          "Sab kuch theek lag raha hai aaj.",
          "Koi urgent update nahi hai.",
        ],
    actions: hasIssue
      ? [
          { label: "View reason", variant: "primary", actionKey: "view_reason" },
          { label: "Ignore", variant: "ghost", actionKey: "ignore" },
        ] as JarvisAction[]
      : [],
  }),

  ignored: {
    lines: [
      "No problem 🙂",
      "Main bas help ke liye hoon.",
      "Agar future me chaho, bata dena.",
    ],
  },

  error: {
    lines: [
      "Abhi thoda technical issue aa raha hai.",
      "Main thodi der me phir try karta hoon.",
      "Aap chaaho to baad me pooch sakte ho.",
    ],
  },

  clarification: {
    lines: [
      "Is question me thodi ambiguity lag rahi hai.",
      "Kya aap thoda clear bata sakte ho? Jaise: kis month ya kis category ke baare me?",
    ],
  },

  confirmationPre: (detail: string) => ({
    lines: [`Confirm kar loon?`, detail],
    actions: [
      { label: "Confirm", variant: "primary", actionKey: "confirm" },
      { label: "Cancel", variant: "ghost", actionKey: "cancel" },
    ] as JarvisAction[],
  }),

  confirmationPost: (detail: string) => ({
    lines: [`Done ✅`, detail],
  }),

  predictionExplain: {
    lines: [
      "Ye estimate pichle 6 months ke data pe based hai.",
      "Maine income, fixed expenses aur seasonal pattern consider kiya hai.",
      "Ye exact future nahi hai — bas ek planning help hai.",
    ],
  },
} as const;

// ── Message Factory ───────────────────────────────────────

let _messageCounter = 0;

export function createJarvisMessage(
  role: JarvisMessage["role"],
  content: string,
  suggestedActions?: JarvisAction[]
): JarvisMessage {
  _messageCounter += 1;
  return {
    id: `msg_${Date.now()}_${_messageCounter}`,
    role,
    content,
    timestamp: new Date().toISOString(),
    suggestedActions,
  };
}

/**
 * Joins an array of Hinglish lines into a single message string.
 * Keeps short sentences as the CLAUDE.md spec requires.
 */
export function joinLines(lines: readonly string[]): string {
  return lines.join("\n");
}

// ── Jarvis Personality Rules (runtime guard) ─────────────

/**
 * Validates that a Jarvis response doesn't violate the "Assistant, Not a Boss" rule.
 * Use this before sending any Jarvis message in production flows.
 */
export function validateJarvisResponse(content: string): {
  valid: boolean;
  violations: string[];
} {
  const violations: string[] = [];
  const lower = content.toLowerCase();

  const forbidden = [
    { pattern: /\byou must\b/i,        rule: "Commands not allowed — use suggestions" },
    { pattern: /\byou have to\b/i,     rule: "Commands not allowed — use suggestions" },
    { pattern: /\bdo it now\b/i,       rule: "Urgency without user consent" },
    { pattern: /\bwarning[!]+/i,       rule: "Aggressive alert language" },
    { pattern: /\bdanger[!]+/i,        rule: "Fear-based language" },
    { pattern: /\bfailed\b.*\byour\b/i,rule: "Blame language — non-judgmental only" },
  ];

  for (const { pattern, rule } of forbidden) {
    if (pattern.test(content)) {
      violations.push(rule);
    }
  }

  void lower; // future: sentiment checks

  return { valid: violations.length === 0, violations };
}
