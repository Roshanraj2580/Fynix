import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fynix",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-white border-t border-blue-100 py-8">
  <div className="max-w-4xl mx-auto px-6 flex flex-col gap-2 items-center">
    <div className="flex items-center gap-3 mb-2">
      <img src="/logo-sm.png" alt="Fynix Logo" className="h-7 w-7 rounded" />
      <span className="font-semibold text-xl tracking-wide text-blue-700">Fynix</span>
    </div>
    <p className="text-gray-500 text-sm mb-1">
      AI-powered finance tracker — manage bills, automate tasks, and get real-time insights for a smarter financial life.
    </p>
    <p className="text-xs text-gray-400">© {new Date().getFullYear()} Fynix. Crafted with AI smartness. All rights reserved.</p>
  </div>
</footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
