import type { Metadata } from "next";
import { Archivo_Narrow, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"] });
const archivoNarrow = Archivo_Narrow({ variable: "--font-archivo-narrow", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://t65.org"),
  title: {
    default: "Troop 65 | Boy Scout Troop in Long Beach, California",
    template: "%s | Troop 65 Long Beach",
  },
  description:
    "Troop 65 is a Boy Scout troop (Scouts BSA) in Long Beach, California, meeting since 1937. More than 200 Eagle Scouts. Visit a Tuesday meeting.",
  openGraph: {
    siteName: "Troop 65 Long Beach",
    locale: "en_US",
    type: "website",
    images: [{ url: "/photos/troop-bear-statue.jpg", width: 1277, height: 960, alt: "Troop 65 scouts on a campout" }],
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hanken.variable} ${archivoNarrow.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
