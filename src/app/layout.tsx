import type { Metadata } from "next";
import { Outfit, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cedarvilleCursive = Cedarville_Cursive({
  variable: "--font-cedarville",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A modern, responsive portfolio built with Next.js, React, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cedarvilleCursive.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          defaultTheme="light"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
