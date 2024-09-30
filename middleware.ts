// middleware/access.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const allowedRoutes = ["/pt", "/en"]; // Rotas permitidas

  // Redireciona para /pt se a rota não for permitida
  if (!allowedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/pt", req.url));
  }

  return NextResponse.next(); // Permite acesso às rotas permitidas
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // Exclui rotas de API e arquivos estáticos
  ],
};
