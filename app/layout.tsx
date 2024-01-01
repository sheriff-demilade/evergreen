import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";
import { mulish } from "./ui/fonts";
import Footer from "./ui/footer";

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
      <body
        className={`${mulish.className} text-sm xl:text-base text-Paragraph`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
