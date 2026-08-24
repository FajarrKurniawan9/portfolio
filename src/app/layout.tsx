import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const SITE_NAME = "Muhammad Fajar Kurniawan";
const SITE_DESCRIPTION =
  "Backend Engineer yang berspesialisasi pada NestJS dan MySQL, kini terjun ke dunia Full-stack development.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"),
  title: `${SITE_NAME} — Backend Engineer & Fullstack Enthusiast`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Backend Engineer & Fullstack Enthusiast`,
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
    <html lang="id" className={cn(sora.variable, jetbrainsMono.variable)}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
