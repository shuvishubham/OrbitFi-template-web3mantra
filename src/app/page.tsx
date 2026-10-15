"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="shell">
      <Navbar />
      <Hero />
      
      <Footer />
    </main>
  );
}
