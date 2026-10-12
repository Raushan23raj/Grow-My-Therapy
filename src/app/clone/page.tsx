import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { conejo } from "@/content/conejo";

export const metadata: Metadata = {
  title: "Part 1 clone: Conejo Valley Family Counseling homepage",
  description: "Layout-accurate clone of the Conejo Valley Family Counseling homepage, built before the redesign.",
  robots: { index: false, follow: false },
};

export default function ClonePage() {
  return <HomePage content={conejo} theme="conejo" />;
}
