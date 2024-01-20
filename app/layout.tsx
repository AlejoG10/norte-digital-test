import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import ToasterProvider from "@/components/providers/toaster-provider";
import LoginModalProvider from "@/components/providers/login-modal-provider";
import ClientModalProvider from "@/components/providers/client-modal-provider";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Norte Digital Frontend Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ToasterProvider />
        <LoginModalProvider />
        <ClientModalProvider />
        {children}
      </body>
    </html>
  );
}
