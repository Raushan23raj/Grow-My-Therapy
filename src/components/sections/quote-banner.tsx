import type { SiteContent } from "@/content/types";
import { Accent, Photo } from "../ui";

export function QuoteBanner({ quote }: { quote: SiteContent["quote"] }) {
  return (
    <section className="relative isolate flex min-h-[30rem] items-end overflow-hidden bg-ink lg:h-[39.4vw] lg:min-h-0">
      <Photo image={quote.image} sizes="100vw" className="-z-20" />
      <div aria-hidden className="absolute inset-0 -z-10 [background:var(--overlay)]" />
      <h2 className="px-6 pb-16 font-serif text-title font-light text-canvas sm:px-[8vw] lg:w-[68.5vw] lg:pr-0 lg:pb-[6.7vw] lg:pl-[8.8vw]">
        <Accent text={quote.text} />
      </h2>
    </section>
  );
}
