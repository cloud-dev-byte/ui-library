import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/shared/site-header";
import { SiteFooter } from "@/shared/site-footer";
import { siteConfig } from "@/shared/site-config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: "Open-source UI designs and components for developers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
