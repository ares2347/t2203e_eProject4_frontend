import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RoleEnum } from "./model/auth/AuthModel";

export function middleware(request: NextRequest) {
  const currentRoles = request.cookies.get("roles")?.value;
  const accessToken = request.cookies.get("token")?.value;
  const url = request.nextUrl.clone();
  
  if((request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname.startsWith("/brand")) && !accessToken){
    url.pathname = "auth/login";
    return NextResponse.redirect(url);
  }
  
  //role-base auth guard
  if (
    !currentRoles?.includes(RoleEnum.ADMIN) &&
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    url.pathname = "/401";
    return NextResponse.redirect(url);
  }
  if (
    !currentRoles?.includes(RoleEnum.ADMIN) &&
    !currentRoles?.includes(RoleEnum.BRAND) &&
    request.nextUrl.pathname.startsWith("/brand")
  ) {
    url.pathname = "/401";
    return NextResponse.redirect(url);
  }

  //redirect base path
  if (url.pathname === "/brand") {
    url.pathname = "/brand/overview";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/admin") {
    url.pathname = "/admin/overview";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/") {
    if (currentRoles?.includes(RoleEnum.ADMIN)) {
      url.pathname = "/admin";
    } else if (currentRoles?.includes(RoleEnum.BRAND)) {
      url.pathname = "/brand";
    } else {
      url.pathname = "/home";
    }
    return NextResponse.redirect(url);
  }
}
