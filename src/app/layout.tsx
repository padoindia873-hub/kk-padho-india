import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KK PADHO INDIA",
  description: "Empowering students through education and scholarships",
  icons: {
    icon: '/images/logo.png',      // For regular favicon
    shortcut: '/images/logo.png',   // For shortcut icon
    apple: '/images/logo.png',      // For Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon formats for better compatibility */}
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}