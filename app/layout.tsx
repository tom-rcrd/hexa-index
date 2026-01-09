import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavorisProvider } from '../contexts/FavorisContext'
import ToastUndo from '@/components/ToastUndo'
  


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hexa Index - Ressources pour design·euse·r·s graphique",
  description: "Index de ressources pour design·euse·r·s graphique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <FavorisProvider>
          {children}
          <ToastUndo /> 
        </FavorisProvider>
      </body>
    </html>
  );
}
