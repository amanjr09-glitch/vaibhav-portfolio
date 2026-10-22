import type { Metadata } from "next";
import { Geist, Kalam } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const kalam = Kalam({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-kalam" });

export const metadata: Metadata = {
  title: "Vaibhav Pal",
  description: "Vaibhav Pal: senior full-stack engineer and two-time founder, based in Bengaluru, India.",
  openGraph: {
    title: "Vaibhav Pal",
    description: "Senior full-stack engineer and two-time founder, based in Bengaluru, India.",
    type: "website",
  },
};

// Runs before paint so a saved theme never flashes the wrong colours.
const boot = `document.documentElement.classList.add('js');try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${kalam.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
