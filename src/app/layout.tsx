import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valiun Tech | Enterprise Agentic AI & Cloud Architecture",
  description: "Valiun Tech specializes in Agentic AI solutions, scalable cloud architectures (AWS/Azure), and premium digital transformation for enterprises.",
};

import { AnimationProvider } from "@/components/ui/AnimationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-white antialiased overflow-x-hidden selection:bg-blue-500/30`}>
        <AnimationProvider>
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  );
}
