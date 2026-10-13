import type { SiteContent } from "@/content/types";
import { Accent, Eyebrow, Photo, TextLink } from "../ui";

export function Approach({ approach }: { approach: SiteContent["approach"] }) {
  return (
    <section id={approach.id} className="bg-muted lg:flex lg:py-[8vw]">
      <div className="px-6 py-20 sm:px-[8vw] lg:w-[72vw] lg:py-0 lg:pr-0 lg:pl-[8.8vw]">
        <Eyebrow>{approach.eyebrow}</Eyebrow>
        <h2 className="mt-8 font-serif text-title font-light text-heading lg:mt-[9vw] lg:max-w-[63vw]">
          <Accent text={approach.title} />
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-x-8 lg:mt-[3.55vw] lg:w-[59.4vw] lg:gap-x-[1.3vw]">
          <div>
            <Eyebrow>{approach.lead}</Eyebrow>
            <p className="mt-4 text-body">{approach.body[0]}</p>
          </div>
          <p className="text-body">{approach.body[1]}</p>
        </div>
        <TextLink link={approach.button} className="mt-10 lg:mt-[6.4vw]" />
      </div>
      <div className="relative aspect-[2/3] w-full lg:ml-auto lg:aspect-[346/722] lg:w-[22.75vw]">
        <Photo image={approach.image} sizes="(min-width: 1024px) 23vw, 100vw" />
      </div>
    </section>
  );
}
