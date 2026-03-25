import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'AERRATRIC TECHNOLOGY INC - Building Smarter Digital Systems',
  description: 'AERRATRIC TECHNOLOGY INC helps companies design, develop, modernize, and scale custom software, AI, web, mobile, and cloud solutions for business growth.',
  keywords: ["Aerratric Technology, custom software, AI solutions, web development, mobile apps, cloud solutions, digital transformation, tech consulting, software development company"],
  openGraph: {
    "title": "AERRATRIC TECHNOLOGY INC - Building Smarter Digital Systems",
    "description": "AERRATRIC TECHNOLOGY INC helps companies design, develop, modernize, and scale custom software, AI, web, mobile, and cloud solutions for business growth.",
    "url": "https://aerrartictechnology.com",
    "siteName": "AERRATRIC TECHNOLOGY INC",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-sleek-dark-themed-software-dashboard-i-1774450480358-9e1ac66d.png",
        "alt": "Modern software dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AERRATRIC TECHNOLOGY INC - Building Smarter Digital Systems",
    "description": "AERRATRIC TECHNOLOGY INC helps companies design, develop, modernize, and scale custom software, AI, web, mobile, and cloud solutions for business growth.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/a-sleek-dark-themed-software-dashboard-i-1774450480358-9e1ac66d.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
