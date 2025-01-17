import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Products from "./products/Products";
import bai5 from "./navbar/Bai5";
import Bai5 from "./navbar/Bai5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Products></Products> */}
        {children}
        <Bai5></Bai5>
        </body>
    </html>
  );
}
