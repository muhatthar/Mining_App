"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div className="flex font-poppins">
          <SideBar></SideBar>
          <div className={`${pathname === '/login' || pathname === '/register' ? "bg-[url('/images/bg-image.svg')] relative isolate after:absolute after:z-0 bg-cover after:inset-0" : "bg-transparent mx-[35px] my-[23px]"} flex flex-col flex-1`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
