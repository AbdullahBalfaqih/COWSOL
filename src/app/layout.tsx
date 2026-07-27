import type { Metadata } from "next";
import { Poppins, Rubik_Spray_Paint } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const rubikSprayPaint = Rubik_Spray_Paint({
  variable: "--font-rubik-spray-paint",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "COWSOL",
  description:
    "COWSOL: The herd is moving to Solana! A community-driven token bringing real-world utility, AI tracking, and unstoppable momentum to the blockchain. Join the pasture today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rubikSprayPaint.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cow-green-200 text-cow-text">{children}</body>
    </html>
  );
}
