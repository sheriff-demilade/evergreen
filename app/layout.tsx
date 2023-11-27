import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";
import { mulish } from "./ui/fonts";

export const metadata: Metadata = {
  title: "EverGreen",
  description: "Crafting Green Masterpieces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} text-sm text-Paragraph`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
