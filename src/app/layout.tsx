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
  icons: {
    icon: "https://ik.imagekit.io/q0gorn2pwv/VALIUN%20-%20New%20Final%20Favicon.png",
  },
};

import { AnimationProvider } from "@/components/ui/AnimationProvider";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#030303] text-white antialiased overflow-x-hidden selection:bg-blue-500/30`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AnimationProvider>
            <SmoothScroll>
              <Navbar />
              <main className="min-h-screen pt-20">
                {children}
              </main>
              <Footer />
            </SmoothScroll>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
