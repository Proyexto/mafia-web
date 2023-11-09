import "./globals.css";
import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";

/* import { Bebas_Neue } from "next/font/google";
const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] }); */

export const metadata: Metadata = {
  title: "Mafia Web",
  description: 'Juego Web de Rol Creado por Proyexto (E.T.N.°26 "Confederación Suiza" - 6° 10° - 2023)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
