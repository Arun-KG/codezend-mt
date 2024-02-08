import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.scss";

import StoreProvider from "@/store/StoreProvider";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "codezend-mt",
  description: "An application made as a technological proof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={comfortaa.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
