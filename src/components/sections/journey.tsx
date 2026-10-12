import type { SiteContent } from "@/content/types";
import { Accent, Photo } from "../ui";

export function Journey({ journey }: { journey: SiteContent["journey"] }) {
  return (
    <section className="bg-surface pt-16 sm:pt-20 lg:flex lg:items-end lg:py-[6.6vw]">
      <div className="relative aspect-[812/559] lg:w-[53.4vw] lg:shrink-0">
        <Photo image={journey.image} sizes="(min-width: 1024px) 54vw, 100vw" />
      </div>
      <h2 className="px-6 py-16 font-serif text-title font-light text-heading sm:px-[8vw] lg:ml-[4.5vw] lg:w-[37vw] lg:p-0">
        <Accent text={journey.title} />
      </h2>
    </section>
  );
}
