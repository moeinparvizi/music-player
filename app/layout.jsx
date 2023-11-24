import React from "react";
// styles
import { Figtree } from "next/font/google";
import "./globals.css";
// componets
import Slidebar from "@/components/Sidebar";
import Model from "@/components/Model";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "spotify clone",
  description: "listen to music!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Model />
        <Slidebar>{children}</Slidebar>
      </body>
    </html>
  );
}
