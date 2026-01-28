import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "와이 커뮤니케이션 (Y Communication) | 오수화",
  description: "대한민국 최고의 스피치·미디어 컨설팅, 전문 연사 섭외 및 교육 기획 전문 기업 와이 커뮤니케이션",
  keywords: ["아나운서", "MC", "스피치", "컨설팅", "연사", "교육"],
  verification: {
    other: {
      "naver-site-verification": "b34ca5d91c44fd053430700febb8601dd656a1ee",
    },
  },
  openGraph: {
    title: "와이 커뮤니케이션 (Y Communication)",
    description: "대한민국 최고의 스피치·미디어 컨설팅 전문 기업",
    url: "https://ycom.live",
    siteName: "와이 커뮤니케이션",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://ycom.live",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${pretendard.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
