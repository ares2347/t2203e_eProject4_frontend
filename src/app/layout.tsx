"use client"
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

// ** MUI Imports
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
