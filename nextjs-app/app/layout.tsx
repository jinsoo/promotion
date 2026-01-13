import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "와이 커뮤니케이션 (Y Communication) | 오수화",
  description: "대한민국 최고의 스피치·미디어 컨설팅, 전문 연사 섭외 및 교육 기획 전문 기업 와이 커뮤니케이션",
  keywords: ["아나운서", "MC", "스피치", "컨설팅", "연사", "교육"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${notoSansKR.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
