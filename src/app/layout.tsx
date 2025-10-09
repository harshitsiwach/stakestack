import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "Stake, Stack!",
  description: "Gaming platform with pixelated theme",
  icons: {
    icon: '/stakestacklogo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2p.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
