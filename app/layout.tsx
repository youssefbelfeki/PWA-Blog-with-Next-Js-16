import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Next PWA Blog News",
  description: "Simple blog built with Next.js PWA",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground ">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
