"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const route = usePathname();

  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <nav className="bg-white text-white sticky top-0 border-b-[2px] z-1000">
        <ul className="flex flex-row center gap-[10px] items-center p-5 text-black">
          <li>
            <Link className={`text-[1rem] transition-all duration-20 hover:text-sky-700 ${route === "/" ? "active-link" : ""}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`text-[1rem] transition-all duration-20 hover:text-sky-700 ${route === "/blogs" ? "active-link" : ""}`} href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  );
}
