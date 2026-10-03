import type { Metadata } from "next";
import { Big_Shoulders, Public_Sans, Zilla_Slab, Libre_Franklin } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({ variable: "--font-big-shoulders", subsets: ["latin"] });
const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });
const zillaSlab = Zilla_Slab({ variable: "--font-zilla-slab", subsets: ["latin"], weight: ["500", "700"] });
const libreFranklin = Libre_Franklin({ variable: "--font-libre-franklin", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Troop 65 | Boy Scout troop in Long Beach, California",
  description:
    "Troop 65 is a Scouts BSA troop in Long Beach, California, meeting since 1937. Visit a Tuesday meeting.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${publicSans.variable} ${zillaSlab.variable} ${libreFranklin.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
