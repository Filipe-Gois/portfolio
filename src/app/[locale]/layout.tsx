import type { Metadata } from "next";
import "@/Styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "F. Góis",
  description: "Meu Portfólio como desenvolvedor full-stack.",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale === "en" ? "en" : "pt-BR"}>
      <body
        className={cn(
          `antialiased overflow-x-hidden bg-darkScheme-primary`,
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
