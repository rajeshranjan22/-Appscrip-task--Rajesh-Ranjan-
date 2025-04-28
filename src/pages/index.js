import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductListingPage from "@/components/ProductListingPage";
import Footer from "@/components/Footer";

// Fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function Home() {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Navbar />
      <Hero />
      <ProductListingPage />
      <Footer />
    </main>
  );
}
