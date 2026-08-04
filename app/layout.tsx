import type { Metadata } from "next";
import { Big_Shoulders, Public_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://troop65longbeach.org"),
  title: {
    default: "Troop 65 | Boy Scouts of America — Long Beach, CA",
    template: "%s | Troop 65 Long Beach",
  },
  description:
    "Troop 65 is a boy-led Scouts BSA troop in Long Beach, California, serving God and country since 1937. Active, outdoors-focused, and built by the Scouts who run it.",
  icons: {
    icon: "/images/logo/troop-65-patch.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
