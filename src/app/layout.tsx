import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollCart from "@/components/ScrollCart";

const playfair = Playfair_Display({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
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
    "Authentic Indian street food in Wolverhampton — chaat, vada pav, momos, curries and more. 1A North Street, WV1 1RE. Order via Just Eat or Uber Eats, or visit us in person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} h-full`}>
      <body className="relative flex min-h-full flex-col bg-cream text-ink antialiased">
        <Nav />
        <ScrollCart />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
