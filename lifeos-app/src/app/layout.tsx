import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeOS + Jarvis — Your Personal AI Life Dashboard",
  description:
    "LifeOS is a calm, intelligent personal and family dashboard powered by Jarvis AI. Track expenses, get AI-backed insights, and stay in control of your life — in Hinglish.",
  keywords: ["LifeOS", "Jarvis AI", "personal finance", "family dashboard", "AI assistant", "expense tracker"],
  openGraph: {
    title: "LifeOS + Jarvis",
    description: "Your calm, intelligent personal AI life dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#F9FAFB] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
