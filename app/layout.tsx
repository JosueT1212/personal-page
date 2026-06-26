import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josue Tapia Hernández — ML Research & Engineering",
  description:
    "Math & Data Science student at Tec de Monterrey. ML Researcher. Builder of AI systems. Research. Ship. Repeat.",
  openGraph: {
    title: "Josue Tapia Hernández",
    description: "Research. Ship. Repeat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-surface text-primary font-sans">{children}</body>
    </html>
  );
}
