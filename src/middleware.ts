// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Middleware do next-intl
const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora requisições para arquivos estáticos e APIs
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // Arquivos com extensão
  ) {
    return NextResponse.next();
  }

  const locale = pathname.split("/")[1];

  // Se a rota não começa com /pt ou /en, redireciona para /pt
  if (locale !== "pt" && locale !== "en") {
    return NextResponse.redirect(new URL("/pt", request.url));
  }

  // Se a rota tem algo após /pt ou /en, redireciona para /pt ou /en
  if (pathname.split("/").length > 2) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Aplica o middleware do next-intl
  return intlMiddleware(request);
}

export const config = {
  // Aplica o middleware em todas as rotas
  matcher: "/:path*",
};
