import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ClientShell from "@/components/layout/ClientShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AthaSpaces — Architecture, Interiors & Civil Engineering",
  description:
    "Crafting spaces that inspire. AthaSpaces offers civil engineering, architecture, interior design, renovation, and construction services.",
  keywords: [
    "architecture",
    "interior design",
    "civil engineering",
    "construction",
    "renovation",
    "AthaSpaces",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white">
        <ClientShell>
          <Navbar />
          <main className="pt-16">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ClientShell>
      </body>
    </html>
  );
}
