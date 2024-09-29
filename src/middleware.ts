import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const allowedRoutes = ["/"]; // Apenas a rota '/' é permitida

  // Se o caminho atual não for a rota permitida, redireciona para '/'
  if (!allowedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Permite o acesso se a rota for permitida
  return NextResponse.next();
}

// Exclui as rotas de arquivos estáticos e API
export const config = {
  matcher: [
    // Aplica o middleware em todas as rotas, exceto as rotas de arquivos internos do Next.js
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
