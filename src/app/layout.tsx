import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const SITE_NAME = "Muhammad Fajar Kurniawan";
const SITE_DESCRIPTION =
  "Backend Engineer yang berspesialisasi pada NestJS dan MySQL, kini terjun ke dunia Full-stack development.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"),
  title: `${SITE_NAME} - Backend Engineer & Fullstack Enthusiast`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} - Backend Engineer & Fullstack Enthusiast`,
    description: SITE_DESCRIPTION,
    images: ["/FotoProfile.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable)}>
      <body className="relative min-h-screen bg-background text-foreground antialiased selection:bg-accent/25 selection:text-foreground">
        {/* Real Visible Atmospheric Background Texture */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/bg-forest.webp"
            alt=""
            fill
            priority
            className="object-cover object-top opacity-35 filter contrast-125 brightness-90"
            sizes="100vw"
          />
          {/* Subtle warm espresso wash for optimal reading contrast */}
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>

        {/* Foreground Content Stack */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
