import type { Metadata, Viewport } from "next";
import { Mulish, Newsreader, Sacramento } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

// Free stand-ins for the template's Typekit fonts:
// Beaufort Pro -> Newsreader, Muli -> Mulish, Printed Moments -> Sacramento.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  themeColor: "#f4efe7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${mulish.variable} ${sacramento.variable}`}>
      <body>{children}</body>
    </html>
  );
}
