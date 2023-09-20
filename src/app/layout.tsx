import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sarasniyam",
    description: "Sarasniyam website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/logo.png" />
            </head>
            <body
                className={
                    inter.className +
                    " bg-gradient-to-b from-[#489cff40] to-[#6c6ad340] h-screen"
                }
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
