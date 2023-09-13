import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
            <body
                className={
                    inter.className +
                    " bg-gradient-to-b from-[#489cff40] to-[#6c6ad340] h-screen"
                }
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
