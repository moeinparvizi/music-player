import { Figtree } from "next/font/google";
import "./globals.css";

import Slidebar from "@/components/Sidebar";
import React from "react";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "spotify clone",
  description: "listen to music!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* text
        <div className="flex gap-2">{children} # this is a test</div>
        text */}

        <Slidebar>{children}</Slidebar>
      </body>
    </html>
  );
}
