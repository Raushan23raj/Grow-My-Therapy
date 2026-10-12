import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { maya, OFFICE_ADDRESS } from "@/content/maya";
import { siteUrl } from "@/lib/site-url";

const title = "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD";
const description =
  "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, panic, trauma (EMDR), and burnout. In-person sessions in Santa Monica and secure telehealth across California.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD",
    images: [{ url: "/images/office-window-light.jpg", width: 1500, height: 1125, alt: "Dr. Maya Reynolds’ Santa Monica therapy office" }],
  },
};

const address = {
  "@type": "PostalAddress",
  streetAddress: OFFICE_ADDRESS.street,
  addressLocality: OFFICE_ADDRESS.city,
  addressRegion: OFFICE_ADDRESS.region,
  postalCode: OFFICE_ADDRESS.postalCode,
  addressCountry: "US",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#practice`,
    name: "Dr. Maya Reynolds, PsyD",
    description,
    url: siteUrl,
    image: `${siteUrl}/images/office-window-light.jpg`,
    address,
    areaServed: [
      { "@type": "City", name: "Santa Monica" },
      { "@type": "State", name: "California" },
    ],
    medicalSpecialty: "Psychiatric",
    availableService: maya.audiences.items.map((service) => ({ "@type": "MedicalTherapy", name: service.title })),
    employee: {
      "@type": "Person",
      name: "Maya Reynolds",
      honorificPrefix: "Dr.",
      honorificSuffix: "PsyD",
      jobTitle: "Licensed Clinical Psychologist",
      image: `${siteUrl}/images/dr-maya-reynolds.jpg`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: maya.faq?.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <HomePage content={maya} theme="maya" />
    </>
  );
}
