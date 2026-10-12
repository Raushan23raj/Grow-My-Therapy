import type { SiteContent } from "@/content/types";
import { Accent, Eyebrow, Photo } from "../ui";

export function Intro({ intro }: { intro: SiteContent["intro"] }) {
  return (
    <section className="bg-canvas pt-6 lg:pt-[7vw] lg:pb-[9.8vw]">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="px-6 sm:px-[8vw] lg:mt-[3.6vw] lg:w-[61vw] lg:pr-0 lg:pl-[8.8vw]">
          <h2 className="font-serif text-title font-light text-heading lg:max-w-[48vw]">
            <Accent text={intro.title} />
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-x-8 lg:mt-[4.1vw] lg:w-[52vw] lg:gap-x-[1.3vw]">
            <div>
              <Eyebrow>{intro.lead}</Eyebrow>
              <p className="mt-4 text-body">{intro.body[0]}</p>
            </div>
            <p className="text-body">{intro.body[1]}</p>
          </div>
        </div>
        <div className="relative mt-14 aspect-[4/5] w-full md:aspect-[16/10] lg:mt-0 lg:ml-auto lg:aspect-[461/640] lg:w-[30.3vw]">
          <Photo image={intro.image} sizes="(min-width: 1024px) 31vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
