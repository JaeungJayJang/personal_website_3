import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaeung Jang | Software Engineer",
  description: "Software Engineer passionate about building innovative solutions. Experience at BioNTech and BlueSphere Bio. Specializing in full-stack development, machine learning, and modern web technologies.",
  keywords: ["Jaeung Jang", "Software Engineer", "Full Stack Developer", "Machine Learning", "BioNTech", "BlueSphere Bio"],
  authors: [{ name: "Jaeung Jang" }],
  creator: "Jaeung Jang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jang.jaeung.com",
    title: "Jaeung Jang | Software Engineer",
    description: "Software Engineer passionate about building innovative solutions.",
    siteName: "Jaeung Jang Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaeung Jang | Software Engineer",
    description: "Software Engineer passionate about building innovative solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
