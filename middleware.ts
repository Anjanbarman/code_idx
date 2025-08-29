import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes
} from "@/routes";

import authConfig from "@/auth.config";

const {auth} = NextAuth(authConfig);

export default auth((req) => {
  // Custom middleware logic here
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        // Allow access to all /api/auth/* routes
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            // Redirect to login page if not logged in
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        // Redirect to login page if not logged in and not a public route
        return Response.redirect(new URL("/auth/sign-in", nextUrl));
    }
    return null;
});

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"
    ],
};
