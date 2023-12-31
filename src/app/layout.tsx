import { Providers } from "@/utils/react-query";
import { PoppinsFont } from "@/styles/typography";
import type { Metadata } from "next";
import "./globals.css";

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
