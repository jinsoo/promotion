import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo/jsonLd";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: {
    default: "와이 커뮤니케이션 (Y Communication) | 전문 아나운서·MC 섭외",
    template: "%s | 와이 커뮤니케이션",
  },
  description:
    "대한민국 최고의 스피치·미디어 컨설팅, 전문 연사 섭외 및 교육 기획 전문 기업 와이 커뮤니케이션. 전국 행사MC, 아나운서 섭외, 스피치 교육.",
  keywords: [
    "아나운서",
    "MC",
    "스피치",
    "컨설팅",
    "연사",
    "교육",
    "아나운서섭외",
    "전문MC섭외",
    "행사MC",
    "기업행사MC",
    "스피치교육",
    "미디어트레이닝",
    "보이스트레이닝",
    "와이커뮤니케이션",
    "ycom",
    "전국", "서울", "경기", "강원", "부산", "인천", "대전", "대구", "광주", "울산", "세종", "제주"
  ],
  verification: {
    other: {
      "naver-site-verification": "b34ca5d91c44fd053430700febb8601dd656a1ee",
      NaverBot: "All",
      Yeti: "All",
    },
  },
  openGraph: {
    title: "와이 커뮤니케이션 (Y Communication)",
    description:
      "대한민국 최고의 스피치·미디어 컨설팅 전문 기업. 전국 아나운서·MC 섭외 및 교육.",
    url: "https://ycom.live",
    siteName: "와이 커뮤니케이션",
    locale: "ko_KR",
    type: "website",

  },
  twitter: {
    card: "summary_large_image",
    title: "와이 커뮤니케이션 (Y Communication)",
    description:
      "대한민국 최고의 스피치·미디어 컨설팅 전문 기업. 전국 아나운서·MC 섭외 및 교육.",

  },
  alternates: {
    canonical: "https://ycom.live",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        {/* JSON-LD 구조화 데이터 — 네이버/구글 리치 스니펫 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd()),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
