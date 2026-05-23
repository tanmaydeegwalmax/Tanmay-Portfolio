import type { Metadata } from "next";
import { Inter, Oswald, Dancing_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Tanmay Deogwal - Editing Stories",
  description: "I help creators and brands turn raw footage into powerful engaging content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased bg-black text-white selection:bg-white selection:text-black">
      <body className={`${inter.variable} ${oswald.variable} ${dancing.variable} font-sans`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
