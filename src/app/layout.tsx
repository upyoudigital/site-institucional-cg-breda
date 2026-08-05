import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CG Breda | Contabilidade estratégica",
  description:
    "Contabilidade estratégica para empresas em Campinas, Indaiatuba e São Paulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
