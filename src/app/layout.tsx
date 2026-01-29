import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "궁금하면 500원 기분좋으면 무료사주",
  description: "신년운세, 전통사주, 토정비결, 지정일운세 - 모던 K-전통 스타일 사주 서비스",
  keywords: ["사주", "운세", "신년운세", "토정비결", "전통사주", "무료운세"],
  authors: [{ name: "궁금하면 500원" }],
  openGraph: {
    title: "궁금하면 500원 기분좋으면 무료사주",
    description: "당신의 운명을 사주로 확인하세요",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1A1C2C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
