import "./globals.css";

import type { Metadata } from "next";
/* import { Bebas_Neue } from "next/font/google";

const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] }); */

export const metadata: Metadata = {
  title: "Mafia Web",
  description: "Creado por Proyexto (E.T.N.°26 - 6° 10°)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
