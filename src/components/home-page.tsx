import type { SiteContent } from "@/content/types";
import { Approach } from "./sections/approach";
import { Audiences } from "./sections/audiences";
import { Booking } from "./sections/booking";
import { Faq } from "./sections/faq";
import { FocusList } from "./sections/focus-list";
import { Hero } from "./sections/hero";
import { Intro } from "./sections/intro";
import { Journey } from "./sections/journey";
import { Methods } from "./sections/methods";
import { OfficeSection } from "./sections/office";
import { QuoteBanner } from "./sections/quote-banner";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export type Theme = "maya" | "conejo";

/** The template's section order; `office` and `faq` only render when provided. */
export function HomePage({ content, theme }: { content: SiteContent; theme: Theme }) {
  return (
    <div className={`theme-${theme} min-h-screen bg-canvas font-sans font-light text-ink`}>
      <SiteHeader brand={content.brand} nav={content.nav} navCta={content.navCta} />
      <main>
        <Hero hero={content.hero} />
        <Intro intro={content.intro} />
        <Audiences audiences={content.audiences} />
        <QuoteBanner quote={content.quote} />
        <FocusList focus={content.focus} />
        <Approach approach={content.approach} />
        <Journey journey={content.journey} />
        <Methods methods={content.methods} />
        {content.office && <OfficeSection office={content.office} />}
        {content.faq && <Faq faq={content.faq} />}
        <Booking booking={content.booking} />
      </main>
      <SiteFooter brand={content.brand} footer={content.footer} />
    </div>
  );
}
