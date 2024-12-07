import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-light.png" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "FCdzkVvZdDuGnoykHddUO",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          data-chatbot-id="FCdzkVvZdDuGnoykHddUO"
          data-domain="www.chatbase.co"
          defer
        ></script>
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
