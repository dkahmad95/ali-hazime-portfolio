import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Hazime Portfolio",
  description: "Created by Ahmad Dekmak +96178940697",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoMono.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}