import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Matt Driver Performance | Elite Youth Football Strength & Conditioning",
  description: "Elite-level strength and conditioning for youth athletes. Performance profiling, 1-1 training, and small group sessions from a Premier League academy coach.",
  keywords: ["football coaching", "strength and conditioning", "youth athletes", "performance training", "Chelsea FC", "athletic development"],
  authors: [{ name: "Matt Driver" }],
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Matt Driver Performance | Elite Youth Football Strength & Conditioning",
    description: "Elite-level strength and conditioning for youth athletes from a Premier League academy coach.",
    url: "https://mattdriverperformance.com",
    siteName: "Matt Driver Performance",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
