import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/components/Templates";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Camargo",
  description: "Portfolio of Pedro Camargo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Template>{children}</Template>
      </body>
    </html>
  );
}
