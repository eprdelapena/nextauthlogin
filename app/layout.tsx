import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white h-[100vh] w-[100wh]`}>{children}</body>
    </html>
  );
}
