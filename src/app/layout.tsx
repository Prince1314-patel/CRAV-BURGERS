import type { Metadata } from "next";
import { Archivo, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const archivo = Archivo({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Street Bites | Indian Street Food, Wolverhampton",
  description:
    "Authentic Indian street food in Wolverhampton: chaat, vada pav, momos, curries and more. 1A North Street, WV1 1RE. Order via Just Eat or Uber Eats, or visit us in person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${poppins.variable} h-full`}>
      <body className="relative flex min-h-full flex-col bg-cream text-ink antialiased">
        <Nav />
        <main id="page-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
