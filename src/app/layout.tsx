import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guillem Galindo | Software Engineer",
  description: "Software engineer based in Barcelona. Building software with curiosity and precision. Fascinated by mechanical watches and engineering.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" }
  ],
  keywords: ["Software Engineer", "Web Development", "Barcelona", "Horology", "Mechanical Watches", "Full Stack Developer"],
  authors: [{ name: "Guillem Galindo" }],
  creator: "Guillem Galindo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guillemgalindo.com",
    title: "Guillem Galindo | Software Engineer",
    description: "Software engineer based in Barcelona. Building software with curiosity and precision. Fascinated by mechanical watches and engineering.",
    siteName: "Guillem Galindo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillem Galindo | Software Engineer",
    description: "Software engineer based in Barcelona. Building software with curiosity and precision.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#home" className="skip-to-content">
          Skip to main content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
