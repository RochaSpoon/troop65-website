import type { Metadata } from "next";
import { Anton, Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const sourceSerif = Source_Serif_4({ variable: "--font-source-serif", subsets: ["latin"], axes: ["opsz"] });
const workSans = Work_Sans({ variable: "--font-work-sans", subsets: ["latin"] });

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
    <html lang="en" className={`${anton.variable} ${sourceSerif.variable} ${workSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
