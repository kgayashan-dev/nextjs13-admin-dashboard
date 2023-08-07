"use client";

import Head from "./Components/Header";
import Link from "next/link";
import TopCards from "./Components/TopCards";
import Recentorders from "./Components/Recentorders";
import Barchart from "./Components/Barchart";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Head />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <Barchart />
        <Recentorders />
      </div>
    </main>
  );
}
