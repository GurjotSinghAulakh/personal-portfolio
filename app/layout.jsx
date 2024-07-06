import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
      <link rel="icon" href="/logo-light.png" sizes="any" />
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
