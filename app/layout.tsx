import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LifeOS - Life Analyzer",
  description: "Analyze your daily existence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* زدنا "suppressHydrationWarning={true}" هنا 
        باش داك الخطأ ديال الـ Extension يسكت بمرة 
      */}
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}