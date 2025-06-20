import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mecnomit service",
  description: "trust, talent and Technology,",
  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-grow w-full">{children}</main>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
