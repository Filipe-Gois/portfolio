import type { Metadata } from "next";
import "@/Styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Filipe Góis",
  description: "Meu Portfólio desenvolvedor full-stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(`antialiased`, inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
