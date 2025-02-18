import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "./lib/Wrapper";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  verification: {
    google: "EAIJVU85mrJyz4LmITD",
  },
  title: "CodeMate - Software Agency ",
  description: "CodeMate is a software development agency that provides web development, mobile app development, and custom software development services.",
  keywords: "software development, web development, mobile app development, custom software development, Code Mate, CodeMate",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  robots: "follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1,",
  metadataBase: new URL("https://codemate.vercel.app"),
  openGraph: {
    title: "CodeMate",
    description: "Software Development Company",
    url: "https://codemate.vercel.app",
    siteName: "CodeMate",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Wrapper>
        <Head>
        <meta name="google-site-verification" content="EAIJVU85mrJyz4LmITD" />
      </Head>
          <Header />

          {children}
          <SpeedInsights />
          < Analytics/>
        </Wrapper>

        <Footer />



      </body>
    </html>
  );
}
