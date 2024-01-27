import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-gradient-to-r from-purple-100 to-cyan-100">
        {children}
      </body>
    </html>
  );
}
