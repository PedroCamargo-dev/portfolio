import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/StarBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Camargo",
  description: "Portifolio of Pedro Camargo",
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
        <StarCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
