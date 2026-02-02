import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "AERU | Modern Indulgent Refreshment",
  description: "Designed between water and indulgence. A cold draft of air in a humid world.",
};

import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { CheckoutOverlay } from "@/components/CheckoutOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <CartDrawer />
          <CheckoutOverlay />
        </CartProvider>
      </body>
    </html>
  );
}
