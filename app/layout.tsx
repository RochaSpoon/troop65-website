import type { Metadata } from "next";
import { Big_Shoulders, Public_Sans } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
  adjustFontFallback: false,
});
const publicSans = Public_Sans({ variable: "--font-public-sans", subsets: ["latin"] });

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
    <html lang="en" className={`${bigShoulders.variable} ${publicSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
