import "./globals.css";
import Navbar from "@/components/Navbar";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MONF.",
  description: "My Monster Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${pixelFont.className} min-h-screen bg-transparent text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
