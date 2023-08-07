import "./globals.css";
import { Providers } from "@/utils";
import { PoppinsFont } from "@/theme/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={PoppinsFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
